const express = require('express')
const router = express.Router()
const { addSavedProduct, getSavedProducts, removeSavedProducts } = require('./controller')

router.post('/:user', async (req, res) => {
  const user = req.params.user
  const { productID } = req.body
  res.json(await addSavedProduct(user, productID))
})

router.get('/:user', async (req, res) => {
  const user = req.params.user
  res.json(await getSavedProducts(user))
})

router.post('/delete/:user', async (req, res) => { // << que sea un delete con params
  const user = req.params.user
  const { productID } = req.body
  res.json(await removeSavedProducts(user, productID))
})

module.exports = router
