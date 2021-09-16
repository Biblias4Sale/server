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

module.exports = router
