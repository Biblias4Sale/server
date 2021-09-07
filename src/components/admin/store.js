const { Users } = require('../../db')

const getUsers = async () => {
  return await Users.findAll()
}

module.exports = {
  getUsers
}
