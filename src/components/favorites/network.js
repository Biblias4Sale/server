const express = require('express')
const router = express.Router()
const { addFav, getFavs, removeFav } = require('./controller')
const response = require('../../responses')

router.get('/:user', async (req, res) => {
  const user = req.params.user
  getFavs(user)
    .then(message => response.success(req, res, 200, message))
    .catch(error => response.error(req, res, 404, error, 'No se pudo obtener los favoritos del usuario'))
})

router.post('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID
  addFav(userID, productID)
    .then(message => response.success(req, res, 201, message))
    .catch(error => response.error(req, res, 400, error, 'No se pudo agregar el producto a favoritos'))
})

router.delete('/:userID/:productID', async (req, res) => {
  const userID = req.params.userID
  const productID = req.params.productID

  removeFav(userID, productID)
    .then(message => response.success(req, res, 201, message))
    .catch(error => response.error(req, res, 400, error, 'No se pudo quitar de favoritos'))
})

module.exports = router
