const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhOGYxNjU4MC0wZWQ4LTExZWMtYjlkOS1lOTYzNjAzMjgwNmYiLCJpYXQiOjE2MzA5MDg0MjUsImV4cCI6MTYzMDkxMjAyNX0.vrE85D03wjUn6Sk-fIk-bQ-cWU1xH-Wdsyh8Qi8CFu8'
  res.cookie('nToken', token, { maxAge: 900000, httpOnly: true })
  console.log('hi')
  res.json({ message: 'Nice' })
})

module.exports = router
