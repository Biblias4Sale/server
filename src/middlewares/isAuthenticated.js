const isAuthenticated = (req, res, next) => {
  console.log('aca')
  console.log(req.user)
  console.log('arriba')
  if (req.user) {
    console.log('entra')
    next()
  } else {
    res.status(401).send('You must login first!')
  }
}

module.exports = {
  isAuthenticated
}
