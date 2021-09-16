const { Product, ProductSold } = require('../../db')

const addProductSold = async (productSold) => {
  const { productId, amount, price, soldDate, discount } = productSold
  const product = await Product.findByPk(productId)
  console.log(product.dataValues)
  const productoVendido = await ProductSold.create({ amount, price, soldDate })
  console.log(productoVendido.dataValues)

  product.addProductSold(productoVendido)

  return productSold
}

module.exports = {
  addProductSold
}
