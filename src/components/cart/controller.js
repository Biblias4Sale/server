const validation = require('../../helpers/marketingValidators')
const mail = require('../marketing/handler/mailing')
const sms = require('../marketing/handler/sms')
const store = require('./store')
const { getAllPayments } = require('../mercadoPago/store')

const getCart = async (id) => {
  try {
    await getAllPayments()
    const cart = await store.getCart(id)
    const productSolds = cart.ProductSolds.map(product => (
      {
        id: product.product.id,
        brand: product.product.brand.name,
        model: product.product.model,
        img: product.product.img,
        qty: product.qty,
        price: product.product.price,
        stock: product.product.stock
      }
    ))
    return { id: cart.id, status: cart.status, products: productSolds }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const getOrders = async (id) => {
  try {

    const cart = await store.getOrders(id)
    const res = cart.map(cart => {
      const productSolds = cart.ProductSolds.map(product => {
        return {
          idProduct: product.product.id,
          qty: product.qty,
          brand: product.product.brand.name,
          model: product.product.model,
          img: product.product.img,
          price: product.price
        }
      })
      return {
        cartId: cart.id,
        status: cart.status,
        totalAmount: cart.totalAmount,
        productSolds,
        paymentPendingDate: cart.paymentPending,
        confirmationDate: cart.confirmationPending,
        preparationDate: cart.preparationDate,
        dispatchDate: cart.dispatchDate,
        deliveryDate: cart.deliveryDate,
        cancelDate: cart.cancelDate
      }
    })
    return res
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const confirmCart = async (cartId, userId, price) => {
  try {
    const [userInfo, cart] = await store.confirmCart(cartId, userId, price)
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

const updateState = async (cartID) => {
  return await store.updateState(cartID)
}

module.exports = {
  getCart,
  getOrders,
  confirmCart,
  newProduct,
  addProduct,
  subProduct,
  delProduct,
  updateState
}
