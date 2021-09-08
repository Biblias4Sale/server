const { Users } = require('../../db')

const newUser = async (user) => {
  try {
    return await Users.create(user)
  } catch (error) {
    console.error(error)
    return 'User not created'
  }
}

const editUser = async (id, infoUser) => {
  const user = await Users.findByPk(id)
  if (infoUser.name) user.name = infoUser.name
  if (infoUser.lastName) user.name = infoUser.name
  if (infoUser.email) user.name = infoUser.name
  if (infoUser.password) user.name = infoUser.name
  user.save()
  const userReturn = {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    email: user.email
  }
  return userReturn
}

const delUser = async (id) => {
  const user = await Users.findByPk(id)
  user.status = false
  await user.save()
  return 'User deleted'
}

module.exports = {
  newUser,
  editUser,
  delUser
}
