const mail = require('../../mailing')
const sms = require('../../sms')
const store = require('./store')

const getCart = async (id) => {
  const cart = await store.getCart(id)
  return cart.ProductSolds.map(product => (
    {
      id: product.product.id,
      brand: product.product.brand,
      model: product.product.model,
      img: product.product.img,
      price: product.price,
      qty: product.qty
    }
  ))
}

const confirmCart = async (cartId, userId) => {
  const [userInfo, cart] = await store.confirmCart(cartId, userId)
  // console.log(userInfo.dataValues.email)
  // const cart = await store.confirmCart(cartId, userId)
  mail.confirmCart(userInfo)
  sms.confirmCart(userInfo)
  return cart
}

const newProduct = async (cartId, productId, infoProduct) => {
  return await store.newProduct(cartId, productId, infoProduct)
}

const addProduct = async (cartId, productId, qty) => {
  return await store.addProduct(cartId, productId, qty)
}

const subProduct = async (cartId, productId) => {
  return await store.subProduct(cartId, productId)
}

const delProduct = async (cartId, productId) => {
  return await store.delProduct(cartId, productId)
}

module.exports = {
  getCart,
  confirmCart,
  newProduct,
  addProduct,
  subProduct,
  delProduct
}
