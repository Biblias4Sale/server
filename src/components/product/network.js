const express = require('express')
const router = express.Router()
const { getAll, getBest, getDetail, addProduct, getReview, editProduct, deleteProducts, activateProducts, changePrice, csvToProducts, addStock, addReview } = require('./controller')
const responses = require('../../responses')

router.get('/', async (req, res) => {
  const response = await getAll()
  res.json(response)
})

router.get('/best/:qty', (req, res) => {
  res.json(getBest(req.params.qty))
})

router.get('/detail/:id', (req, res) => {
  getDetail(req.params.id)
    .then(message => responses.success(req, res, 201, message))
    .catch(error => responses.error(req, res, 404, error, 'No se pudo obtener los detalles del producto'))
})

router.post('/add', async (req, res) => {
  const response = await (addProduct(req.body))
  res.json(response)
})

router.get('/reviews', async (req, res) => {
  const response = await (getReview())
  res.json(response)
})

router.put('/edit/', async (req, res) => {
  const response = await editProduct(req.body)
  res.json(response)
})

router.put('/deleteproducts/', async (req, res) => {
  const response = await deleteProducts(req.body.idProducts)
  res.status(201).json(response)
})

router.put('/activateproducts/', async (req, res) => {
  const response = await activateProducts(req.body.idProducts)
  res.status(201).json(response)
})

router.put('/changeprice', async (req, res) => {
  const response = await changePrice(req.body)
  res.json(response)
})

router.get('/csvadd', async (req, res) => {
  const response = await csvToProducts()
  res.json(response)
})

router.get('/csvget', async (req, res) => {
  const response = await csvToProducts()
  res.json(response)
})

router.post('/addStock/:productId/:qty', async (req, res) => {
  const productId = req.params.productId
  const qty = req.params.qty
  const response = await addStock(qty, productId)
  res.json(response)
})

router.post('/reviews/:productSoldId', (req, res) => {
  const productSoldId = req.params.productSoldId
  const review = req.body

  addReview(productSoldId, review)
    .then(message => responses.success(req, res, 201, message))
    .catch(error => responses.error(req, res, 400, error, 'No se pudo agregar el review'))
})


module.exports = router
