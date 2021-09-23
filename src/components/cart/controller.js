const validation = require('../../helpers/marketingValidators')
const mail = require('../marketing/handler/mailing')
const sms = require('../marketing/handler/sms')
const store = require('./store')
const moment = require('moment')

const getCart = async (id) => {
  try {
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
          price: product.price,
          idProductSold: product.id
        }
      })
      return {
        cartId: cart.id,
        status: cart.status,
        totalAmount: cart.totalAmount,
        productSolds,
        paymentPendingDate: moment(cart.paymentPending).format('YYYY-MM-DD HH:mm'),
        confirmationPending: moment(cart.confirmationPending).format('YYYY-MM-DD HH:mm'),
        preparationDate: moment(cart.preparationDate).format('YYYY-MM-DD HH:mm'),
        dispatchDate: moment(cart.dispatchDate).format('YYYY-MM-DD HH:mm'),
        deliveryDate: moment(cart.deliveryDate).format('YYYY-MM-DD HH:mm'),
        cancelDate: moment(cart.cancelDate).format('YYYY-MM-DD HH:mm')
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

const updateState = async (cartID, status) => {
  try {
    const cart = await store.updateState(cartID, status)

    return {
      id: cart.id,
      status,
      totalAmount: null,
      paymentsMethod: null,
      paymentPending: cart.paymentPending ? moment(cart.paymentPending).format('YYYY-MM-DD HH:mm') : null,
      confirmationPending: cart.confirmationPending ? moment(cart.confirmationPending).format('YYYY-MM-DD HH:mm') : null,
      preparationDate: cart.preparationDate ? moment(cart.preparationDate).format('YYYY-MM-DD HH:mm') : null,
      dispatchDate: cart.dispatchDate ? moment(cart.dispatchDate).format('YYYY-MM-DD HH:mm') : null,
      deliveryDate: cart.deliveryDate ? moment(cart.deliveryDate).format('YYYY-MM-DD HH:mm') : null,
      cancelDate: cart.cancelDate ? moment(cart.cancelDate).format('YYYY-MM-DD HH:mm') : null,
      createdAt: cart.createdAt ? moment(cart.createdAt).format('YYYY-MM-DD HH:mm') : null,
      updatedAt: cart.updatedAt ? moment(cart.updatedAt).format('LLL') : null,
      UserId: 'a67b8560-1c7f-11ec-93cb-3f4a8eee7808'
    }
  } catch ({ message: error }) {
    throw new Error(error)
  }
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
