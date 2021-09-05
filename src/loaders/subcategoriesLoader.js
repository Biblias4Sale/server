const { SubCategories } = require('../db.js')
const store = require('../components/category/store')

const subCategoriesLoader = async (cat, subCat) => {
  const subCategoriesInDB = await SubCategories.findAndCountAll({ where: { name: subCat } })
  if (subCategoriesInDB.count === 0) {
    try {
      subCat.map(st => {
        return (
          store.addSubCategory(cat, st)
        )
      })
      console.log('DB filled whith Sub Cats in ' + cat)
    } catch (error) {
      console.log('Error filling DB')
    }
  } else {
    console.log('Table allready has data... loader skipped')
  }
}

module.exports = { subCategoriesLoader }
