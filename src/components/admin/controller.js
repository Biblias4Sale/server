const bcryptjs = require('bcryptjs')
const store = require('./store')

const getUsers = async (id) => await store.getUsers(id)

const newUser = async ({ name, lastName, email, type }) => {
  const salt = bcryptjs.genSaltSync()
  const user = {
    name,
    lastName,
    email,
    type,
    password: bcryptjs.hashSync(email, salt)
  }
  return await store.newUser(user)
}

const delUser = async (id) => await store.delUser(id)

const activateUser = async (id) => await store.activateUser(id)

const resetPassword = async (id) => await store.resetPassword(id)

const changePassword = async (id, password) => {
  const salt = bcryptjs.genSaltSync()
  const user = {
    id: id,
    password: bcryptjs.hashSync(password, salt)
  }
  return store.changePassword(user)
}

const changeType = async (id, type) => await store.changeType(id, type)

module.exports = {
  getUsers,
  newUser,
  delUser,
  activateUser,
  resetPassword,
  changePassword,
  changeType
}
