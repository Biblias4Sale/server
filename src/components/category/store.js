const { Category, SubCategory } = require('../../db')

const getAllCategories = async () => {
  const cat = await Category.findAll({
    include: {
      model: SubCategory
    }
  })
  return cat
}

const addCategory = async (newCategory) => {
  const cat = await Category.findOne({
    where: {
      name: newCategory
    }
  })
  if (cat != null) return 'La categoría ya existe'
  try {
    const newCat = await Category.create({ name: newCategory })
    return newCat
  } catch (e) {
    return e.name
  }
}

const addSubCategory = async (categ, subCateg) => {
  let subCat = await SubCategory.findOne({
    where: {
      name: subCateg
    }
  })

  if (subCat === null) {
    subCat = await SubCategory.create({
      name: subCateg
    })
  }

  const cat = await Category.findOne({
    where: {
      name: categ
    }
  })

  if (cat !== null) {
    if (cat.dataValues.id !== subCat.dataValues.categoryId) {
      await subCat.setCategory(cat)
      return subCat
    } else {
      return 'La categoría ya tiene esa sub Categoría'
    }
  } else {
    return 'No se encontró la categoría'
  }
}

const getAllSubCategories = async (cat) => {
  if (cat === 'All') {
    const subcats = await SubCategory.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Category,
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }

    })
    return subcats
  } else {
    const subcats = await SubCategory.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Category,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: {
          name: cat
        }
      }
    })
    console.log('subcats')
    console.log(subcats)
    return subcats
  }
}
module.exports = {
  getAllCategories,
  addCategory,
  addSubCategory,
  getAllSubCategories
}
