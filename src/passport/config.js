require('dotenv').config()
const Environment = process.env.NODE_ENV
const { SERVER_PORT, CLIENT_PORT } = process.env

const callBackUrl = () => {
  return (Environment === 'production')
    ? 'https://noiloan.herokuapp.com/api/v1/auth/google/callback'
    : `http://localhost:${SERVER_PORT}/api/v1/auth/google/callback`
}

const sucessRedirectUrl = () => {
  return (Environment === 'production')
    ? 'https://noiloan.herokuapp.com/login/success'
    : `http://localhost:${CLIENT_PORT}/login/success`
}

const failureRedirectUrl = () => {
  return (Environment === 'production')
    ? 'https://noiloan.herokuapp.com/login/failed'
    : `http://localhost:${CLIENT_PORT}/login/failed`
}

const logOutRedirect = () => {
  return (Environment === 'production')
    ? 'https://noiloan.herokuapp.com'
    : `http://localhost:${CLIENT_PORT}`
}

module.exports = {
  callBackUrl,
  sucessRedirectUrl,
  failureRedirectUrl,
  logOutRedirect
}
