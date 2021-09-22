const { User, Cart } = require('../../db')

const getUser = async (email) => {
  try {
    return User.findOne({ where: { email }, attributes: ['id', 'name', 'lastName', 'email', 'picture', 'type'] })
  } catch (error) {
    return error
  }
}

const getCart = async (id) => {
  try {
    const cart = await Cart.findOne({
      where: { UserId: id, status: 'En proceso' }
    })

    return cart
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

module.exports = {
  getUser, getCart
}
