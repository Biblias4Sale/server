const express = require('express')
const router = express.Router()
const { getAll, getBest, getDetail, addProduct, getReview, editProduct, deleteProducts, activateProducts, changePrice, csvToProducts } = require('./controller')

router.get('/', async (req, res) => {
  const response = await getAll()
  res.json(response)
})

router.get('/best/:qty', (req, res) => {
  res.json(getBest(req.params.qty))
})

router.get('/detail/:id', async (req, res) => {
  const response = await getDetail(req.params.id)
  res.json(response)
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

module.exports = router
