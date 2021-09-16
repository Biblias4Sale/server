const { Cart, Product, User, ProductSold } = require('../../db')

const getCart = async (id) => {
  try {
    const cart = await Cart.findOne({ where: { UserId: id, status: 'En proceso' }, include: ProductSold })
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

const addProduct = async (cartId, productId, infoProduct) => {
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
      productSold.price = product.price
      return 'Update product'
    }
    return 'Not change product'
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getCart,
  addProduct
}
