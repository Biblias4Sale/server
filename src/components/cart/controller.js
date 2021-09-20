const validation = require('../../helpers/marketingValidators')
const mail = require('../marketing/handler/mailing')
const sms = require('../marketing/handler/sms')
const store = require('./store')

const getCart = async (id) => {
  const cart = await store.getCart(id)
  console.log(cart)

  // price debe buscarse en la tabla de producto para que muestre su valor actualización
  // idem con stock

  return cart.ProductSolds.map(product => (
    {
      id: product.product.id,
      brand: product.product.brand,
      model: product.product.model,
      img: product.product.img,
      qty: product.qty,
      price: product.product.price,
      stock: product.product.stock
    }
  ))
}

const confirmCart = async (cartId, userId) => {
  const [userInfo, cart] = await store.confirmCart(cartId, userId)
  if (await validation.mailConfirmCart()) mail.confirmCart(userInfo)
  if (await validation.smsConfirmCart()) sms.confirmCart(userInfo)
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
