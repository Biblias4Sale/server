const store = require('./store')

const getCart = async (id) => {
  const cart = await store.getCart(id)
  return { cart }
}

const newProduct = async (cartId, productId, infoProduct) => {
  return await store.newProduct(cartId, productId, infoProduct)
}

const addProduct = async (cartId, productId) => {
  return await store.addProduct(cartId, productId)
}

const subProduct = async (cartId, productId) => {
  return await store.subProduct(cartId, productId)
}

const delProduct = async (cartId, productId) => {
  return await store.delProduct(cartId, productId)
}

module.exports = {
  getCart,
  newProduct,
  addProduct,
  subProduct,
  delProduct
}
