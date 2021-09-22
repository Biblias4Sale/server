const express = require('express')
const { newBrand, getBrandByName, getAllBrands } = require('./controllers')
const router = express.Router()

router.get('/', async (req, res) => {
  if (req.query.name) {
    return res.send(await getBrandByName(req.query.name))
  }
  return res.send(await getAllBrands())
})

router.post('/', async (req, res) => {
  res.json(await newBrand(req.body.name))
})

module.exports = router
