const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../responses')
const statusCartValidation = require('../../middlewares/statusCartValidation')
const validation = require('../../middlewares/validation')

router.get('/:id', (req, res) => {
  controller
    .getCart(req.params.id)
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'Cart not found'))
})

router.get('/orders/:id', (req, res) => {
  controller
    .getOrders(req.params.id)
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'Cart not found'))
})

router.post('/confirmCart/:cartId/:id', [
  statusCartValidation,
  validation
], (req, res) => {
  controller
    .confirmCart(req.params.cartId, req.params.id, req.body.price)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Product not found'))
})

router.post('/newProduct/:cartId/:productId', (req, res) => {
  controller
    .newProduct(req.params.cartId, req.params.productId, req.body)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Product not found'))
})

router.post('/addProduct/:cartId/:productId', (req, res) => {
  controller
    .addProduct(req.params.cartId, req.params.productId, req.body.qty)
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 401, e, 'Product not found'))
})

router.post('/subProduct/:cartId/:productId', (req, res) => {
  controller
    .subProduct(req.params.cartId, req.params.productId)
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
