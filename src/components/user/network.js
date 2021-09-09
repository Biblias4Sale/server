const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const controller = require('./controller')
const response = require('../../responses')
const validation = require('../../middlewares/validation')
// const tokenValidation = require('../../middlewares/tokenValidation')
const { validationEmail } = require('../../helpers/dbValidators')

router.post('/', [
  check('name', 'Name is required').notEmpty(),
  check('lastName', 'lastName is required').notEmpty(),
  check('email', 'Mail is required').notEmpty(),
  check('email', 'Mail is not validate').isEmail(),
  check('email', 'email exist').custom(validationEmail),
  check('password', 'Password is required and must be more than 6 letters').isLength({ min: 6 }).notEmpty(),
  validation
], (req, res) => {
  controller
    .newUser(req.body)
    .then(message => {
      // res.cookie('nToken', message.token, { maxAge: 900000, httpOnly: true })
      response.success(req, res, 201, message)
    })
    .catch(e => response.error(req, res, 404, e, 'User not found'))
})

router.put('/:id', [
], (req, res) => {
  controller
    .editUser(req.params.id, req.body)
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'User not found'))
})

router.delete('/:id', (req, res) => {
  controller
    .delUser(req.params.id)
    .then(message => response.success(req, res, 200, message))
    .catch(e => response.error(req, res, 404, e, 'User not found'))
})

module.exports = router
