const store = require('./store')

const getAllCategories = async () => {
  const response = await store.getAllCategories()
  return (response.map(object => object.dataValues.name))
}

const addCategory = async (newCategory) => await store.addCategory(newCategory)

const addSubCategory = async (category, subCategory) => await store.addSubCategory(category, subCategory)

const getAllSubCategories = async () => await store.getAllSubCategories()

module.exports = {
  getAllCategories,
  addCategory,
  addSubCategory,
  getAllSubCategories
}
