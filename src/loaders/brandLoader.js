const { newBrand } = require('../components/brand/store')
const { products } = require('./dataStore')
const { Brand } = require('../db')

const brandLoader = async () => {
  await products.forEach(p => {
    return newBrand(p.brand)
  })
  const brands = await Brand.findAll()
  if (brands) {
    console.log('brands loaded')
  }
}

module.exports = { brandLoader }