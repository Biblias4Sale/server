const { Brand } = require('../../db')

const getAllBrands = async () => {
  const allBrands = await Brand.findAll()
  return allBrands
}

const getBrandByName = async (name) => {
  const brand = await Brand.findOne({
    where: {
      name: name
    }
  })
  return brand
}

const newBrand = async (name) => {
  try {
    const exist = await Brand.findOne({
      where: {
        name: name
      }
    })
    if (exist === null) {
      const newBrand = await Brand.findOrCreate({
        where: {
          name: name
        }
      })
      return newBrand
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  newBrand,
  getBrandByName,
  getAllBrands
}
