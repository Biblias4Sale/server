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

const getDetail = (id) => {
  return store.findById(id)
}

const addProduct = async (newProduct) => {
  return await store.addProduct(newProduct)
}
module.exports = {
  getAll,
  getBest,
  getDetail,
  addProduct
}
