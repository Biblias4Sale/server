const store = require('./store')

const getAll = () => {
  return store.getAll().map(product => {
    return (
      {
        id: product.id,
        name: product.name,
        points: product.points
      }
    )
  })
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
