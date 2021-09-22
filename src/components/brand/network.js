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
  const { name } = req.body
  console.log(name)
  res.json(await newBrand(name))
})

module.exports = router
