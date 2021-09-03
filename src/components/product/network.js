const express = require('express')
const router = express.Router()
const { getAll, getBest, getDetail, addProduct } = require('./controller')

router.get('/', (req, res) => {
  res.json(getAll())
})

router.get('/best/:qty', (req, res) => {
  res.json(getBest(req.params.qty))
})

router.get('/detail/:id', (req, res) => {
  res.json(getDetail(req.params.id))
})

router.post('/add', async (req, res) => {
  const response = await (addProduct(req.body))
  res.json(response)
})

module.exports = router
