const tokenGenerator = require('../../helpers/tokenGenerator')
const tokenValidators = require('../../helpers/tokenValidators')
const store = require('../cart/store')

const getToken = async ({ email, password }, res) => {
  try {
    const tokenValidation = await tokenValidators(email, password)
    if (tokenValidation) {
      throw new Error(tokenValidation)
    }
    const { user, token } = await tokenGenerator(email)
    const cart = await store.getCart(user.id)
    return ({ user, token, cart })
  } catch (err) {
    throw new Error(err)
  }
}

const getTokenGoogle = async ({ email }) => {
  try {
    const token = await tokenGenerator(email)
    return token
  } catch (err) {
    return err
  }
}

module.exports = {
  getToken,
  getTokenGoogle
}
