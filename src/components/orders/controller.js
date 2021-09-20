const store = require('./store')

const getOrders = () => store.getOrders()

module.exports = {
  getOrders
}
