const store = require('./store')

const addSavedProduct = async (user, productID) => {
  return await store.addSavedProduct(user, productID)
}

module.exports = {
  addSavedProduct
}
