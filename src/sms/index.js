const accountSid = 'ACdb3db68045c1d4eadb53d52bd20ae8fe'
const authToken = '2b0015d22dbd850827a785322005bc64'

const Twilio = require('twilio')
const client = new Twilio(accountSid, authToken)

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

module.exports = {
  confirmCart,
  createAccount
}
