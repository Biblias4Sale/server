const Cart = require('../../db')

const getOrders = async () => {
  try {
    return await Cart.findAll()
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getOrders
}
