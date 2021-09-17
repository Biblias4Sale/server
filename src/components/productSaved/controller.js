const store = require('./store')

const addSavedProduct = async (user, productID) => {
  return await store.addSavedProduct(user, productID)
}

const getSavedProducts = async (user, productID) => {
  const response = await store.getSavedProducts(user, productID)
  return response.map(obj => (
    {
      id: obj.prod.id,
      qty: obj.qty,
      brand: obj.prod.brand,
      model: obj.prod.model,
      img: obj.prod.img,
      price: obj.prod.price
    }))
}

const removeSavedProducts = async (user, productID) => {
  return await store.removeSavedProducts(user, productID)
}
module.exports = {
  addSavedProduct,
  getSavedProducts,
  removeSavedProducts
}
