const { addProduct } = require('../components/product/store')
const { products } = require('./dataStore')

const productLoader = async () => {
  await products.forEach(product => {
    return (
      addProduct(product)
    )
  })
  console.log('Products loaded')
}

module.exports = { productLoader }
