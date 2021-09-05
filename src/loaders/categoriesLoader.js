const { Categories } = require('../db.js')
const { categoriesList } = require('../../config')

const categoriesLoader = async () => {
  const categoriesInDB = await Categories.findAndCountAll()
  if (categoriesInDB.count === 0) {
    try {
      categoriesList.forEach(category => Categories.create({ name: category }))
      console.log('DB filled')
    } catch (error) {
      console.log('Error filling DB')
    }
  } else {
    console.log('Table allready has data... loader skipped')
  }
}

module.exports = { categoriesLoader }
