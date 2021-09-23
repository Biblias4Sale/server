const store = require('./store')
// brand listo
const addFav = async (user, prod) => store.addFav(user, prod)

const getFavs = async (user) => {
  const data = await store.getFavs(user)
  const respuesta = data.map(obj => {
    return {
      id: obj.id,
      brand: obj.brand.name,
      model: obj.model,
      img: obj.img,
      price: obj.price,
      stock: obj.stock,
      rating: obj.rating
    }
  })
  return respuesta
}

const removeFav = (user, productID) => store.removeFav(user, productID)

module.exports = {
  addFav,
  getFavs,
  removeFav
}
