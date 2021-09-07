const bcriptjs = require('bcryptjs')
const { Users } = require('../../db')

const getUsers = async () => {
  return await Users.findAll()
}

const delUser = async (id) => {
  const user = await Users.findByPk(id)
  user.status = false
  await user.save()
  return 'User deleted'
}

const activeUser = async (id) => {
  const user = await Users.findByPk(id)
  user.status = true
  await user.save()
  return 'User activate'
}

const resetPassword = async (id) => {
  const user = await Users.findByPk(id)
  const salt = bcriptjs.genSaltSync()
  user.password = bcriptjs.hashSync(user.email, salt)
  user.save()
  return 'Password reset'
}

const changePassword = async (user) => {
  const userModified = await Users.findByPk(user.id)
  userModified.password = user.password
  userModified.save()
  return 'Password modified'
}

module.exports = {
  getUsers,
  delUser,
  activeUser,
  resetPassword,
  changePassword
}
