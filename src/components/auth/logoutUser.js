const express = require('express')
const router = express.Router()

router.get('/', [
], (req, res) => {
  res.clearCookie('nToken')
  return res.redirect(200, '/')
})

module.exports = router
