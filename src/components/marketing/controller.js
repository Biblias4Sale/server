const store = require('./store')

const getSettingsMarketing = async () => {
  try {
    return await store.getSettingsMarketing()
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const settingsMarketing = async (settings) => {
  try {
    return await store.settingsMarketing(settings)
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getSettingsMarketing,
  settingsMarketing
}
