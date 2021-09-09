const { User } = require('../../db')

const getUser = async (email) => {
  return User.findOne({ where: { email }, attributes: ['id', 'name', 'lastName', 'email', 'picture'] })
}

module.exports = {
  getUser
}
