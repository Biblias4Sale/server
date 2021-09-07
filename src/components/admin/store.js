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

module.exports = {
  getUsers,
  delUser,
  activeUser
}
