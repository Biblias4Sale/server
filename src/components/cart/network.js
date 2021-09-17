const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../responses')

router.get('/:id', (req, res) => {
  controller
    .getCart(req.params.id)
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'Cart not found'))
})

router.post('/addProduct/:cartId/:productId', (req, res) => {
  controller
    .addProduct(req.params.cartId, req.params.productId, req.body)
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'Product not found'))
})

router.delete('/delProduct/:cartId/:productId', (req, res) => {
  controller
    .delProduct(req.params.cartId, req.params.productId)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Product not found'))
})

module.exports = router
