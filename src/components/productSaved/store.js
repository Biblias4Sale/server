const { User, Product, SavedProduct } = require('../../db')

const getSavedProducts = async (user) => {
  try {
    const usuario = await User.findByPk(user, { include: { model: SavedProduct, include: { model: Product } } })
    if (!usuario) throw new Error('Usuario no encontrado')

    const savedPoducts = await SavedProduct.findAll({
      where: { UserId: usuario.id },
      include: {
        model: Product,
        attributes: ['id', 'brand', 'model', 'img', 'description', 'price', 'stock', 'rating']
      }
    })
    return savedPoducts
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const addSavedProduct = async (user, productID, qty = 1) => {
  try {
    const producto = await Product.findByPk(productID, { include: { model: User } })
    const usuario = await User.findByPk(user, { include: { model: SavedProduct } })
    if (!producto) throw new Error('Producto no encontrado')
    if (!usuario) throw new Error('Usuario no encontrado')

    const productSaved = await SavedProduct.findOne({ where: { productId: productID, UserId: user } })
    if (productSaved) {
      const oldQty = productSaved.dataValues.qty
      try {
        SavedProduct.update(
          { qty: oldQty + qty },
          { where: { productId: productID, UserId: user } }
        )
        return 'El producto se agregó correctamente'
      } catch ({ message: error }) {
        console.log(error)
        throw new Error(error)
      }
    }

    try {
      const savedProduct = await producto.createSavedProduct({ qty })
      usuario.addSavedProduct(savedProduct)
      return 'Producto guardado'
    } catch (e) { throw new Error(e) }
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const decreaseSavedProducts = async (user, productID) => {
  try {
    const producto = await Product.findByPk(productID, { include: { model: User } })
    const usuario = await User.findByPk(user, { include: { model: SavedProduct } })
    if (!producto) throw new Error('Producto no encontrado')
    if (!usuario) throw new Error('Usuario no encontrado')

    const productSaved = await SavedProduct.findOne({ where: { productId: productID, UserId: user } })
    if (!productSaved) throw new Error('El usuario no tiene ese producto')
    if (productSaved.dataValues.qty > 1) {
      const oldQty = productSaved.dataValues.qty
      try {
        SavedProduct.update(
          { qty: oldQty - 1 },
          { where: { productId: productID } }
        )
        return 'El producto se quitó correctamente'
      } catch ({ message: error }) {
        console.log(error)
        throw new Error(error)
      }
    }
    if (productSaved.dataValues.qty === 1) throw new Error('Si deseás eliminar el producto de guardado, utiliza el endpoint correcto')
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const deleteSavedProducts = async (user, productID) => {
  try {
    const producto = await Product.findByPk(productID, { include: { model: User } })
    const usuario = await User.findByPk(user, { include: { model: SavedProduct } })
    if (!producto) throw new Error('Producto no encontrado')
    if (!usuario) throw new Error('Usuario no encontrado')
    const res = await SavedProduct.destroy({ where: { productId: productID, UserId: user } })
    if (res === 0) throw new Error('El usuario no tiene ese producto guardado')
    return 'El producto se quitó completamente'
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

module.exports = {
  addSavedProduct,
  getSavedProducts,
  decreaseSavedProducts,
  deleteSavedProducts
}
