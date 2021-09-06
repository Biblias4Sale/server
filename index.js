require('dotenv').config()
const server = require('./src/app.js')
const { categoriesLoader } = require('./src/loaders/categoriesLoader')
const { subCategoriesLoader } = require('./src/loaders/subcategoriesLoader')
const { subCategoryCamaras, subCategoryLentes, subCategoryLuces, subCategoryAccesorios, subCategoryCargaYbat } = require('./config')
const { addProduct } = require('./src/components/product/store')
const { products } = require('./src/loaders/dataStore')

const { conn } = require('./src/db.js')
const { force } = require('./config.js')
const PORT = process.env.PORT || 3001

process.stdout.write('\u001b[2J\u001b[0;0H') // clear the screen on the console

// STARTING

const runServer = async () => {
  try {
    await conn.sync({ force })
    console.log('db connected')
  } catch (error) {
    console.log(error)
  }
  await categoriesLoader()
  await subCategoriesLoader('Camaras', subCategoryCamaras)
  await subCategoriesLoader('Lentes', subCategoryLentes)
  await subCategoriesLoader('Luces', subCategoryAccesorios)
  await subCategoriesLoader('Accesorios', subCategoryLuces)
  await subCategoriesLoader('Cargadores y baterías', subCategoryCargaYbat)
  // products.map(prod => {
  //   return (
  //     addProduct(prod)
  //   )
  // })

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
runServer()
