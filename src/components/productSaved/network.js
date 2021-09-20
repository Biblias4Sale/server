
const express = require('express')
const router = express.Router()
const { addSavedProduct, getSavedProducts, decreaseSavedProducts, deleteSavedProducts } = require('./controller')
const response = require('../../responses')

router.get('/:userID', async (req, res) => {
  const userID = req.params.userID
  // res.json(await getSavedProducts(userID))
  getSavedProducts(userID)
    .then(message => response.success(req, res, 200, message))
    .catch(error => response.error(req, res, 400, error, 'no se pudo obtener los productos del usuario'))
})

router.post('/:userID/:productID', (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  const qty = req.body.qty
  // res.json(await addSavedProduct(userID, productID, qty))
  addSavedProduct(userID, productID, qty)
    .then(message => response.success(req, res, 201, message))
    .catch(error => response.error(req, res, 400, error, 'No se pudo agregar el producto'))
})

router.patch('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  // res.json(await decreaseSavedProducts(userID, productID))
  decreaseSavedProducts(userID, productID)
    .then(message => response.success(req, res, 201, message))
    .catch(error => response.error(req, res, 400, error, 'No se pudo quitar el producto'))
})

router.delete('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  // res.json(await deleteSavedProducts(userID, productID))
  deleteSavedProducts(userID, productID)
    .then(message => response.success(req, res, 201, message))
    .catch(error => response.error(req, res, 400, error, 'No se pudo eliminar el producto'))
})

module.exports = router
