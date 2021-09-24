const store = require('./store')
const moment = require('moment')

const getReview = async (productId) => {
  try {
    const response = await store.getReview(productId)
    const reviews = []

    response.ProductSolds.forEach(obj => {
      if (obj.Review !== null) {
        const fecha = obj.Review.createdAt
        const fechaMoment = moment(fecha).format('L')
        reviews.push({
          user: obj.Cart.User.name,
          title: obj.Review.title,
          rating: obj.Review.rating,
          description: obj.Review.description,
          fecha: fechaMoment
        })
      }
    })
    return reviews
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addReview = (productSoldId, review) => store.addReview(productSoldId, review)

module.exports = {
  addReview,
  getReview
}
