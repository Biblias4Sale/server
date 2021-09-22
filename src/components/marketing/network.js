const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../responses')

router.post('/', (req, res) => {
  controller
    .settingsMarketing(req.body)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Message'))
})

module.exports = router
