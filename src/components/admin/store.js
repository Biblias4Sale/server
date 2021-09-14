const bcriptjs = require('bcryptjs')
const { User } = require('../../db')

const getUsers = async () => {
  try {
    return await User.findAll()
  } catch (err) {
    return err
  }
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
  try {
    const user = await User.findByPk(id)
    user.status = false
    await user.save()
    return 'User deleted'
  } catch (err) {
    throw new Error(err)
  }
}

const activateUser = async (id) => {
  try {
    const user = await User.findByPk(id)
    user.status = true
    await user.save()
    return 'User activate'
  } catch (error) {
    return error
  }
}

const resetPassword = async (id, email) => {
  try {
    const user = await User.findByPk(id)
    const salt = bcriptjs.genSaltSync()
    user.password = bcriptjs.hashSync(user.email, salt)
    user.save()
    return 'Password reset'
  } catch (error) {
    return error
  }
}

const changePassword = async (user) => {
  try {
    const userModified = await User.findByPk(user.id)
    userModified.password = user.password
    userModified.save()
    return 'Password modified'
  } catch (error) {
    return error
  }
}

const changeType = async (id, type) => {
  try {
    const user = await User.findByPk(id)
    user.type = type
    user.save()
    return 'Type modified'
  } catch (error) {
    return error
  }
}

const csvToUsers = (users) => {
  try {
    users.map(async (user) => await User.create(user))
    return 'Users created'
  } catch (error) {
    return error
  }
}

const usersToCSV = async () => {
  try {
    return await User.findAll()
  } catch (error) {
    return error
  }
}

module.exports = {
  getUsers,
  newUser,
  delUser,
  activateUser,
  resetPassword,
  changePassword,
  changeType,
  csvToUsers,
  usersToCSV
}
