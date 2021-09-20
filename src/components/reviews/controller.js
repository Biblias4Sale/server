const store = require('./store')
const moment = require('moment')

const getReview = async (productId) => {
  try {
    const response = await store.getReview(productId)
    return response.dataValues.ProductSolds.map(obj => {
      const fecha = obj.dataValues.Review.dataValues.createdAt
      const fechaMoment = moment(fecha).format('L')
      return {
        user: obj.Cart.dataValues.User.name,
        points: obj.dataValues.Review.dataValues.rating,
        description: obj.dataValues.Review.dataValues.description,
        fecha: fechaMoment
      }
    })
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addReview = (productSoldId, review) => store.addReview(productSoldId, review)

module.exports = {
  addReview,
  getReview
}