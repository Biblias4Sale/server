const bcryptjs = require('bcryptjs')
const store = require('./store')

const newUser = async ({ name, lastName, email, password }) => {
  const salt = bcryptjs.genSaltSync()
  const user = {
    name,
    lastName,
    email,
    password: bcryptjs.hashSync(password, salt)
  }

  return await store.newUser(user)
}

const editUser = async () => await store.editUser()

const delUser = async (id) => await store.delUser(id)

module.exports = {
  newUser,
  editUser,
  delUser
}
