const bcryptjs = require('bcryptjs')
const { Users } = require('../db')

// const Users = require('../models/Users')

const validationEmail = async (email) => {
  const emailExist = await Users.findOne({ where: { email: email } })
  if (emailExist) {
    throw new Error(`email ${email} exist`)
  }
}

const validationPassword = async (email, password) => {
  const user = await Users.findOne({ where: { email } })
  const userPassword = bcryptjs.compareSync(password, user.password)
  if (!userPassword) {
    return 'User and password not match'
  }
}

const validationActive = async (email) => {
  const user = await Users.findOne({ where: { email: email } })
  if (!user.status) {
    return 'User not active. Contact support'
  }
}

module.exports = {
  validationEmail,
  validationPassword,
  validationActive
}
