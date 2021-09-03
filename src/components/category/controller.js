const store = require('./store')

const getAllCategories = async () => {
  return await store.getAllCategories()
}

const addCategory = (newCategory) => {
  return store.addCategory(newCategory)
}

const addSubCategory = async (category, subCategory) => {
  return await store.addSubCategory(category, subCategory)
}
module.exports = {
  getAllCategories,
  addCategory,
  addSubCategory
}
