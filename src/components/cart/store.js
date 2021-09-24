const { Cart, Product, User, ProductSold, Brand } = require('../../db')
const { Op } = require('sequelize')
const mail = require('../marketing/handler/mailing')
const sms = require('../marketing/handler/sms')
const validation = require('../../helpers/marketingValidators')

const getCart = async (id) => {
  try {
    const cart = await Cart.findOne({
      where: { UserId: id, status: 'En proceso' },
      attributes: ['id', 'status'],
      include: {
        model: ProductSold,
        attributes: ['id', 'qty'],
        include: {
          model: Product,
          attributes: ['id', 'model', 'img', 'price', 'stock'],
          include: {
            model: Brand,
            attributes: ['name']
          }
        }
      }
    })

    if (!cart) {
      const user = User.findByPk(id)
      const cart = await user.createCart({ status: 'En proceso' })
      return cart
    }
    return cart
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const getOrders = async (id) => {
  try {
    const cart = await Cart.findAll({
      where: { UserId: id, status: { [Op.not]: 'En proceso' } },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: ProductSold,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
          model: Product,
          attributes: ['id', 'model', 'img'],
          exclude: ['createdAt', 'updatedAt'],
          include: {
            model: Brand,
            atributes: ['name'],
            exclude: ['createdAt', 'updatedAt']
          }
        }
      }
    })
    return cart
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const confirmCart = async (cartId, userId, price) => {
  try {
    const cart = await Cart.findByPk(cartId, {
      include: {
        model: ProductSold,
        attributes: ['qty', 'id'],
        include: {
          model: Product,
          attributes: ['id']
        }
      }
    })

    cart.status = 'Pendiente de confirmación de pago'
    cart.confirmationPending = new Date()
    cart.totalAmount = price
    cart.save()
    const user = await User.findByPk(userId)
    const newCart = await user.createCart({ status: 'En proceso' })

    const pSold = cart.ProductSolds
    for (let i = 0; i < cart.ProductSolds.length; i++) {
      const qtyToDecrease = pSold[i].qty
      Product.findByPk(pSold[i].product.id)
        .then(prod => {
          pSold[i].price = prod.price
          pSold[i].save()
          if (prod.stock >= qtyToDecrease) {
            prod.stock = prod.stock - qtyToDecrease
            prod.save()
          } else {
            throw new Error('No hay suficiente stock')
          }
        })
    }

    // return { message: 'Cart confirmed', CartInProgress: newCart.id }
    return [user, { message: 'Cart confirmed', CartInProgress: newCart.id }]
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const newProduct = async (cartId, productId, infoProduct) => {
  try {
    const cart = await Cart.findByPk(cartId)
    const product = await Product.findByPk(productId)
    const productSold = await ProductSold.findOne({ where: { CartId: cartId, productId: productId } })
    if (!productSold) {
      const newProductSold = await cart.createProductSold({ qty: infoProduct.qty, price: product.price, productId: productId })
      return newProductSold
    }
    if (infoProduct.amount) {
      productSold.qty = infoProduct.qty
      productSold.save()
      return 'Update product'
    }
    return 'Not change product'
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const addProduct = async (cartId, productId, qty = 1) => {
  try {
    const cart = await Cart.findByPk(cartId)
    const product = await Product.findByPk(productId)
    const productSold = await ProductSold.findOne({ where: { CartId: cartId, productId: productId } })
    if (!productSold) {
      const newProductSold = await cart.createProductSold({ qty, price: product.price, productId: productId })
      return newProductSold
    }
    if (product.stock > productSold.qty) {
      productSold.qty = String(parseInt(productSold.qty) + qty)
    } else {
      throw new Error('Producto sin stock')
    }

    productSold.save()
    return ({ message: 'Increased amount', qty: ProductSold.qty })
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const subProduct = async (cartId, productId) => {
  try {
    const productSold = await ProductSold.findOne({ where: { CartId: cartId, productId: productId } })
    if (!productSold) return 'Product not found'
    const product = await Product.findByPk(productId)
    if (productSold.dataValues.qty > 1) {
      productSold.qty = String(parseInt(productSold.qty) - 1)
    }
    if (productSold.qty === 0) {
      await ProductSold.destroy({ where: { id: productSold.id } })
      return 'Removed product'
    }
    productSold.price = product.price
    productSold.save()
    return ({ message: 'Decreased amount', qty: ProductSold.qty })
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const delProduct = async (cartId, productId) => {
  try {
    const productSold = await ProductSold.findOne({ where: { CartId: cartId, productId: productId } })
    await ProductSold.destroy({ where: { id: productSold.id } })
    return 'Removed product'
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const updateState = async (cartID, status) => {
  const values = ['Pendiente nuevo pago', 'En preparación', 'Despachado', 'Entregado', 'Cancelado']

  if (values.includes(status)) {
    switch (status) {
      case 'Pendiente nuevo pago':

        await Cart.update(
          {
            status: 'Pendiente nuevo pago',
            paymentPending: new Date()
          },
          { where: { id: cartID } }
        )
        break
      case 'En preparación':
        Cart.findByPk(cartID).then(cart => {
          if (cart.preparationDate === null) {
            Cart.update(
              {
                status: 'En preparación',
                preparationDate: new Date()
              },
              { where: { id: cartID } }
            )
          }
        })
        break
      case 'Despachado':
        if (await validation.mailConfirmCart()) mail.confirmCart('amigo')
        if (await validation.smsConfirmCart()) sms.confirmCart('amigo')
        Cart.findByPk(cartID).then(cart => {
          if (cart.dispatchDate === null) {
            Cart.update(
              {
                status: 'Despachado',
                dispatchDate: new Date()
              },
              { where: { id: cartID } }
            )
          }
        })
        break
      case 'Entregado':
        if (await validation.mailConfirmCart()) mail.confirmCart('amigo')
        if (await validation.smsConfirmCart()) sms.confirmCart('amigo')
        Cart.findByPk(cartID).then(cart => {
          if (cart.deliveryDate === null) {
            Cart.update(
              {
                status: 'Entregado',
                deliveryDate: new Date()
              },
              { where: { id: cartID } }
            )
          }
        })
        break
      case 'Cancelado':
        if (await validation.mailConfirmCart()) mail.confirmCart('amigo')
        if (await validation.smsConfirmCart()) sms.confirmCart('amigo')
        Cart.findByPk(cartID).then(cart => {
          if (cart.cancelDate === null) {
            Cart.update(
              {
                status: 'Cancelado',
                cancelDate: new Date()
              },
              { where: { id: cartID } }
            )
          }
        })
        break
      default:

        break
    }

    const cart = await Cart.findByPk(cartID)
    return cart
  } else {
    throw new Error('Debes enviar un status válido')
  }
}

module.exports = {
  getCart,
  getOrders,
  confirmCart,
  newProduct,
  addProduct,
  subProduct,
  delProduct,
  updateState
}
