const { User } = require('../../db')

const newUser = async (user) => {
  try {
    return await User.create(user)
  } catch (error) {
    console.error(error)
    return 'User not created'
  }
}

const editUser = async (id, infoUser) => {
  const user = await User.findByPk(id)
  if (infoUser.name) user.name = infoUser.name
  if (infoUser.lastName) user.lastName = infoUser.lastName
  if (infoUser.email) user.email = infoUser.email
  if (infoUser.password) user.password = infoUser.password
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
  const user = await User.findByPk(id)
  user.status = false
  await user.save()
  return 'User deleted'
}

module.exports = {
  newUser,
  editUser,
  delUser
}
