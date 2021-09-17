const express = require('express')
const router = express.Router()
const { addFav, getFavs, removeFav } = require('./controller')

router.post('/:user', async (req, res) => {
  const user = req.params.user
  const { productID } = req.body
  res.json(await addFav(user, productID))
})

router.get('/:user', async (req, res) => {
  const user = req.params.user
  res.json(await getFavs(user))
})

router.delete('/:user/:id', async (req, res) => {
  const user = req.params.user
  const productID = req.params.id
  // const { productID } = req.body
  res.json(await removeFav(user, productID))
})
router.get('/', (req,res)=> {
  res.send('ok')
})

module.exports = router
