const { newBrand } = require('../components/brand/store')
const { products } = require('./dataStore')
const { Brand } = require('../db')

const brandLoader = async () => {
  try {
    await products.map(p => {
      return newBrand(p.brand)
    })
    const brands = await Brand.findAll()
    if (brands) {
      console.log('brands loaded')
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = { brandLoader }
