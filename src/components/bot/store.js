const bcriptjs = require('bcryptjs')
const { User } = require('../../db')

const getUsers = async () => {
  return await User.findAll()
}

const deleteUserWithEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } })
  console.log(user)
  user.status = false
  await user.save()
  return 'User deleted'
}

const activateUserWithEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } })
  user.status = true
  await user.save()
  return 'User activate'
}

const resetPasswordWithEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } })
  const salt = bcriptjs.genSaltSync()
  user.password = bcriptjs.hashSync(user.email, salt)
  user.save()
  return 'Password reset'
}

module.exports = {
  getUsers,
  deleteUserWithEmail,
  activateUserWithEmail,
  resetPasswordWithEmail
}
