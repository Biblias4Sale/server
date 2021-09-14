const express = require('express')
const { newBrand, getBrandByName, getAllBrands } = require('./controllers')
const router = express.Router()

router.get('/', async (req, res) => {
  (req.query.name)
    ? res.send(await getBrandByName(req.query.name))
    : res.send(await getAllBrands())
})

router.post('/', async (req, res) => {
  console.log(req.body.name)
  res.json(newBrand(req.body.name))
})

module.exports = router
