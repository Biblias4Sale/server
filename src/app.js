require('./passport/passportGoogle')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('./db.js')
require('colors')
const { frontEndHost } = require('../config.js')
const routes = require('./routes')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')
const server = express()

server.name = 'NoiLan'

// server.use(cors())
// server.use(cors({ credentials: true }))
server.use(cors({ origin: frontEndHost(), credentials: true }))
server.use(express.json())
server.use(morgan('dev'))
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', frontEndHost()) // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

server.use(cookieParser())
server.use(session({ secret: 'anythinglol' }))
server.use(passport.initialize())
server.use(passport.session())

server.use('/', routes)

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

module.exports = server
