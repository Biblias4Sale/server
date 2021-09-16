const store = require('./store')

const addFav = async (user, prod) => {
  const response = await store.addFav(user, prod)
  return response
}

const getFavs = async (user) => {
  const response = await store.getFavs(user)
  return response
}

const removeFav = async (user, productID) => {
  const response = await store.removeFav(user, productID)
  return response
}

module.exports = {
  addFav,
  getFavs,
  removeFav
}
