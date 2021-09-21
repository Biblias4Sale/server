const { imgUploader } = require('../../helpers/imgUploader')
const fs = require('fs').promises
const parse = require('csv-parse/lib/sync')
const path = require('path')
const store = require('./store')
const cloudinary = require('../../cloudinary/cloudinary')

const getAll = async () => {
  const products = await store.getAll()
  console.log(products)
  const allProducts = products.map(p => {
    return {
      id: p.id,
      model: p.model,
      img: p.img,
      price: p.price,
      rating: p.rating,
      stock: p.stock,
      state: p.state,
      subCategoryId: p.subCategory.id,
      subCategory: p.subCategory.name,
      categoryId: p.subCategory.category.id,
      category: p.subCategory.category.name,
      brand: p.brand.name,
      description: p.description
    }
  })
  console.log(allProducts)
  return allProducts
}

const getBest = (qty) => {
  return getAll()
    .slice()
    .sort((b, a) => a.points - b.points)
    .slice(0, qty)
}

const getDetail = async (id) => {
  const p = await store.getDetail(id)
  const productDetails = {
    id: p.id,
    model: p.model,
    img: p.img,
    price: p.price,
    rating: p.rating,
    stock: p.stock,
    state: p.state,
    brand: p.brand.name
  }
  return productDetails
}

const addProduct = async (newProduct) => {
  const uploadFiles = newProduct.img
  const uploadResult = []
  const result = await uploadFiles.map((file) => {
    return cloudinary.uploader.upload(
      file, {
        async: false,
        upload_preset: 'product_imgs'
      }, (error, response) => {
        if (response) {
          uploadResult.push(response)
        }
        if (error) {
          console.log(error)
        }
        return uploadResult
      })
  })
  try {
    const uploadedData = await Promise.all(result)
    const finalData = uploadedData.map(img => {
      return img.url
    })
    const product = {
      brand: newProduct.brand,
      category: newProduct.category,
      subCategory: newProduct.subCategory,
      img: finalData,
      price: newProduct.price,
      discount: newProduct.discount,
      description: newProduct.description,
      model: newProduct.model
    }
    return await store.addProduct(product)
  } catch (error) {
    console.log(error)
  }
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
  addStock
}
