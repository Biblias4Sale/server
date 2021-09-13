const express = require('express')
const router = express.Router()
const { getAllCategories, addCategory, addSubCategory, getAllSubCategories } = require('./controller')

router.get('/', async (req, res) => {
  res.json(await getAllCategories())
})

router.post('/add', async (req, res) => {
  console.log(req.body)
  res.json(await addCategory(req.body.name))
})

router.get('/getSub', async (req, res) => {
  res.json(await getAllSubCategories('All'))
})

router.post('/addSub', async (req, res) => {
  const { category, subCategory } = req.body
  const response = await addSubCategory(category, subCategory)
  res.json(response)
})

router.get('/getSubParams/:cat', async (req, res) => {
  if (!req.params.cat) res.json('Debes agregar un Categoría')
  res.json(await getAllSubCategories(req.params.cat))
})

module.exports = router
