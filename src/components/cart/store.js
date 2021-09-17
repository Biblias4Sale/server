const { Cart, Product, User, ProductSold } = require('../../db')

const getCart = async (id) => {
  try {
    const cart = await Cart.findOne({
      where: { UserId: id, status: 'En proceso' },
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
    // const idProducts = cart.ProductSolds.map(item => item.dataValues.productId)
    // const product = idProducts.map(async (id) => await Product.findByPk(id))

    if (!cart) {
      const user = User.findByPk(id)
      const cart = await user.createCart({ status: 'En proceso' })
      return cart.id
    }
    return cart
  } catch (error) {
    return error
  }
}

const confirmCart = async (cartId, userId) => {
  try {
    const cart = await Cart.findByPk(cartId)
    cart.status = 'Generado'
    cart.save()
    const user = await User.findByPk(userId)
    const newCart = await user.createCart({ status: 'En proceso' })
    return ({ message: 'Cart confirmed', CartInProgress: newCart.id })
  } catch (error) {
    return error
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
  } catch (error) {
    console.log(error)
  }
}

const addProduct = async (cartId, productId) => {
  try {
    const cart = await Cart.findByPk(cartId)
    const product = await Product.findByPk(productId)
    const productSold = await ProductSold.findOne({ where: { CartId: cartId, productId: productId } })
    if (!productSold) {
      const newProductSold = await cart.createProductSold({ qty: '1', price: product.price, productId: productId })
      return newProductSold
    }
    productSold.qty = String(parseInt(productSold.qty) + 1)
    productSold.save()
    return ({ message: 'Increased amount', qty: ProductSold.qty })
  } catch (error) {
    console.log(error)
  }
}

const subProduct = async (cartId, productId) => {
  try {
    const productSold = await ProductSold.findOne({ where: { CartId: cartId, productId: productId } })
    if (!productSold) return 'Product not found'
    const product = await Product.findByPk(productId)
    productSold.qty = String(parseInt(productSold.qty) - 1)
    if (productSold.qty === '0') {
      await ProductSold.destroy({ where: { id: productSold.id } })
      return 'Removed product'
    }
    productSold.price = product.price
    productSold.save()
    return ({ message: 'Decreased amount', qty: ProductSold.qty })
  } catch (error) {
    console.log(error)
  }
}

const delProduct = async (cartId, productId) => {
  try {
    const productSold = await ProductSold.findOne({ where: { CartId: cartId, productId: productId } })
    await ProductSold.destroy({ where: { id: productSold.id } })
    return 'Removed product'
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getCart,
  confirmCart,
  newProduct,
  addProduct,
  subProduct,
  delProduct
}
