const store = require('./store')

const settingsMarketing = async (settings) => {
  try {
    return await store.settingsMarketing(settings)
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  settingsMarketing
}
