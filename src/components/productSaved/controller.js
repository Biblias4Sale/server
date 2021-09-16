const store = require('./store')

const addSavedProduct = async (user, productID) => {
  return await store.addSavedProduct(user, productID)
}

const getSavedProducts = async (user, productID) => {
  return await store.getSavedProducts(user, productID)
}

const removeSavedProducts = async (user, productID) => {
  return await store.removeSavedProducts(user, productID)
}
module.exports = {
  addSavedProduct,
  getSavedProducts,
  removeSavedProducts
}
