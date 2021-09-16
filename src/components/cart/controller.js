const store = require('./store')

const getCart = async (id) => {
  const cart = await store.getCart(id)
  return { cart }
}

const addProduct = async ({ cartId, productId, infoProduct }) => {
  return await store.addProduct(cartId, productId, infoProduct)
}

module.exports = {
  getCart,
  addProduct
}
