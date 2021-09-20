const { Cart, ProductSold, Product } = require('../../db')

const getOrders = async () => {
  return await Cart.findAll({
    include: {
      model: ProductSold,
      attributes: ['id', 'qty', 'price'],
      include: {
        model: Product,
        attributes: ['id', 'brand', 'model', 'img']
      }
    }
  })
}

module.exports = {
  getOrders
}
