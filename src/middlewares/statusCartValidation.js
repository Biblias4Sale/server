const { Cart } = require('../db')

const statusCartValidation = async (req, res, next) => {
  const cartId = req.params.cartId
  const cart = await Cart.findByPk(cartId)
  if (cart.status !== 'En proceso') {
    return res.status(401).json({ msg: 'Cart not validate' })
  }
  next()
}

module.exports = statusCartValidation
