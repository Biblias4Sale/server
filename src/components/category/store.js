const { Categories, SubCategories } = require('../../db')

const getAllCategories = async () => {
  const cat = await Categories.findAll({ attributes: ['name', 'id_cat'] })
  return cat
}

const addCategory = async (newCategory) => {
  try {
    const newCat = await Categories.create({ name: newCategory })
    return newCat
  } catch (e) {
    return e.name
  }
}

const addSubCategory = async (category, subCategory) => {
  try {
    const subCat = await SubCategories.create({
      name: subCategory
    })
    const cat = await Categories.findOne({
      where: {
        name: category
      }
    })
    await cat.addSubCategories(subCat)
    return subCat
  } catch (e) {
    return e.name
  }
}

const getAllSubCategories = async () => {
  const subcats = await SubCategories.findAll({ attributes: ['name', 'id_cat'] })
  return subcats
}

module.exports = {
  getAllCategories,
  addCategory,
  addSubCategory,
  getAllSubCategories
}
