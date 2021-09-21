const { User, Product } = require('../../db')

const addFav = async (user, prod) => {
  try {
    const producto = await Product.findByPk(prod, { include: { model: User } })
    const usuario = await User.findByPk(user, { include: { model: Product } })

    if (!producto) throw new Error('Producto no encontrado')
    if (!usuario) throw new Error('Usuario no encontrado')

    const has = await producto.hasUser(usuario)
    if (has) throw new Error('El producto ya está agregado a favoritos')

    await producto.addUser(usuario)

    return 'Producto agregado a favorito'
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const getFavs = async (user) => {
  const usuario = await User.findByPk(user, {
    include: {
      model: Product,
      attributes: ['model', 'img', 'id', 'price'],
      exclude: ['favs']
    }
  })
  if (!usuario) throw new Error('Usuario no encontrado')
  return usuario.dataValues.products
}

const removeFav = async (user, productID) => {
  const producto = await Product.findByPk(productID, { include: { model: User } })
  const usuario = await User.findByPk(user, { include: { model: Product } })
  if (!producto) throw new Error('Producto no encontrado')
  if (!usuario) throw new Error('Usuario no encontrado')

  try {
    const has = await producto.hasUser(usuario)
    if (!has) throw new Error('El producto no está agregado a favoritos')
    producto.removeUser(usuario)
    return 'Producto eliminado de favoritos'
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  addFav,
  getFavs,
  removeFav
}
