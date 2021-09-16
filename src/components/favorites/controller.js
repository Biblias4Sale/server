const store = require('./store')

const addFav = async (user, prod) => {
  const response = await store.addFav(user, prod)
  return response
}

module.exports = {
  addFav
}
