const router = express.Router()
const networkCategory = require('../components/category/network')
const networkProduct = require('../components/product/network')
const networkUser = require('../components/user/network')
const authLogin = require('../components/auth/login')
const authLogout = require('../components/auth/logout')
const authUser = require('../components/auth/user')

const category = '/categories'
const product = '/products'
const user = '/user'
const googleLogin = '/api/v1/'
const googleLogout = '/logout'
const userLogin = '/login'

router.use(category, networkCategory)
router.use(product, networkProduct)
router.use(user, networkUser)

// hola Diego

// auth
router.use(googleLogin, authLogin)
router.use(googleLogout, authLogout)
router.use(userLogin, authUser)

module.exports = router
