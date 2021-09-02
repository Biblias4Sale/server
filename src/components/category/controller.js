const store = require('./store')

const getAll = () => {
  return store.getAll()
}

module.exports = {
  getAll
}
