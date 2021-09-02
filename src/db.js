require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_PG_USER, DB_PG_PASSWORD, DB_PG_HOST, DB_PG_PORT, DB_PG_DATABASE, DATABASE_URL } = process.env

const isProduction = process.env.NODE_ENV === 'production'
const connectionString = isProduction ? DATABASE_URL : `postgres://${DB_PG_USER}:${DB_PG_PASSWORD}@${DB_PG_HOST}:${DB_PG_PORT}/${DB_PG_DATABASE}`

const sequelize = new Sequelize(connectionString, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = {
  conn: sequelize
}
