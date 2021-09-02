const express = require('express')
const router = express.Router()
const networkCategory = require('../components/category/network')
const networkProduct = require('../components/product/network')

router.use('/category', networkCategory)
router.use('/product', networkProduct)

module.exports = router
