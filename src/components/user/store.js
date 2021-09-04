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

const delUser = () => { }

module.exports = {
  newUser,
  editUser,
  delUser
}
