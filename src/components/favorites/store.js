const { User, Product } = require('../../db')

const addFav = async (user, prod) => {
  const producto = await Product.findByPk(prod, { include: { model: User } })
  const usuario = await User.findByPk(user, { include: { model: Product } })
  if (!usuario) return 'Usuario no encontrado'
  if (!producto) return 'Producto no encontrado'

  try {
    await producto.addUser(usuario)
    return 'Producto agregado a favorito'
  } catch (e) {
    return 'No se pudo agregar a favorito'
  }
}

const getFavs = async (user) => {
  const usuario = await User.findByPk(user, {
    include: {
      model: Product,
      attributes: ['model', 'brand', 'img', 'id', 'price'],
      exclude: ['favs']
    }
  })
  if (!usuario) return 'Usuario no encontrado'
  // console.log(usuario.dataValues.products)
  return usuario.dataValues.products
}

const removeFav = async (user, productID) => {
  const producto = await Product.findByPk(productID, { include: { model: User } })
  const usuario = await User.findByPk(user, { include: { model: Product } })
  try {
    producto.removeUser(usuario)
    return 'Producto eliminado de favoritos'
  } catch (e) { return 'No se pudo eliminar de favoritos' }
}

module.exports = {
  addFav,
  getFavs,
  removeFav
}
