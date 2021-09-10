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
  if (infoUser.lastName) user.name = infoUser.name
  if (infoUser.email) user.name = infoUser.name
  if (infoUser.cp) user.cp = infoUser.cp
  if (infoUser.address) user.address = infoUser.address
  if (infoUser.city) user.city = infoUser.city
  if (infoUser.province) user.province = infoUser.province
  if (infoUser.phone) user.phone = infoUser.phone
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
