const store = require('./store')

const getCart = async (id) => {
  const cart = await store.getCart(id)
  // return cart
  return cart.ProductSolds.map(product => (
    {
      id: product.product.id,
      brand: product.product.brand,
      model: product.product.model,
      img: product.product.img,
      price: product.price,
      qty: product.product.qty
    }
  ))
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
