require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
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

const basename = path.basename(__filename)

const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

modelDefiners.forEach(model => model(sequelize))
const entries = Object.entries(sequelize.models)
const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

const { Users, Categories, Cart, Orders, SubCategories, Discounts, Products } = sequelize.models

Products.belongsToMany(Orders, { through: 'products_orders' })
Products.belongsTo(Discounts)
SubCategories.hasMany(Products, { foreignKey: 'id_subCat' })
Categories.hasMany(SubCategories, { foreignKey: 'id_cat' })
Cart.hasMany(Orders, { as: 'cart_orders' })
Cart.belongsToMany(Users, { through: 'cart_users' })
Users.hasMany(Products, { as: 'products_user' })

module.exports = {
  ...sequelize.models,
  conn: sequelize
}
