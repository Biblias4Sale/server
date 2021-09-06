const { Categories, SubCategories } = require('../../db')

const getAllCategories = async () => {
  const cat = await Categories.findAll({
    include: {
      model: SubCategories
    }
  })
  // console.log(cat)
  return cat
}

const addCategory = async (newCategory) => {
  const category = await Categories.findOne({
    where: {
      name: newCategory
    }
  })
  if (category != null) return 'La categoría ya existe'
  try {
    const newCat = await Categories.create({ name: newCategory })
    return newCat
  } catch (e) {
    return e.name
  }
}

const addSubCategory = async (category, subCategory) => {
  const subCat = await SubCategories.findOne({
    where: {
      name: subCategory
    }
  })

  if (subCat !== null) return 'La SubCategoría ya existe'

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

const getAllSubCategories = async (cat) => {
  if (cat === 'All') {
    const subcats = await SubCategories.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Categories,
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
      // attributes: ['name', 'id_subCat']
    })
    return subcats
  } else {
    const subcats = await SubCategories.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Categories,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: {
          name: cat
        }
      }
    })
    return subcats
  }
}
module.exports = {
  getAllCategories,
  addCategory,
  addSubCategory,
  getAllSubCategories
}
