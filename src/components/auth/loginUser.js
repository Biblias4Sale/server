const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const validation = require('../../middlewares/validation')
const controller = require('./controller')
const response = require('../../responses')

router.post('/', [
  check('email', 'Mail is required').notEmpty(),
  check('email', 'Mail is not validate').isEmail(),
  check('password', 'Password is required and must be more than 6 letters').isLength({ min: 6 }).notEmpty(),
  validation
], (req, res) => {
  console.log('body in back', req.body)
  controller
    .getToken(req.body, res)
    .then(message => {
      res.cookie('nToken', message.token, { maxAge: 900000, httpOnly: true })
      response.success(req, res, 201, message.user)
    })
    .catch(e => response.error(req, res, 400, e, 'No session'))
})
module.exports = router
