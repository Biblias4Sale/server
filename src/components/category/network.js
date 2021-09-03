const express = require('express')
const router = express.Router()
const { getAllCategories, addCategory, addSubCategory } = require('./controller')

router.get('/', async (req, res) => {
  res.json(await getAllCategories())
})

router.post('/add/:newCategory', async (req, res) => {
  res.json(await addCategory(req.params.newCategory))
})

router.post('/addSub', async (req, res) => {
  const { category, subCategory } = req.body
  res.json(await addSubCategory(category, subCategory))
})

module.exports = router
