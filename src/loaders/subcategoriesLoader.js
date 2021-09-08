const { SubCategory } = require('../db.js')
const store = require('../components/category/store')

const subCategoriesLoader = async (cat, subCat) => {
  const subCategoriesInDB = await SubCategory.findAndCountAll({ where: { name: subCat } })
  if (subCategoriesInDB.count === 0) {
    try {
      subCat.map(st => {
        return (
          store.addSubCategory(cat, st)
        )
      })
      console.log('DB filled whith Sub Cats in ' + cat)
    } catch (error) {
      console.log('Error filling DB whith Sub Cats')
    }
  } else {
    console.log('Table SubCategory allready has data... loader skipped')
  }
}

module.exports = { subCategoriesLoader }
