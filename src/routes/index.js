const express = require('express')
const router = express.Router()
const networkCategory = require('../components/category/network')
const networkLesson = require('../components/lesson/network')
const login = require('../components/auth/login')
const logout = require('../components/auth/logout')
const user = require('../components/auth/user')


router.use('/category', networkCategory)
router.use('/lesson', networkLesson)



//auth
router.use('/api/v1/', login);
router.use('/logout', logout);
router.use('/user', user);

module.exports = router
