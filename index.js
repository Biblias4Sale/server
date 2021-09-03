require('dotenv').config()
const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const { force } = require('./config.js')
const PORT = process.env.PORT || 3001
const { DATABASE_URL } = process.env

process.stdout.write('\u001b[2J\u001b[0;0H') // limpia pantalla de la consola

// STARTING

// COMENTAR CONN.SYNC PARA PRODUCCION

conn.sync({ force }).then(() => {
  console.log('base de datos conectada')
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(DATABASE_URL)
  })
})
