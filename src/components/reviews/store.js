const { ProductSold, Cart, Review, Product, User } = require('../../db')

const getReview = async (productId) => {
  try {
    const producto = await Product.findByPk(productId, { include: { model: ProductSold, include: [{ model: Cart, include: { model: User } }, { model: Review }] } })
    if (!producto) throw new Error('Producto no encontrado')
    return producto
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addReview = async (productSoldId, review) => {
  try {
    const productSold = await ProductSold.findByPk(productSoldId, { include: { model: Cart } })
    if (productSold.dataValues.Cart.dataValues.status !== 'Entregado') { throw new Error('No puedes hacer un review a un producto que no fue entregado') }
    if (productSold.dataValues.Cart.dataValues.status === 'Entregado') {
      const hasReview = await productSold.getReview()

      if (!hasReview) {
        const newReview = await Review.create(review)
        productSold.setReview(newReview)
        return 'Review agregado con éxito'
      } else {
        throw new Error('El producto ya tiene review')
      }
    }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  addReview,
  getReview
}
