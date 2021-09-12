const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const path = require('path')
const controller = require('./controller.js')
const response = require('../../responses')
const { validationEmail } = require('../../helpers/dbValidators.js')
const validation = require('../../middlewares/validation.js')

router.get('/', (req, res) => {
  controller
    .getUsers()
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'Not users'))
})

router.post('/', [
  check('email', 'email exist').custom(validationEmail),
  validation
], (req, res) => {
  controller
    .newUser(req.body)
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'Not users'))
})

router.delete('/:id', (req, res) => {
  controller
    .delUser(req.params.id)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'User not deleted'))
})

router.put('/:id', (req, res) => {
  controller
    .activateUser(req.params.id)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'User not activate'))
})

router.put('/resetpassword/:id', (req, res) => {
  controller
    .resetPassword(req.params.id)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Password not changed'))
})

router.put('/changepassword/:id', (req, res) => {
  controller
    .changePassword(req.params.id, req.body.password)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Password not changed'))
})

router.put('/changetype/:id', (req, res) => {
  controller
    .changeType(req.params.id, req.body.type)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Password not changed'))
})

router.post('/csvadd', (req, res) => {
  controller
    .csvToUsers()
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Users not created'))
})

router.get('/csvget', (req, res) => {
  controller
    .usersToCSV()
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Users not created'))
})

module.exports = router
