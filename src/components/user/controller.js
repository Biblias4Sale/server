const bcryptjs = require('bcryptjs')
const tokenGenerator = require('../../helpers/tokenGenerator')
const tokenValidators = require('../../helpers/tokenValidators')
const store = require('./store')
const validation = require('../../helpers/marketingValidators')
const mail = require('../marketing/handler/mailing')
const sms = require('../marketing/handler/sms')

const newUser = async ({ name, lastName, email, password }) => {
  const salt = bcryptjs.genSaltSync()
  const userInfo = {
    name,
    lastName,
    email,
    type: 'Super',
    password: bcryptjs.hashSync(password, salt)
  }

  await store.newUser(userInfo)
  try {
    const tokenValidation = await tokenValidators(email, password)
    if (tokenValidation) return tokenValidation
    const { user, token } = await tokenGenerator(email)
    if (await validation.mailCreateAccount()) mail.createAccount(user)
    if (await validation.smsCreateAccount()) sms.createAccount(user)

    return ({ user, token })
  } catch (error) {
    throw new Error(error)
  }
}

const editUser = async (id, body) => {
  try {
    const { token, password, ...infoUser } = body
    if (password) {
      const salt = bcryptjs.genSaltSync()
      infoUser.password = bcryptjs.hashSync(password, salt)
    }
    return await store.editUser(id, infoUser)
  } catch (error) {
    throw new Error(error)
  }
}

const delUser = async (id) => {
  try {
    return await store.delUser(id)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  newUser,
  editUser,
  delUser
}
