require('dotenv').config()
const server = require('./src/app.js')
const { settingsMarketingLoader } = require('./src/loaders/settingsMarketingLoader')
const { categoriesLoader } = require('./src/loaders/categoriesLoader')
const { subCategoriesLoader } = require('./src/loaders/subcategoriesLoader')
const { productLoader } = require('./src/loaders/productLoader')
const { brandLoader } = require('./src/loaders/brandLoader')
const { subCategoryCamaras, subCategoryLentes, subCategoryLuces, subCategoryAccesorios, subCategoryCargaYbat } = require('./config')

const { conn } = require('./src/db.js')
const { force } = require('./config.js')
const PORT = process.env.PORT || 3002

process.stdout.write('\u001b[2J\u001b[0;0H') // clear the screen on the console

// STARTING

const runServer = async () => {
  try {
    await conn.sync({ force })
    console.log('DB connected')
  } catch (error) {
    console.log(error)
  }
  await settingsMarketingLoader()
  await categoriesLoader()
  await brandLoader()
  await subCategoriesLoader('Camaras', subCategoryCamaras)
  await subCategoriesLoader('Lentes', subCategoryLentes)
  await subCategoriesLoader('Luces', subCategoryAccesorios)
  await subCategoriesLoader('Accesorios', subCategoryLuces)
  await subCategoriesLoader('Cargadores y baterías', subCategoryCargaYbat)
  await productLoader()

  const serverio = require('http').createServer(server)
  const io = require('socket.io')(serverio)
  io.on('connection', () => { })
  serverio.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
  // server.listen(PORT, () => {
  //   console.log(`Server running on port ${PORT}`)
  // })
}
runServer()
