const store = require('./store')

const getUsers = async (id) => {
  return await store.getUsers(id)
}

const delUser = async (id) => {
  return await store.delUser(id)
}

const activeUser = async (id) => {
  return await store.activeUser(id)
}

module.exports = {
  getUsers,
  delUser,
  activeUser
}
