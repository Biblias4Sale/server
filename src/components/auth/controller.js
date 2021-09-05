const tokenGenerator = require('../../helpers/tokenGenerator')
const tokenValidators = require('../../helpers/tokenValidators')

const getToken = async ({ email, password }) => {
  try {
    const tokenValidation = await tokenValidators(email, password)
    if (tokenValidation) return tokenValidation
    const token = await tokenGenerator(email)
    return token
  } catch (err) {
    return err
  }
}

module.exports = {
  getToken
}
