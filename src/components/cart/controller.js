const store = require('./store')

const getCart = async (id) => {
  const cart = await store.getCart(id)
  return { cart }
}

const addProduct = async ({ cartId, infoProduct }, productId) => {
  return await store.addProduct(cartId, infoProduct, productId)
}

module.exports = {
  getCart,
  addProduct
}
