const express = require('express')
const { newBrand, getBrandByName, getAllBrands } = require('./controllers')
const router = express.Router()
const responses = require('../../responses')

router.get('/', async (req, res) => {
  if (req.query.name) {
    return res.send(await getBrandByName(req.query.name))
  }
  return res.send(await getAllBrands())
})

router.post('/', (req, res) => {
  const { name } = req.body
  newBrand(name)
    .then(message => responses.success(req, res, 201, message))
    .catch(error => responses.error(req, res, 400, error, 'No se pudo agregar la marca'))
})

module.exports = router
