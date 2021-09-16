const { User, Product, SavedProduct } = require('../../db')

const addSavedProduct = async (user, productID) => {
  const producto = await Product.findByPk(prod, { include: { model: User } })
  const usuario = await User.findByPk(user, { include: { model: Product } })
  if (!producto) return 'Producto no encontrado'


  return 'Producto guardado'
}

module.exports = {
  addSavedProduct
}
