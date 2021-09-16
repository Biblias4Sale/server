const store = require('./store')

const addProductSold = async (productSold) => {
  return await store.addProductSold(productSold)
}

module.exports = {
  addProductSold
}
