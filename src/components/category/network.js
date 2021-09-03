const express = require('express')
const router = express.Router()
const { getAllCategories, addCategory } = require('./controller')

router.get('/', async (req, res) => {
  res.json(await getAllCategories())
})

router.post('/add/:newCategory', async (req, res) => {
  res.json(await addCategory(req.params.newCategory))
})

module.exports = router
