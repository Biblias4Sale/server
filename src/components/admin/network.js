const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
const response = require('../../responses')

router.get('/', (req, res) => {
  controller
    .getUsers()
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'Not users'))
})

router.delete('/', (req, res) => {
  controller
    .delUser(req.body.id)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Not users'))
})

router.post('/', (req, res) => {
  controller
    .activeUser(req.body.id)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Not users'))
})

module.exports = router
