const store = require('./store')

const getCart = async (id) => {
  const cart = await store.getCart(id)
  return { cart }
}

module.exports = {
  getCart
}
