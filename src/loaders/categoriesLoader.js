const { Category } = require('../db.js')
const { categoriesList } = require('../../config')

const categoriesLoader = async () => {
  const categoriesInDB = await Category.findAndCountAll()
  if (categoriesInDB.count === 0) {
    try {
      categoriesList.forEach(categ => Category.create({ name: categ }))
      console.log('DB filled with Categories')
    } catch (error) {
      console.log('Error filling DB with Categories')
    }
  } else {
    console.log('Category table allready has data... loader skipped')
  }
}

module.exports = { categoriesLoader }
