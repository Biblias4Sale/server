const store = require('./store')

const getUsers = async () => {
  return await store.getUsers()
}

module.exports = {
  getUsers
}
