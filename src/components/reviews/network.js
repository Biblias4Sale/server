const express = require('express')
const router = express.Router()
const response = require('../../responses')
const { addReview, getReview } = require('./controller')

router.get('/:productID', (req, res) => {
  const productId = req.params.productID
  getReview(productId)
    .then(message => response.success(req, res, 201, message))
    .catch(error => response.error(req, res, 400, error, 'No se pudo obtener el review'))
})

router.post('/:productSoldId', (req, res) => {
  const productSoldId = req.params.productSoldId
  const review = req.body

  addReview(productSoldId, review)
    .then(message => response.success(req, res, 201, message))
    .catch(error => response.error(req, res, 400, error, 'No se pudo agregar el review'))
})

module.exports = router
