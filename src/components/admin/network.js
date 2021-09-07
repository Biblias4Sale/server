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
    .catch(e => response.error(req, res, 404, e, 'User not deleted'))
})

router.put('/', (req, res) => {
  controller
    .activeUser(req.body.id)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'User not activate'))
})

router.put('/resetpassword', (req, res) => {
  controller
    .resetPassword(req.body.id)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Password not changed'))
})

router.put('/changepassword', (req, res) => {
  controller
    .changePassword(req.body.id, req.body.password)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Password not changed'))
})

module.exports = router
