const express = require('express')
const router = express.Router()
const { addFav, getFavs, removeFav } = require('./controller')

router.post('/:user/:product', async (req, res) => {
  const user = req.params.user
  const productID = req.params.product
  res.json(await addFav(user, productID))
})

router.get('/:user', async (req, res) => {
  const user = req.params.user
  res.json(await getFavs(user))
})

router.delete('/:user/:product', async (req, res) => {
  const user = req.params.user
  const productID = req.params.product
  res.json(await removeFav(user, productID))
})

module.exports = router
