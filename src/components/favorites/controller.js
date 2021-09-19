const store = require('./store')

const addFav = async (user, prod) => store.addFav(user, prod)

const getFavs = async (user) => store.getFavs(user)

const removeFav = (user, productID) => store.removeFav(user, productID)

module.exports = {
  addFav,
  getFavs,
  removeFav
}
