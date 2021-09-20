const { Marketing } = require('../db')

const mailCreateAccount = async () => {
  console.log('hola')
  const option = await Marketing.findByPk(1)
  return option.mailCreateAccount
}

const smsCreateAccount = async () => {
  const option = await Marketing.findByPk(1)
  return option.smsCreateAccount
}

const mailConfirmCart = async () => {
  const option = await Marketing.findByPk(1)
  return option.mailConfirmCart
}

const smsConfirmCart = async () => {
  const option = await Marketing.findByPk(1)
  return option.smsConfirmCart
}

const mailConfirmed = async () => {
  const option = await Marketing.findByPk(1)
  return option.mailConfirmed
}

const smsConfirmed = async () => {
  const option = await Marketing.findByPk(1)
  return option.smsConfirmed
}

const mailDispatched = async () => {
  const option = await Marketing.findByPk(1)
  return option.mailDispatched
}

const smsDispatched = async () => {
  const option = await Marketing.findByPk(1)
  return option.smsDispatched
}

const mailDelivered = async () => {
  const option = await Marketing.findByPk(1)
  return option.mailDelivered
}

const smsDelivered = async () => {
  const option = await Marketing.findByPk(1)
  return option.smsDelivered
}

const mailCanceled = async () => {
  const option = await Marketing.findByPk(1)
  return option.mailCanceled
}

const smsCanceled = async () => {
  const option = await Marketing.findByPk(1)
  return option.smsCanceled
}

module.exports = {
  mailCreateAccount,
  smsCreateAccount,
  mailConfirmCart,
  smsConfirmCart,
  mailConfirmed,
  smsConfirmed,
  mailDispatched,
  smsDispatched,
  mailDelivered,
  smsDelivered,
  mailCanceled,
  smsCanceled
}
