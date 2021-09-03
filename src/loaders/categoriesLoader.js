const { Categories } = require('../db.js')

const categoriesLoader = async () => {
  const categoriesInDB = await Categories.findAndCountAll()
  if (categoriesInDB.count === 0) {
    try {
      const categoriesList = ['Reflex', 'Lentes', 'Accesorios']
      categoriesList.forEach(category => Categories.create({ name: category }))
    } catch (error) {
      console.log('Error filling DB')
    }
  } else {
    console.log('Table allready has data... loader skipped')
  }
}

module.exports = { categoriesLoader }
