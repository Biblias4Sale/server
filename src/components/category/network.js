const express = require('express')
const router = express.Router()
const { getAllCategories, addCategory, addSubCategory, getAllSubCategories } = require('./controller')

router.get('/', async (req, res) => {
  res.json(await getAllCategories())
})

router.post('/add', async (req, res) => {
  res.json(await addCategory(req.body.name))
})

router.post('/addSub', async (req, res) => {
  const { category, subCategory } = req.body
  res.json(await addSubCategory(category, subCategory))
})

router.get('/getSub/:cat', async (req, res) => {
  res.json(await getAllSubCategories(req.params.cat))
})

module.exports = router
