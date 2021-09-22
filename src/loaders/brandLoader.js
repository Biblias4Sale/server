const { newBrand } = require('../components/brand/store')
const { products } = require('./dataStore')
const { Brand } = require('../db')

const brandLoader = async () => {
  await products.map(p => {
    return newBrand(p.brand)
  })
  const brands = Brand.findAll()
  if (brands) {
    console.log('brands loaded')
  }
}

module.exports = { brandLoader }
