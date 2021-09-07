const express = require('express')
const router = express.Router()
const { getAll, getBest, getDetail, addProduct, getReview } = require('./controller')


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

module.exports = router
