const store = require('./store')

const settingsMarketing = async (settings) => {
  try {
    return await store.settingsMarketing(settings)
  } catch (error) {
    return error
  }
}

module.exports = {
  settingsMarketing
}
