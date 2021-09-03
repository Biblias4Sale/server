require('dotenv').config()
const server = require('./src/app.js')

const { conn } = require('./src/db.js')
const { force } = require('./config.js')

const PORT = process.env.PORT || 3001

process.stdout.write('\u001b[2J\u001b[0;0H') // limpia pantalla de la consola

server.set('port', process.env.PORT || 3001)
// STARTING

// COMENTAR CONN.SYNC PARA PRODUCCION

conn.sync({ force }).then(() => {
  console.log('base de datos conectada')
  server.listen(server.get('port'), () => {
    console.log('server on PORT', server.get('port'))
  })
})
