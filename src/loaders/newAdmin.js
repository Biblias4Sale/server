const { User } = require('../db')
const user = {
  email: 'admin@admin.com',
  name: 'admin',
  lastName: 'admin',
  password: 'admin123',
  type: 'Super'
}
const newAdminUser = async () => {
  try {
    const exist = await User.findOne({
      where: {
        email: user.email
      }
    })
    if (!exist) {
      const newUserAdmin = await User.findOrCreate({
        where: {
          name: user.name,
          email: user.email,
          lastName: user.lastName,
          password: user.password,
          type: user.type
        }
      })
      return newUserAdmin
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  newAdminUser
}
