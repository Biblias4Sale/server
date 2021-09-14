require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
const { connectionString } = require('../config.js')

const sequelize = new Sequelize(connectionString(), {
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

const { User, Category, Cart, Order, SubCategory, Discount, Product, Brand } = sequelize.models

Product.hasOne(Discount)
Discount.belongsTo(Product)
Brand.belongsTo(Product)
Product.hasOne(Brand)
SubCategory.hasMany(Product)
Product.belongsTo(SubCategory)
Category.hasMany(SubCategory)
SubCategory.belongsTo(Category)



Order.belongsTo(Cart)
Cart.hasOne(Order)
User.hasMany(Product)
Product.belongsTo(User)

Product.belongsToMany(Order, { through: 'products_orders' })
Order.belongsToMany(Product, { through: 'products_orders' })
Cart.belongsToMany(User, { through: 'cart_users' })
User.belongsToMany(Cart, { through: 'cart_users' })

module.exports = {
  ...sequelize.models,
  conn: sequelize
}
