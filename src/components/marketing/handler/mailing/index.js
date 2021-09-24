const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const mail = require('./handler')

const createAccount = ({ name, email }) => {
  sgMail
    .send(mail.createAccount(name, email))
    .then(() => { console.log('Email sent') })
    .catch((error) => { console.error(error) })
}

const confirmCart = ({ name, email }) => {
  sgMail
    .send(mail.confirmCart(name, email))
    .then(() => { console.log('Email sent') })
    .catch((error) => { console.error(error) })
}

const dispatchedOrder = ({ name, email }) => {
  sgMail
    .send(mail.confirmCart(name, email))
    .then(() => { console.log('Email sent') })
    .catch((error) => { console.error(error) })
}

const deliveredOrder = ({ name, email }) => {
  sgMail
    .send(mail.confirmCart(name, email))
    .then(() => { console.log('Email sent') })
    .catch((error) => { console.error(error) })
}

const canceledOrder = ({ name, email }) => {
  sgMail
    .send(mail.confirmCart(name, email))
    .then(() => { console.log('Email sent') })
    .catch((error) => { console.error(error) })
}

module.exports = {
  createAccount,
  confirmCart,
  dispatchedOrder,
  deliveredOrder,
  canceledOrder
}
