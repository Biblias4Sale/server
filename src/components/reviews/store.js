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
    const productSold = await ProductSold.findByPk(productSoldId, { include: [{ model: Cart }, { model: Product }, { model: Review }] })
    // if (productSold.dataValues.Cart.dataValues.status !== 'Entregado') { throw new Error('No puedes hacer un review a un producto que no fue entregado') }
    // if (productSold.dataValues.Cart.dataValues.status === 'Entregado') {
    const hasReview = await productSold.getReview()
    const producto = await Product.findByPk(productSold.productId, { include: { model: ProductSold, include: [{ model: Cart, include: { model: User } }, { model: Review }] } })
    if (!hasReview) {
      if (producto.rating === null) {
        producto.rating = review.rating
        producto.save()
      } else {
        console.log(producto.ProductSolds)
        const ranks = producto.ProductSolds.map(obj => {
          return {
            points: parseInt(obj.dataValues.Review.dataValues.rating)
          }
        })
        ranks.push({ points: parseInt(review.rating) })
        // console.log(ranks, 'ratings')
        // console.log(ranks)
        let acc = 0
        for (let i = 0; i < ranks.length; i++) {
          acc = acc + ranks[i].points
        }
        const rating = Math.floor(acc / ranks.length)
        console.log(rating)
      }
      const newReview = await Review.create(review)
      productSold.setReview(newReview)
      return 'Review agregado con éxito'
    } else {
      throw new Error('El producto ya tiene review')
    }
    // }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  addReview,
  getReview
}
