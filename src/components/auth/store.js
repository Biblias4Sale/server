const { User } = require('../../db')

const getUser = async (email) => {
  try {
    return User.findOne({ where: { email }, attributes: ['id', 'name', 'lastName', 'email', 'picture', 'type'] })
  } catch (error) {
    return error
  }
}

module.exports = {
  getUser
}
