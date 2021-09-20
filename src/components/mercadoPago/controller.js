const Store = require('./store')

const getPaymentLink = async () => {
  return await Store.getPaymentLink()
}

const getAllPayments = async () => {
  return await Store.getAllPayments()
}

const getPaymentById = async (id) => {
  return Store.getPaymentById(id)
}

module.exports = {
  getPaymentLink,
  getAllPayments,
  getPaymentById
}
