const store = require('./store')

const getAll = async () => {
  return await store.getAll()
}

const getBest = (qty) => {
  return getAll()
    .slice()
    .sort((b, a) => a.points - b.points)
    .slice(0, qty)
}

const getDetail = (id) => store.getDetail(id)

const addProduct = async (newProduct) => {
  return await store.addProduct(newProduct)
}

const getReview = async () => {
  return await store.getReview()
}

const editProduct = async (prod) => {
  return await store.editProduct(prod)
}

const deleteProducts = async (idProducts) => {
  return await store.deleteProducts(idProducts)
}

const activateProducts = async (idProducts) => {
  return await store.activateProducts(idProducts)
}

const changePrice = async ({ idProducts, value }) => {
  return await store.changePrice(idProducts, value)
}

module.exports = {
  getAll,
  getBest,
  getDetail,
  addProduct,
  getReview,
  editProduct,
  deleteProducts,
  activateProducts,
  changePrice
}
