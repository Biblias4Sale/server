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

router.post('/del', (req, res) => {
  controller
    .deleteUserWithEmail(req.body.email)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'User not deleted'))
})

router.post('/activate', (req, res) => {
  controller
    .activateUserWithEmail(req.body.email)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'User not activate'))
})

router.post('/reset', (req, res) => {
  controller
    .resetPasswordWithEmail(req.body.email)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Password not changed'))
})

module.exports = router
