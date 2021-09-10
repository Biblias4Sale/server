const express = require('express')
const router = express.Router()
const networkCategory = require('../components/category/network')
const networkProduct = require('../components/product/network')
const networkUser = require('../components/user/network')
const authLogin = require('../components/auth/login')
const authLogout = require('../components/auth/logout')
const loginUser = require('../components/auth/loginUser')
const logoutUser = require('../components/auth/logoutUser')
const theTest = require('../components/auth/test')

const category = '/categories'
const product = '/products'
const user = '/user'
const googleLogin = '/api/v1/'
const googleLogout = '/logout/google'
const userLogin = '/login'
const userLogout = '/logout'
const test = '/test'

router.use(category, networkCategory)
router.use(product, networkProduct)
router.use(user, networkUser)

// auth
router.use(googleLogin, authLogin)
router.use(googleLogout, authLogout)
router.use(userLogin, loginUser)
router.use(userLogout, logoutUser)
router.use(test, theTest)

module.exports = router
