const bcryptjs = require('bcryptjs')
const tokenGenerator = require('../../helpers/tokenGenerator')
const tokenValidators = require('../../helpers/tokenValidators')
const store = require('./store')

const newUser = async ({ name, lastName, email, password }) => {
  const salt = bcryptjs.genSaltSync()
  const user = {
    name,
    lastName,
    email,
    type: 'User',
    password: bcryptjs.hashSync(password, salt)
  }

  await store.newUser(user)
  try {
    const tokenValidation = await tokenValidators(email, password)
    if (tokenValidation) return tokenValidation
    const token = await tokenGenerator(email)
    return token
  } catch (err) {
    return err
  }
}

const editUser = async (id, body) => {
  const { token, password, ...infoUser } = body
  if (password) {
    const salt = bcryptjs.genSaltSync()
    infoUser.password = bcryptjs.hashSync(password, salt)
  }
  return await store.editUser(id, infoUser)
}

const delUser = async (id) => await store.delUser(id)

module.exports = {
  newUser,
  editUser,
  delUser
}
