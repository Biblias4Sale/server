const express = require('express')
const router = express.Router()
const networkCategory = require('../components/category/network')

router.use('/category', networkCategory)

module.exports = router
