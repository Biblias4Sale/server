const express = require('express')
const router = express.Router()
const { getAll } = require('./controller')

router.get('/', (req, res) => {
  console.log('endpoint category')
  res.json(getAll())
})

module.exports = router
