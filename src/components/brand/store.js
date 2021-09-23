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

const newBrand = (name) => {
  const brand = Brand.findOne({ where: { name } })
    .then(brand => {
      if (brand === null) {
        Brand.create({ name })
          .then(brandCreated => {
            return brandCreated.name
          })
          .catch(e => { throw new Error(e.message) })
      } else {
        throw new Error(`${name} already exist`)
      }
    }).catch(e => { throw new Error(e.message) })

  return brand
}

module.exports = {
  newBrand,
  getBrandByName,
  getAllBrands
}
