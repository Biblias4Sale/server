// const { Router } = require('express')
// const { sucessRedirectUrl, failureRedirectUrl, logOutRedirect } = require('../../passport/config')
// const router = Router()
// const passport = require('passport')
// const { isAuthenticated } = require('../../middlewares/isAuthenticated')

// router.get('/login/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] }))

// router.get('/auth/google/callback',
//   passport.authenticate('google', {
//     failureMessage: 'failure auth callback',
//     failureRedirect: failureRedirectUrl(),
//     successRedirect: sucessRedirectUrl()
//   }),
//   (req, res) => {
//     res.json({ message: 'logged in' })
//     console.log(req.user)
//   })

// router.get('/user', (req, res) => {
//   console.log('req.user', req.user)
//   console.log(req.cookies)
//   res.json(req.user)
// })

// router.get('/logout', (req, res) => {
//   req.logout()
//   req.session.destroy((error) => {
//     if (error) return console.log(error)
//     res.send('logged out')
//     res.redirect(logOutRedirect())
//   })
// })

// module.exports = router
