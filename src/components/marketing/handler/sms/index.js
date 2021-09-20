const accountSid = 'ACdb3db68045c1d4eadb53d52bd20ae8fe'
const authToken = 'a1970bef2c60866dc2463a535aa1c5b3'

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
