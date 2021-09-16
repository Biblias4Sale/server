const { User, Product } = require('../../db')

const addFav = async (user, prod) => {
  const producto = await Product.findByPk(prod, { include: { model: User } })
  const usuario = await User.findByPk(user, { include: { model: Product } })
  if (!usuario) return 'Usuario no encontrado '
  if (!producto) return 'Producto no encontrado'

  try {
    await producto.addUser(usuario)
  } catch (e) {
    return 'No se pudo agregar a favorito'
  }
  return 'Producto agregado a favorito'
}

module.exports = {
  addFav
}
