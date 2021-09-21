const { Cart, Product, User, ProductSold } = require('../../db')
const { Op } = require('sequelize')

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
          attributes: ['id', 'brand', 'model', 'img', 'price', 'stock']
        }
      }
    })

    if (!cart) {
      const user = User.findByPk(id)
      const cart = await user.createCart({ status: 'En proceso' })
      return cart.id
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
      attributes: ['id', 'status'],
      include: {
        model: ProductSold,
        attributes: ['id', 'qty', 'price'],
        include: {
          model: Product,
          attributes: ['id', 'brand', 'model', 'img']
        }
      }
    })
    // console.log(cart)
    return cart
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const confirmCart = async (cartId, userId) => {
  try {
    const cart = await Cart.findByPk(cartId)
    cart.status = 'Generado'
    cart.soldDate = new Date()
    cart.save()
    const user = await User.findByPk(userId)
    const newCart = await user.createCart({ status: 'En proceso' })
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

module.exports = {
  getCart,
  getOrders,
  confirmCart,
  newProduct,
  addProduct,
  subProduct,
  delProduct
}
