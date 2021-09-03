const { Categories, SubCategories } = require('../../db')
// const Categories = ['Camaras Digitales', 'Lentes', 'Iluminación', 'Accesorios']

const getAllCategories = async () => {
  const cat = await Categories.findAll({ attributes: ['name'] })
  return cat
}

const addCategory = async (newCategory) => {
  // Categories.push(newCategory)
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
  const selectAll = await Categories.findAll({
    include: {
      model: SubCategories
    }
  })
  console.log(selectAll)
  // console.log(cat, 'cat')
  // console.log(subCat, 'subCat')
  await cat.addSubCategories(subCat)
  return subCat
}

module.exports = {
  getAllCategories,
  addCategory,
  addSubCategory
}
