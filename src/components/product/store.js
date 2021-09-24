const { Product, SubCategory, Category, ProductSold, Cart, User, Review, Brand } = require('../../db')
const { reviews } = require('../../../config')
// brand ver con mariano
const addProduct = async (newProduct) => {
  const { brand, model, img, description, price, points, stock, subCategory } = newProduct
  const prod = await Product.findOne({
    where: {
      model
    }
  })

  if (prod !== null) return 'El producto ya existe'
  try {
    const subCat = await SubCategory.findOne({
      where: {
        name: subCategory
      }
    })

    const pBrand = await Brand.findOne({
      where: {
        name: brand
      }
    })
    if (subCat === null || pBrand === null) {
      return 'Categoria o marca invalidas'
    } else {
      const newProd = await Product.create({
        model,
        img,
        description,
        price,
        points,
        stock
      })
      await newProd.setBrand(pBrand)
      await newProd.setSubCategory(subCat)
      return await newProd
    }
  } catch (e) {
    console.log(e)
    return `${model} ya existe`
  }
}

const getAll = async () => {
  try {
    const prod = await Product.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [{
        model: SubCategory,
        attributes: { exclude: ['createdAt', 'updatedAt', 'subCategoryId'] },
        include: {
          model: Category,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }
      },
      {
        model: Brand,
        atributes: { exclude: ['createdAt', 'updatedAt'] }
      }]
    })
    return prod
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }

  // return Product
}

const getDetail = async (productId) => {
  try {
    const producto = await Product.findByPk(productId, {
      include:
      [{
        model: ProductSold,
        include: [
          {
            model: Cart,
            include: { model: User }
          },
          {
            model: Review
          }
        ]
      }, {
        model: Brand,
        exclude: ['createdAt', 'updatedAt']
      }, {
        model: SubCategory,
        exclude: ['createdAt', 'updatedAt'],
        include: {
          model: Category,
          exclude: ['createdAt', 'updatedAt']
        }
      }]
    })

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
  const { id, model, img, description, price, rating, brand, category, subCategory } = prod

  await Product.update(
    {
      model: model,
      img: img,
      description: description,
      rating: rating,
      price: price
    }, { where: { id: id } })

  await Product.findOne({ where: { id: id } })
    .then((product) => {
      Brand.findOne({ where: { name: brand } })
        .then(brand => {
          product.setBrand(brand)
          SubCategory.findOne({ where: { name: subCategory } })
            .then((subCat) => {
              product.setSubCategory(subCat.dataValues.id)
              Category.findOne({ where: { name: category } })
                .then((Cat) => {
                  subCat.setCategory(Cat.dataValues.id)
                })
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
  } catch ({ message: error }) {
    console.log(error)
    throw new Error('Producto no se eliminó')
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
  } catch ({ message: error }) {
    throw new Error('Producto no se activó')
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
    } catch ({ message: error }) {
      console.log(error)
      throw new Error('Producto no pudo ser establecido')
    }
  }

  try {
    idProducts.map(async (id) => {
      const product = await Product.findByPk(id)
      product.price = product.price - (product.price * value)
      await product.save()
    })
    return 'Nuevo precio definido'
  } catch ({ message: error }) {
    console.log(error)
    throw new Error('Precio no pudo ser establecido')
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
          model,
          img,
          description,
          price,
          points,
          stock,
          state
        })

        const nBrand = await Brand.create({
          where: {
            name: brand
          }
        })

        const subCat = await SubCategory.findOne({
          where: {
            name: subCategory
          }
        })

        if (subCat === null || nBrand === null) return 'No se encontró la SubCategoría'
        await newProd.setBrand(nBrand)
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
    throw new Error('Stock no pudo ser establecido')
  }
}

const addReview = async (productSoldId, review) => {
  try {
    const productSold = await ProductSold.findByPk(productSoldId,
      {
        include: [
          {
            model: Cart,
            attributes: ['status']
          },
          {
            model: Product,
            attributes: ['rating', 'id']

          }]
      })

    const hasReview = await productSold.getReview()

    if (productSold.Cart.status !== 'Entregado ') {
      throw new Error('No puedes hacer un review a un producto que no fue entregado')
    }

    if (!hasReview) {
      const newReview = await Review.create(review)
      productSold.setReview(newReview)
        .then(async review => {
          if (productSold.product.rating === null) {
            productSold.product.rating = review.rating
            await productSold.product.save()
          } else {
            const ratings = await ProductSold.findAll({
              where: { productId: productSold.product.id },
              include: {
                model: Review,
                attributes: ['rating']
              }
            })

            let rank = 0
            for (let i = 0; i < ratings.length; i++) {
              console.log(ratings[i].Review.rating)
              rank = rank + parseInt(ratings[i].Review.rating)
              console.log(rank)
            }
            const promedio = Math.floor(rank / ratings.length)
            productSold.product.rating = promedio
            productSold.product.save()
            return productSold.product.rating
          }
        })

      return 'El review fue creado con éxito'
    } else {
      throw new Error('El producto ya tiene review')
    }
  } catch ({ message: error }) {
    throw new Error(error)
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
  addStock,
  addReview
}
