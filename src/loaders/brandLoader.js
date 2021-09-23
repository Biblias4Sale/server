// const { newBrand } = require('../components/brand/store')
const { products } = require('./dataStore')
const { Brand } = require('../db')
const brandLoader = async () => {
  try {
    const mySet = new Set()
    products.forEach(p => {
      mySet.add(p.brand)
    })
    for (const item of mySet) Brand.findOrCreate({ where: { name: item } })
  } catch (e) {
    console.log(e.message)
  }
}

module.exports = { brandLoader }
