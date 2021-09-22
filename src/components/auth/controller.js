const tokenGenerator = require('../../helpers/tokenGenerator')
const tokenValidators = require('../../helpers/tokenValidators')
const store = require('./store')

const getToken = async ({ email, password }, res) => {
  try {
    const tokenValidation = await tokenValidators(email, password)
    if (tokenValidation) {
      throw new Error(tokenValidation)
    }
    const { user, token } = await tokenGenerator(email)
    const cart = await store.getCart(user.id)
    return ({ user, token, cartID: cart.id })
  } catch (error) {
    throw new Error(error)
  }
}

const getTokenGoogle = async ({ email }) => {
  try {
    const token = await tokenGenerator(email)
    return token
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getToken,
  getTokenGoogle
}
