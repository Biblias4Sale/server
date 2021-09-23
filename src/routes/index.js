const express = require('express')
const router = express.Router()
const networkCategory = require('../components/category/network')
const networkProduct = require('../components/product/network')
const networkCart = require('../components/cart/network.js')
const networkUser = require('../components/user/network')
const networkAdmin = require('../components/admin/network')
const networkBot = require('../components/bot/network')
const networkMarketing = require('../components/marketing/network')
const authLogin = require('../components/auth/login')
const authLogout = require('../components/auth/logout')
const loginUser = require('../components/auth/loginUser')
const logoutUser = require('../components/auth/logoutUser')
const theTest = require('../components/auth/test')
const networkFavorites = require('../components/favorites/network')
const networkSavedProduct = require('../components/productSaved/network')
const networkMercadoPago = require('../components/mercadoPago/network')
const networkBrand = require('../components/brand/network')
const networkReviews = require('../components/reviews/network')

const brand = '/brands'
const category = '/categories'
const product = '/products'
const cart = '/cart'
const user = '/user'
const admin = '/admin'
const bot = '/bot'
const marketing = '/configureMarketing'
const googleLogin = '/api/v1/'
const googleLogout = '/google/logout'
const userLogin = '/login'
const userLogout = '/logout'
const test = '/test'
const favorites = '/favorites'
const savedProduct = '/savedProducts'
const mercadopago = '/api/v1/mercadopago'
const reviews = '/reviews'

router.use(brand, networkBrand)
router.use(category, networkCategory)
router.use(product, networkProduct)
router.use(cart, networkCart)
router.use(user, networkUser)
router.use(admin, networkAdmin)
router.use(bot, networkBot)
router.use(marketing, networkMarketing)
router.use(favorites, networkFavorites)
router.use(savedProduct, networkSavedProduct)
router.use(mercadopago, networkMercadoPago)
router.use(reviews, networkReviews)

// auth
router.use(googleLogin, authLogin)
router.use(googleLogout, authLogout)
router.use(userLogin, loginUser)
router.use(userLogout, logoutUser)
router.use(test, theTest)

module.exports = router
