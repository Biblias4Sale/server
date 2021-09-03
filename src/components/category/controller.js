const store = require('./store')

const getAllCategories = () => {
  return store.getAllCategories()
}

const addCategory = (newCategory) => {
  return store.addCategory(newCategory)
}

module.exports = {
  getAllCategories,
  addCategory
}
