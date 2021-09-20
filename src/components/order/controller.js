const store = require('./store')

const getOrders = async () => {
  try {
    return await store.getOrders()
  } catch (error) {
    return error
  }
}

module.exports = {
  getOrders
}
