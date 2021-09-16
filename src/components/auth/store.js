const { User, Cart } = require('../../db')

const getUser = async (email) => {
  try {
    return User.findOne({ where: { email }, attributes: ['id', 'name', 'lastName', 'email', 'picture', 'type'] })
  } catch (error) {
    return error
  }
}

const getCart = async (email) => {
  const user = await User.findOne({ where: { email } })
  const cart = await Cart.findOne({ where: { UserId: user.id, status: 'En proceso' } })
  return cart.id
}

module.exports = {
  getUser,
  getCart
}
