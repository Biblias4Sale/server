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

const deleteUserWithEmail = async (email) => await store.deleteUserWithEmail(email)

const activateUser = async (id) => await store.activateUser(id)

const activateUserWithEmail = async (email) => await store.activateUserWithEmail(email)

const resetPassword = async (id) => await store.resetPassword(id)

const resetPasswordWithEmail = async (email) => await store.resetPasswordWithEmail(email)

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
  deleteUserWithEmail,
  activateUser,
  activateUserWithEmail,
  resetPassword,
  resetPasswordWithEmail,
  changePassword,
  changeType
}
