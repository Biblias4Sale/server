const validation = require('../../helpers/marketingValidators')
const mail = require('../marketing/handler/mailing')
const sms = require('../marketing/handler/sms')
const store = require('./store')

const getCart = async (id) => {
  try {
    const cart = await store.getCart(id)
    if (!cart.ProductSolds.length) return cart
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
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const getOrders = async (id) => {
  try {
    const cart = await store.getOrders(id)
    const res = cart.map(product => product)
    return res
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const confirmCart = async (cartId, userId) => {
  try {
    const [userInfo, cart] = await store.confirmCart(cartId, userId)
    if (await validation.mailConfirmCart()) mail.confirmCart(userInfo)
    if (await validation.smsConfirmCart()) sms.confirmCart(userInfo)
    return (cart)
  } catch ({ message: error }) {
    throw new Error(error)
  }
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
  getOrders,
  confirmCart,
  newProduct,
  addProduct,
  subProduct,
  delProduct
}
