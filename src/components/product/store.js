const { Product, SubCategory, Category, ProductSold, Cart, User, Review } = require('../../db')
const { reviews } = require('../../../config')

const addProduct = async (newProduct) => {
  const { brand, model, img, description, price, points, stock } = newProduct
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
      stock,
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

const getDetail = async (productId) => {
  // try {
  //   const prod = await Product.findByPk(id, {
  //     attributes: { exclude: ['createdAt', 'updatedAt'] }
  //   })
  //   if (!prod) return 'No se encontró el producto'
  //   return prod
  // } catch (e) {
  //   return e.name
  // }

  // return Product.find(product => product.id === parseInt(id)) // Debe buscar en la DB por ID
  try {
    const producto = await Product.findByPk(productId, { include: { model: ProductSold, include: [{ model: Cart, include: { model: User } }, { model: Review }] } })
    if (!producto) throw new Error('Producto no encontrado')
    return producto
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const getReview = () => {
  return reviews
}

const editProduct = async (prod) => {
  const { id, model, img, description, price, points, brand, category, subCategory, discount } = prod

  await Product.update(
    {
      model: model,
      img: img,
      description: description,
      points: points,
      price: price
    }, { where: { id: id } })

  await Product.findOne({ where: { id: id } }).then((product) => {
    SubCategory.findOne({ where: { name: subCategory } }).then((subCat) => {
      product.setSubCategory(subCat.dataValues.id)
      Category.findOne({ where: { name: category } }).then((Cat) => {
        subCat.setCategory(Cat.dataValues.id)
      })
    })
  })

  const response = await getDetail(id)

  return response
}

const deleteProducts = async (idProducts) => {
  try {
    idProducts.map(async (id) => {
      const product = await Product.findByPk(id)
      product.state = false
      await product.save()
    })
    return 'Producto eliminado'
  } catch (err) {
    console.log(err)
    return 'Producto no se eliminó'
  }
}

const activateProducts = async (idProducts) => {
  try {
    idProducts.map(async (id) => {
      const product = await Product.findByPk(id)
      product.state = true
      await product.save()
    })
    return 'Producto activado'
  } catch (err) {
    console.log(err)
    return 'Producto no se activo'
  }
}

const changePrice = async (idProducts, value) => {
  if (idProducts.length === 1) {
    try {
      idProducts.map(async (id) => {
        const product = await Product.findByPk(id)
        product.price = product.price - value
        await product.save()
      })
      return 'Nuevo precio definido'
    } catch (err) {
      console.log(err)
      return 'Precio no pudo ser establecido'
    }
  }

  try {
    idProducts.map(async (id) => {
      const product = await Product.findByPk(id)
      product.price = product.price - (product.price * value)
      await product.save()
    })
    return 'Nuevo precio definido'
  } catch (err) {
    console.log(err)
    return 'Precio no pudo ser establecido'
  }
}

const csvToProducts = (products) => {
  try {
    products.map(async (product) => {
      const { brand, model, img, description, price, points, stock, state } = product
      const { subCategory } = product
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
          points,
          stock,
          state
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
    })
    return 'Productos creados exitosamente'
  } catch (err) {
    return err
  }
}

const addStock = async (qty, productId) => {
  try {
    const product = await Product.findByPk(productId)
    product.stock = product.stock + qty
    await product.save()
    return 'Nuevo stock definido'
  } catch (err) {
    console.log(err)
    return 'Stock no pudo ser establecido'
  }
}

module.exports = {
  getAll,
  getDetail,
  addProduct,
  getReview,
  editProduct,
  deleteProducts,
  activateProducts,
  changePrice,
  csvToProducts,
  addStock
}
