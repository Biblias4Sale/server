const express = require('express')
const router = express.Router()
const { addSavedProduct, getSavedProducts, decreaseSavedProducts, deleteSavedProducts } = require('./controller')

router.get('/:userID', async (req, res) => {
  const userID = req.params.userID
  res.json(await getSavedProducts(userID))
})

router.post('/:userID/:productID', async (req, res) => {
  console.log(req.body.qty)
  const userID = req.params.userID
  const productID = req.params.productID
  const qty = req.body.qty
  res.json(await addSavedProduct(userID, productID, qty))
})

router.patch('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  res.json(await decreaseSavedProducts(userID, productID))
})

router.delete('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  res.json(await deleteSavedProducts(userID, productID))
})

module.exports = router
