const store = require('./store')

const getSettingMarketing = async () => {
  try {
    return await store.getSettingMarketing()
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
  getSettingMarketing,
  settingsMarketing
}
