require('dotenv').config()
const server = require('./src/app.js')
const { categoriesLoader } = require('./src/loaders/categoriesLoader')

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

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

runServer()
