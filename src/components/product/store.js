const { Product, SubCategory, Category } = require('../../db')
const { reviews } = require('../../../config')

const addProduct = async (newProduct) => {
  const { brand, model, img, description, price, points } = newProduct
  const { subCategory } = newProduct
  const prod = await Product.findOne({
    where: {
      model
    }
  })

  if (prod !== null) return 'El producto ya existe'

  try {
    const newProd = await Product.create({
      brand,
      model,
      img,
      description,
      price,
      points
    })

    const subCat = await SubCategory.findOne({
      where: {
        name: subCategory
      }
    })

    if (subCat === null) return 'No se encontró la SubCategoría'

    await newProd.setSubCategory(subCat)
    return await newProd
  } catch (e) {
    console.log(e)
    return `${model} ya existe`
  }
}

const getAll = async () => {
  try {
    const prod = await Product.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'description'] },
      include: {
        model: SubCategory,
        attributes: { exclude: ['createdAt', 'updatedAt', 'subCategoryId'] },
        include: {
          model: Category,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }
      }
    })

    return prod
  } catch (e) {
    return e.name
  }

  // return Product
}

const getDetail = async (id) => {
  try {
    const prod = await Product.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    if (!prod) return 'No se encontró el producto'
    return prod
  } catch (e) {
    return e.name
  }

  // return Product.find(product => product.id === parseInt(id)) // Debe buscar en la DB por ID
}

const getReview = () => {
  return reviews
}

const editProduct = async (prod) => {
  const { id, brand, model, img, description, price, points, subCategory } = prod

  const producto = await Product.findByPk(id)

  if (producto === null) return 'No se encontró el producto'
  // if (infoUser.name) user.name = infoUser.name
  if (producto.brand) producto.brand = brand
  if (producto.model) producto.model = model
  if (producto.img) producto.img = img
  if (producto.description) producto.brand = description
  if (producto.price) producto.price = price
  if (producto.points) producto.points = points

  const subCat = await SubCategory.findOne({
    where: {
      name: subCategory
    }
  })

  if (!subCat) return 'No se encontró la subcategoría'

  producto.subCategoryId = subCat.id

  await producto.save()
  return producto
}

const deleteProduct = async (delProduct) => {
  try {
    const product = await Product.findByPk(delProduct)
    product.state = false
    await product.save()
    return 'Producto eliminado'
  } catch (err) {
    console.log(err)
    return 'Producto no se eliminó'
  }
}

module.exports = {
  getAll,
  getDetail,
  addProduct,
  getReview,
  editProduct,
  deleteProduct
}
