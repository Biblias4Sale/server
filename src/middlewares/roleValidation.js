const { User } = require('../db')

const roleValidation = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.uid)
    if (user.type === 'User') {
      return res.status(401).json({ msg: 'User not permitted' })
    }
  } catch (error) {
    return error
  }
  next()
}

module.exports = roleValidation
