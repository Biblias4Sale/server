const express = require('express')
const router = express.Router()
const { addSavedProduct, getSavedProducts, removeSavedProducts } = require('./controller')

router.get('/:userID', async (req, res) => {
  const userID = req.params.userID
  res.json(await getSavedProducts(userID))
})

router.post('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  res.json(await addSavedProduct(userID, productID))
})

router.delete('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  res.json(await removeSavedProducts(userID, productID))
})

module.exports = router
