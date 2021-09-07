const { addProduct } = require('../components/product/store')
const { products } = require('./dataStore')

const productLoader = async () => {
  products.map(prod => {
    return (
      addProduct(prod)
    )
  })
}

module.exports = { productLoader }
