const { Cart, User } = require('../../db')

const getCart = async (id) => {
  try {
    const cart = await Cart.findOne({ where: { UserId: id, status: 'En proceso' } })
    if (!cart) {
      const user = User.findByPk(id)
      const cart = await user.createCart({ status: 'En proceso' })
      return cart.id
    }
    return cart.id
  } catch (error) {
    return error
  }
}

module.exports = {
  getCart
}
