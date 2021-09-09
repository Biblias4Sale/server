const jwt = require('jsonwebtoken')

const { User } = require('../db')

const tokenGenerator = async (email) => {
  const user = await User.findOne({ where: { email }, attributes: ['id', 'name', 'lastName', 'email', 'picture'] })
  const uid = user.id
  return new Promise((resolve, reject) => {
    const payload = { uid }
    jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
      expiresIn: '1h'
    }, (err, token) => {
      if (err) {
        console.log(err)
        reject(new Error('JWT not generate'))
      } else {
        resolve({ user, token })
      }
    })
  })
}

module.exports = tokenGenerator
