const express = require('express')
const router = express.Router()
const { addProductSold } = require('./controller')

router.post('/', async (req, res) => {
  const productSold = req.body
  const response = await addProductSold(productSold)
  res.send(response)
})

module.exports = router
