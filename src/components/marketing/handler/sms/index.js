const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const Twilio = require('twilio')
const client = new Twilio(accountSid, authToken)

const createAccount = ({ name }) => {
  client.messages
    .create({
      body: `Hola ${name}, has creado una cuenta en NoiLoan`,
      to: '+573137921779', // Text this number
      from: '+19194297672' // From a valid Twilio number
    })
    .then((message) => console.log('SMS sent'))
    .catch(e => console.log(e))
}

const confirmCart = ({ name }) => {
  client.messages
    .create({
      body: `Hola ${name}, pronto enviaremos tu pedido`,
      to: '+573137921779', // Text this number
      from: '+19194297672' // From a valid Twilio number
    })
    .then((message) => console.log('SMS sent'))
    .catch(e => console.log(e))
}

module.exports = {
  confirmCart,
  createAccount
}
