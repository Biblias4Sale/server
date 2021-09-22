require('dotenv').config()
const axios = require('axios')
const mercadopago = require('mercadopago')
const { Cart } = require('../../db')

const { ACCESS_TOKEN } = process.env

mercadopago.configure({
  access_token: ACCESS_TOKEN
})

const getPaymentLink = async (request) => {
  let paymentLink
  const preference = {
    items: request
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

  const editedResponse = response.data.results.map(payment =>
    // Acá se pretende llamar al carrito por ID, y luego adjuntarlo al payment.
  // await Cart.findOne({ where: { id: response.data.additional_info.items[0].description } })
    payment.status_detail === 'cc_rejected_insufficient_amount' ? { ...payment, status: ['insufficient', 'Pendiente nuevo pago'] }
      : payment.status_detail === 'pending_contingency' ? { ...payment, status: ['in_process', 'Pendiente de confirmación de pago'] }
        : payment.status_detail === 'cc_rejected_call_for_authorize' ? { ...payment, status: ['rejected', 'Pendiente nuevo pago'] }
          : payment.status_detail === 'accredited' ? { ...payment, status: ['approved', 'En preparación'] }
            : { ...payment }
  )

  return editedResponse
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
