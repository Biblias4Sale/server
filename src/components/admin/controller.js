const fs = require('fs').promises
const parse = require('csv-parse/lib/sync')
const stringify = require('csv-stringify')
const path = require('path')
const bcryptjs = require('bcryptjs')
const store = require('./store')
const moment = require('moment')

const getOrders = async () => {
  const carts = await store.getOrders()
  const res = carts.map(cart => {
    const productSolds = cart.ProductSolds.map(product => {
      return {
        idProduct: product.product.id,
        price: product.price,
        qty: product.qty,
        brand: product.product.brand.name,
        model: product.product.model,
        img: product.product.img
      }
    })
    return {
      userId: cart.UserId,
      cartId: cart.id,
      status: cart.status,
      totalAmount: cart.totalAmount,
      productSolds,
      paymentPendingDate: moment(cart.paymentPending).format('YYYY-MM-DD HH:mm'),
      confirmationPending: moment(cart.confirmationPending).format('YYYY-MM-DD HH:mm'),
      preparationDate: moment(cart.preparationDate).format('YYYY-MM-DD HH:mm'),
      dispatchDate: moment(cart.dispatchDate).format('YYYY-MM-DD HH:mm'),
      deliveryDate: moment(cart.deliveryDate).format('YYYY-MM-DD HH:mm'),
      cancelDate: moment(cart.cancelDate).format('YYYY-MM-DD HH:mm')
    }
  })
  return res
}

const getUsers = async () => await store.getUsers()

const newUser = async ({ name, lastName, email, type = 'User' }) => {
  const salt = bcryptjs.genSaltSync()
  const user = {
    name,
    lastName,
    email,
    type,
    password: bcryptjs.hashSync(email, salt)
  }
  return await store.newUser(user)
}

const delUser = async (id) => await store.delUser(id)

const activateUser = async (id) => await store.activateUser(id)

const resetPassword = async (id) => await store.resetPassword(id)

const changePassword = async (id, password) => {
  const salt = bcryptjs.genSaltSync()
  const user = {
    id: id,
    password: bcryptjs.hashSync(password, salt)
  }
  return store.changePassword(user)
}

const changeType = async (id, type) => await store.changeType(id, type)

const csvToUsers = async () => {
  try {
    const fileContent = await fs.readFile(path.join(__dirname, '/users.csv'))
    const infoUser = parse(fileContent, { columns: true })
    const users = infoUser.map(user => {
      const salt = bcryptjs.genSaltSync()
      user.password = bcryptjs.hashSync(user.email, salt)
      return user
    })
    return store.csvToUsers(users)
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const usersToCSV = async () => {
  try {
    const users = await store.usersToCSV()
    console.log(users)
    stringify(users, {
      header: true
    }, function (err, output) {
      fs.writeFile(path.join(__dirname, '/usersList.csv'), output)
      console.log(err)
    })
    return 'Download list'
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getOrders,
  getUsers,
  newUser,
  delUser,
  activateUser,
  resetPassword,
  changePassword,
  changeType,
  csvToUsers,
  usersToCSV
}
