const { User, Product, SavedProduct } = require('../../db')

const addSavedProduct = async (user, productID) => {
  try {
    const producto = await Product.findByPk(productID, { include: { model: User } })
    const usuario = await User.findByPk(user, { include: { model: SavedProduct } })
    if (!producto) return 'Producto no encontrado'
    if (!usuario) return 'Usuario no encontrado'

    const productSaved = await SavedProduct.findOne({ where: { productId: productID, UserId: user } })
    if (productSaved) {
      const oldQty = productSaved.dataValues.qty
      try {
        SavedProduct.update(
          { qty: oldQty + 1 },
          { where: { productId: productID } }
        )
        return 'El producto se agregó correctamente'
      } catch (e) { return e }
    }

    try {
      const savedProduct = await producto.createSavedProduct({ qty: 1 })
      usuario.addSavedProduct(savedProduct)
      return 'Producto guardado'
    } catch (e) { return e }
  } catch (e) {
    return 'Los datos ingresados no son válidos'
  }
}

const getSavedProducts = async (user) => {
  try {
    const usuario = await User.findByPk(user, { include: { model: SavedProduct, include: { model: Product } } })
    const productSaved = await SavedProduct.findAll({ where: { UserId: usuario.id } })

    if (productSaved.length > 0) {
      const products = usuario.dataValues.SavedProducts
      const res = products.map(el => {
        return { qty: el.dataValues.qty, prod: el.dataValues.product.dataValues }
      })
      return res
    } else {
      return []
    }
  } catch (e) {
    return e
  }
}

const decreaseSavedProducts = async (user, productID) => {
  const producto = await Product.findByPk(productID, { include: { model: User } })
  const usuario = await User.findByPk(user, { include: { model: SavedProduct } })
  if (!producto) return 'Producto no encontrado'
  if (!usuario) return 'Usuario no encontrado'

  const productSaved = await SavedProduct.findOne({ where: { productId: productID, UserId: user } })
  if (!productSaved) return 'El usuario no tiene ese producto'
  if (productSaved.dataValues.qty > 1) {
    const oldQty = productSaved.dataValues.qty
    try {
      SavedProduct.update(
        { qty: oldQty - 1 },
        { where: { productId: productID } }
      )
      return 'El producto se quitó correctamente'
    } catch (e) { return e }
  }
  try {
    SavedProduct.destroy({ where: { productId: productID, UserId: user } })
    return 'El producto se quitó completamente'
  } catch (e) { return e }
}

const deleteSavedProducts = async (user, productID) => {
  try {
    await SavedProduct.destroy({ where: { productId: productID, UserId: user } })
    return 'El producto se quitó completamente'
  } catch (e) {
    console.log(e)
    return e
  }
}

module.exports = {
  addSavedProduct,
  getSavedProducts,
  decreaseSavedProducts,
  deleteSavedProducts
}
