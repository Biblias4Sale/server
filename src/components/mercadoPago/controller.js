require('dotenv').config()
const axios = require('axios')
const mercadopago = require('mercadopago')

const { ACCESS_TOKEN } = process.env

mercadopago.configure({
  access_token: ACCESS_TOKEN
})

const getPaymentLink = async (request) => {
  let paymentLink
  const preference = {
    items: [request]
  }

  await mercadopago.preferences.create(preference)
    .then(json => {
      const editedResponse = {
        id: json.body.id,
        url: json.body.init_point
      }
      paymentLink = editedResponse
    })

  return paymentLink
}

const getAllPayments = async () => {
  const response = await axios.get('https://api.mercadopago.com/v1/payments/search', { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })

  return response.data
}

const getPaymentById = async (id) => {
  const response = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })

  return response.data
}

module.exports = {
  getPaymentLink,
  getAllPayments,
  getPaymentById
}
