const jwt = require('jsonwebtoken')

const tokenValidation = (req, res, next) => {
  const token = req.header('x-token')
  if (!token) {
    return res.status(401).json({ msg: 'Without token' })
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
    req.uid = uid

    next()
  } catch (err) {
    console.error(err)
    res.status(401).json({
      msg: 'Invalid token'
    })
  }
}

module.exports = tokenValidation
