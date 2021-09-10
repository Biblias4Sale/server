const { Router } = require('express')
const { frontEndHost } = require('../../../config')
const router = Router()
const passport = require('passport')
const { isAuthenticated } = require('../../middlewares/isAuthenticated')

router.get('/login/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureMessage: 'failure auth callback',
    failureRedirect: frontEndHost() + '/login/failed',
    successRedirect: frontEndHost() + '/login/success'
  }),
  (req, res) => {
    res.json({ message: 'logged in' })
    console.log(req.user)
  })

router.get('/test', (req, res) => {
  console.log(req.user)
  console.log('arriba')
  console.log(req.cookies)
  res.json(req.user)
})

module.exports = router
