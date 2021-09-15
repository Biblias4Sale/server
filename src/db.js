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

const { User, Category, Cart, Order, SubCategory, Discount, Product, Review } = sequelize.models

Product.hasOne(Discount)
Discount.belongsTo(Product)

SubCategory.hasMany(Product)
Product.belongsTo(SubCategory)
Category.hasMany(SubCategory)
SubCategory.belongsTo(Category)

User.hasMany(Product) // quien lo publica
Product.belongsTo(User) // quien lo publica

User.belongsToMany(Product, { through: 'favs' })
Product.belongsToMany(User, { through: 'favs' })

Product.belongsToMany(Cart, { through: 'product_cart' })
Cart.belongsToMany(Product, { through: 'product_cart' })

User.belongsToMany(Product, { through: 'saved' })
Product.belongsToMany(User, { through: 'saved' })

Cart.hasOne(Order)
Order.belongsTo(Cart)

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(Review)
Review.belongsTo(Order)

Product.hasMany(Review)
Review.belongsTo(Product)

module.exports = {
  ...sequelize.models,
  conn: sequelize
}
