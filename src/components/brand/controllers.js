const store = require('./store')

const newBrand = async (name) => store.newBrand(name)

const getBrandByName = async (name) => {
  const brandByName = await store.getBrandByName(name)
  return brandByName
}
const getAllBrands = async () => {
  const allBrands = await store.getAllBrands()
  console.log(allBrands)
  return allBrands
}

module.exports = {
  newBrand,
  getBrandByName,
  getAllBrands
}
