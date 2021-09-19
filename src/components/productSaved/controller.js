const store = require('./store')

const getSavedProducts = async (user, productID) => {
  try {
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
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addSavedProduct = (user, productID, qty) => store.addSavedProduct(user, productID, qty)

const decreaseSavedProducts = (user, productID) => store.decreaseSavedProducts(user, productID)

const deleteSavedProducts = async (user, productID) => store.deleteSavedProducts(user, productID)

module.exports = {
  addSavedProduct,
  getSavedProducts,
  decreaseSavedProducts,
  deleteSavedProducts
}
