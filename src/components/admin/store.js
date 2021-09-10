const bcriptjs = require('bcryptjs')
const { User } = require('../../db')

const getUsers = async () => {
  return await User.findAll()
}

const newUser = async (user) => {
  try {
    const userInfo = await User.create(user)
    const userReturn = {
      id: userInfo.id,
      name: userInfo.name,
      lastName: userInfo.lastName,
      email: userInfo.email
    }
    return userReturn
  } catch (error) {
    console.error(error)
    return 'User not created'
  }
}

const delUser = async (id) => {
  const user = await User.findByPk(id)
  console.log(user)
  user.status = false
  await user.save()
  return 'User deleted'
}

const deleteUserWithEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } })
  console.log(user)
  user.status = false
  await user.save()
  return 'User deleted'
}

const activateUser = async (id) => {
  const user = await User.findByPk(id)
  user.status = true
  await user.save()
  return 'User activate'
}

const activateUserWithEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } })
  user.status = true
  await user.save()
  return 'User activate'
}

const resetPassword = async (id, email) => {
  const user = await User.findByPk(id)
  const salt = bcriptjs.genSaltSync()
  user.password = bcriptjs.hashSync(user.email, salt)
  user.save()
  return 'Password reset'
}

const resetPasswordWithEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } })
  const salt = bcriptjs.genSaltSync()
  user.password = bcriptjs.hashSync(user.email, salt)
  user.save()
  return 'Password reset'
}

const changePassword = async (user) => {
  const userModified = await User.findByPk(user.id)
  userModified.password = user.password
  userModified.save()
  return 'Password modified'
}

const changeType = async (id, type) => {
  const user = await User.findByPk(id)
  user.type = type
  user.save()
  return 'Type modified'
}

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
