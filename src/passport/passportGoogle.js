// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy
// const { callBackUrl } = require('./config')
// const { User } = require('../db')

// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: callBackUrl(),
//   passReqToCallback: true
// },
// async (req, accessToken, refreshToken, profile, cb) => {
//   const user = await User.findOrCreate({
//     where: {
//       name: profile.name.givenName,
//       googleId: profile.id,
//       email: profile.emails[0].value,
//       lastName: profile.name.familyName,
//       picture: profile.photos[0].value,
//       googleSession: true

//     }
//   }).catch((error) => {
//     console.log(error, 'login failed')
//   })

//   if (user && user[0]) return cb(null, user && user[0])
// }
// ))

// passport.serializeUser((user, cb) => {
//   console.log('       serialize'.blue.white)
//   cb(null, user.id)
// })

// passport.deserializeUser(async (id, cb) => {
//   console.log(id, '   deserialize')
//   const user = await User.findOne({
//     where: {
//       id
//     }
//   }).catch((error) => console.log('deserializing user failed ', error))
//   if (user) {
//     cb(null, user)
//   } else {
//     console.log('user not found deserializing')
//   }
// })
