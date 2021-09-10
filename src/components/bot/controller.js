const bcryptjs = require('bcryptjs')
const store = require('./store')

const getUsers = async (id) => await store.getUsers(id)

const deleteUserWithEmail = async (email) => await store.deleteUserWithEmail(email)

const activateUserWithEmail = async (email) => await store.activateUserWithEmail(email)

const resetPasswordWithEmail = async (email) => await store.resetPasswordWithEmail(email)

module.exports = {
  getUsers,
  deleteUserWithEmail,
  activateUserWithEmail,
  resetPasswordWithEmail
}
