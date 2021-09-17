const store = require('./store')

const addSavedProduct = async (user, productID) => {
  return await store.addSavedProduct(user, productID)
}

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
  } catch (error) {
    console.log(error)
    return error
  }
}

const decreaseSavedProducts = async (user, productID) => {
  return await store.decreaseSavedProducts(user, productID)
}

const deleteSavedProducts = async (user, productID) => {
  return await store.deleteSavedProducts(user, productID)
}

module.exports = {
  addSavedProduct,
  getSavedProducts,
  decreaseSavedProducts,
  deleteSavedProducts
}
