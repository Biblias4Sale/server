
const fs = require('fs').promises
const parse = require('csv-parse/lib/sync')
const path = require('path')
const store = require('./store')
const moment = require('moment')

const getAll = async () => {
  return await store.getAll()
}

const getBest = (qty) => {
  return getAll()
    .slice()
    .sort((b, a) => a.points - b.points)
    .slice(0, qty)
}

const getDetail = async (id) => {
  try {
    const data = await store.getDetail(id)

    const reviews = data.dataValues.ProductSolds.map(obj => {
      const fecha = obj.dataValues.Review.dataValues.createdAt
      const fechaMoment = moment(fecha).format('L')
      return {
        user: obj.Cart.dataValues.User.name,
        rating: obj.dataValues.Review.dataValues.rating,
        description: obj.dataValues.Review.dataValues.description,
        fecha: fechaMoment
      }
    })

    const response = {
      id: data.id,
      brand: data.brand,
      model: data.model,
      img: data.img,
      description: data.description,
      price: data.price,
      rating: data.rating,
      stock: data.stock,
      reviews: reviews
    }
    return response
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addProduct = async (newProduct) => {
  return await store.addProduct(newProduct)
}

const getReview = async () => {
  return await store.getReview()
}

const editProduct = async (prod) => {
  return await store.editProduct(prod)
}

const deleteProducts = async (idProducts) => {
  return await store.deleteProducts(idProducts)
}

const activateProducts = async (idProducts) => {
  return await store.activateProducts(idProducts)
}

const changePrice = async ({ idProducts, value }) => {
  return await store.changePrice(idProducts, value)
}

const csvToProducts = async () => {
  try {
    const fileContent = await fs.readFile(path.join(__dirname, '/products.csv'))
    const products = parse(fileContent, { columns: true })
    return store.csvToProducts(products)
  } catch (err) {
    return err
  }
}

const addStock = async (qty, productId) => {
  return await store.addStock(qty, productId)
}

const addReview = (productSoldId, review) => store.addReview(productSoldId, review)

module.exports = {
  getAll,
  getBest,
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
