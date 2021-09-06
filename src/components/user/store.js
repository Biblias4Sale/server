const { Users } = require('../../db')

const newUser = async (user) => {
  try {
    return await Users.create(user)
  } catch (error) {
    console.error(error)
    return 'User not created'
  }
}

const editUser = () => { }

const delUser = async (id) => {
  const user = await Users.findByPk(id)
  user.status = false
  await user.save()
  console.log(user)
}

module.exports = {
  newUser,
  editUser,
  delUser
}
