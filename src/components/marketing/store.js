const { Marketing } = require('../../db')

const getSettingsMarketing = async () => {
  try {
    return await Marketing.findByPk(1)
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const settingsMarketing = async (settings) => {
  try {
    const options = await Marketing.findByPk(1)
    if (!options) return await Marketing.create(settings)
    options.mailCreateAccount = settings.mailCreateAccount
    options.smsCreateAccount = settings.smsCreateAccount
    options.mailConfirmCart = settings.mailConfirmCart
    options.smsConfirmCart = settings.smsConfirmCart
    options.mailConfirmed = settings.mailConfirmed
    options.smsConfirmed = settings.smsConfirmed
    options.mailDispatched = settings.mailDispatched
    options.smsDispatched = settings.smsDispatched
    options.mailDelivered = settings.mailDelivered
    options.smsDelivered = settings.smsDelivered
    options.mailCanceled = settings.mailCanceled
    options.smsCanceled = settings.smsCanceled

    return await options.save()
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getSettingsMarketing,
  settingsMarketing
}
