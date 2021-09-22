const store = require('./store')

const getSavedProducts = async (user, productID) => {
  try {
    const response = await store.getSavedProducts(user, productID)
    return response.map(obj => (
      {
        qty: obj.qty,
        id: obj.product.id,
        brand: obj.product.brand.name,
        model: obj.product.model,
        img: obj.product.img,
        price: obj.product.price,
        stock: obj.product.stock,
        rating: obj.product.rating

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
