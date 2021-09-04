const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const validation = require('../../middlewares/validation')
const controller = require('./controller')
const response = require('../../responses')

router.get('/', [
  check('email', 'Mail is required').notEmpty(),
  check('email', 'Mail is not validate').isEmail(),
  check('password', 'Password is required and must be more than 6 letters').isLength({ min: 6 }).notEmpty(),
  validation
], (req, res) => {
  controller
    .getToken(req.body)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'No session'))
})

module.exports = router
