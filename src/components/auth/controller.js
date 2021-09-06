const tokenGenerator = require('../../helpers/tokenGenerator')
const tokenValidators = require('../../helpers/tokenValidators')

const getToken = async ({ email, password }, res) => {
  try {
    const tokenValidation = await tokenValidators(email, password)
    if (tokenValidation) {
      return res.status(400).json(tokenValidation)
    }
    const token = await tokenGenerator(email)
    return token
  } catch (err) {
    return err
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
