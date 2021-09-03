const { Categories, SubCategories } = require('../../db')

const getAllCategories = async () => {
  const cat = await Categories.findAll({ attributes: ['name', 'id_cat'] })
  return cat
}

const addCategory = async (newCategory) => {
  console.log(newCategory)
  const newCat = await Categories.create({ name: newCategory })
  return newCat
}

const addSubCategory = async (category, subCategory) => {
  const subCat = await SubCategories.create({
    name: subCategory
  })
  const cat = await Categories.findOne({
    where: {
      name: category
    }
  })
  // const selectAll = await Categories.findAll({
  //   include: {
  //     model: SubCategories
  //   }
  // })
  // console.log(selectAll)
// console.log(cat)
// console.log(subCat)
  await cat.addSubCategories(subCat)
  return subCat
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
