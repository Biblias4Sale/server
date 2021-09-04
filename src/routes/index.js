const express = require('express')
const router = express.Router()
const networkCategory = require('../components/category/network')
const networkProduct = require('../components/product/network')
const login = require('../components/auth/login')
const logout = require('../components/auth/logout')
const user = require('../components/auth/user')

router.use('/categories', networkCategory)
router.use('/products', networkProduct)

// hola Diego

// auth
router.use('/api/v1/', login)
router.use('/logout', logout)
router.use('/user', user)

module.exports = router
