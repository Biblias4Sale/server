require('dotenv').config()
const axios = require('axios')
const mercadopago = require('mercadopago')
const moment = require('moment')
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
  // const CartID = parseInt(request[0].category_id)

  // await Cart.update(
  //   {
  //     status: 'Pendiente de confirmación de pago',
  //     confirmationDate: new Date()
  //   },
  //   { where: { id: CartID } }
  // )

  // const cart = await Cart.findByPk(CartID)

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
  try {
    const response = await axios.get('https://api.mercadopago.com/v1/payments/search', { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
    const data = response.data.results
    if (response) {
      const newResponse = data.map((r) => {
        const details = {
          user_email: r.payer.email,
          order_id: r.id,
          payment_status: {
            approved_date: r.date_approved,
            payment_market_status: r.status_detail,
            status: r.status
          },
          transaction_amount: r.transaction_amount,
          info: r.additional_info.items,
          client_cart: r.additional_info.items[0].description
        }
        return details
      })
      newResponse.map(async (p) => {
        if (p.payment_status.status && isNaN(p.client_cart) && p.payment_status.status === 'approved') {
          const changeStatus = await Cart.findOne({
            where: {
              id: p.client_cart
            }
          })
          if (changeStatus) {
            changeStatus.status = 'En preparación'
            // changeStatus.preparationDate = moment().format('YYYY-MM-DD HH:mm')
            changeStatus.save()
            // console.log('CAMBIE EL CARRITO:', changeStatus)
          }
        }
      })
      return newResponse
    }
  } catch (error) {
    console.log(error)
  }
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
