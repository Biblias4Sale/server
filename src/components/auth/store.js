const { Users } = require('../../db')

const getUser = async (email) => {
  return Users.findOne({ where: { email }, attributes: ['id', 'name', 'lastName', 'email', 'picture'] })
}

module.exports = {
  getUser
}
