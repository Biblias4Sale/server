const express = require('express')
const router = express.Router()
const { addFav, getFavs, removeFav } = require('./controller')

router.get('/:user', async (req, res) => {
  const user = req.params.user
  res.json(await getFavs(user))
})

router.post('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  res.json(await addFav(userID, productID))
})

router.delete('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID

  res.json(await removeFav(userID, productID))
})

module.exports = router
