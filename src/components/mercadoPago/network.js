const express = require('express')
const router = express.Router()
const Controller = require('./controller')

const { getPaymentLink, getAllPayments, getPaymentById } = Controller

router.get('/', async (req, res) => {
  const { id } = req.query

  if (id) {
    const response = await getPaymentById(id)
    res.json(response)
  } else {
    const response = await getAllPayments()
    res.json(response)
  }
})

router.post('/', async (req, res) => {
  const response = await getPaymentLink(req.body)

  res.json(response)
})

module.exports = router
