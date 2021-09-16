const express = require('express')
const router = express.Router()
const { addFav } = require('./controller')

router.post('/:user', async (req, res) => {
  const user = req.params.user
  const { productID } = req.body
  res.json(await addFav(user, productID))
})

module.exports = router
