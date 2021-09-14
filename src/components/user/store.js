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
  try {
    const user = await User.findByPk(id)
    if (infoUser.name) user.name = infoUser.name
    if (infoUser.lastName) user.lastName = infoUser.lastName
    if (infoUser.email) user.email = infoUser.email
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
      email: user.email,
      cp: user.cp,
      address: user.address,
      city: user.city,
      province: user.province,
      phone: user.phone,
      password: user.password
    }
    return userReturn
  } catch (error) {
    return error
  }
}

const delUser = async (id) => {
  try {
    const user = await User.findByPk(id)
    user.status = false
    await user.save()
    return 'User deleted'
  } catch (error) {
    return error
  }
}

module.exports = {
  newUser,
  editUser,
  delUser
}
