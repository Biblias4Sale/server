const bcriptjs = require('bcryptjs')
const { User, Product } = require('../../db')

const getStatistic = async ({ data }) => {
  const statistic = {
    customers: await User.findAndCountAll(),
    products: await Product.findAndCountAll()
  }
  return statistic[data].count
}

const getUsers = async () => {
  try {
    return await User.findAll()
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
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
  } catch ({ message: error }) {
    console.log(error)
    throw new Error('User not created')
  }
}

const delUser = async (id) => {
  try {
    const user = await User.findByPk(id)
    user.status = false
    await user.save()
    return 'User deleted'
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const activateUser = async (id) => {
  try {
    const user = await User.findByPk(id)
    user.status = true
    await user.save()
    return 'User activate'
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const resetPassword = async (id, email) => {
  try {
    const user = await User.findByPk(id)
    const salt = bcriptjs.genSaltSync()
    user.password = bcriptjs.hashSync(user.email, salt)
    user.save()
    return 'Password reset'
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
  }
}

const changePassword = async (user) => {
  try {
    const userModified = await User.findByPk(user.id)
    userModified.password = user.password
    userModified.save()
    return 'Password modified'
  } catch ({ message: error }) {
    console.log(error)
    throw new Error(error)
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
  getStatistic,
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
