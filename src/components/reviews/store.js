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
    const productSold = await ProductSold.findByPk(productSoldId,
      {
        include: [
          {
            model: Cart,
            attributes: ['status']
          },
          {
            model: Product,
            attributes: ['rating', 'id']

          }]
      })

    const hasReview = await productSold.getReview()

    if (productSold.Cart.status !== 'Entregado') {
      throw new Error('No puedes hacer un review a un producto que no fue entregado')
    }

    if (!hasReview) {
      const newReview = await Review.create(review)
      productSold.setReview(newReview)
        .then(async review => {
          if (productSold.product.rating === null) {
            productSold.product.rating = review.rating
            await productSold.product.save()
          } else {
            const ratings = await ProductSold.findAll({
              where: { productId: productSold.product.id },
              include: {
                model: Review,
                attributes: ['rating']
              }
            })

            let rank = 0
            for (let i = 0; i < ratings.length; i++) {
              console.log(ratings[i].Review.rating)
              rank = rank + parseInt(ratings[i].Review.rating)
            }
            const promedio = Math.floor(rank / ratings.length)
            productSold.product.rating = promedio
            productSold.product.save()
            return productSold.product.rating
          }
        })

      return 'El review fue creado con éxito'
    } else {
      throw new Error('El producto ya tiene review')
    }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  addReview,
  getReview
}
