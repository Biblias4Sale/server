const bcriptjs = require('bcryptjs')
const store = require('./store')

const getUsers = async (id) => await store.getUsers(id)

const delUser = async (id) => await store.delUser(id)

const activeUser = async (id) => await store.activeUser(id)

const resetPassword = async (id) => await store.resetPassword(id)

const changePassword = async (id, password) => {
  const salt = bcriptjs.genSaltSync()
  const user = {
    id: id,
    password: bcriptjs.hashSync(password, salt)
  }
  return store.changePassword(user)
}

module.exports = {
  getUsers,
  delUser,
  activeUser,
  resetPassword,
  changePassword
}
