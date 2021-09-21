const Store = require('./store')

const getPaymentLink = async (request) => {
  return await Store.getPaymentLink(request)
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
