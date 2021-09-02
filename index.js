require('dotenv').config()
const { conn } = require('./src/db')
const server = require('./src/app.js')

const { force } = require('./config.js')

const PORT = process.env.PORT || 3001

process.stdout.write('\u001b[2J\u001b[0;0H') // limpia pantalla de la consola

conn.sync({ force })
  .then(() => {
    console.log('base de datos conectada')
    server.listen(PORT, () => {
      console.log('Server running at', PORT || '3001')
    })
  })
  .catch(err => console.log('ERROR: ', err))
