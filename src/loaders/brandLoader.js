const { newBrand } = require('../components/brand/store')
const { products } = require('./dataStore')

const brandLoader = async () => {
  try {
    products.forEach(p => {
      newBrand(p.brand)
        .then(message => message)
        .catch(error => error.message)
    })
  } catch (e) {
    return e.message
  }
}

module.exports = { brandLoader }
