const store = require('./store')

const getAllCategories = async () => {
  const response = await store.getAllCategories()
  return (response.map(object => object.dataValues.name))
}

const addCategory = async (newCategory) => {
  return await store.addCategory(newCategory)
}

const addSubCategory = async (category, subCategory) => {
  return await store.addSubCategory(category, subCategory)
}
const getAllSubCategories = async () => {
  return await store.getAllSubCategories()
}

module.exports = {
  getAllCategories,
  addCategory,
  addSubCategory,
  getAllSubCategories
}
