const { Marketing } = require('../db')

const settingsMarketingLoader = async () => {
  try {
    const number = await Marketing.findAndCountAll()
    if (number.count === 0) {
      await Marketing.create()
      console.log('DB filled with Marketing Settings')
    }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  settingsMarketingLoader
}
