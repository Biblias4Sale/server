const store = require('./store')

const getAll = () => {
  return store.getAll().map(lesson => {
    return (
      {
        id: lesson.id,
        name: lesson.name
      }
    )
  })
}

const getBest = (qty) => {
  return store
    .getAll()
    .slice()
    .sort((b, a) => a.points - b.points)
    .slice(0, qty)
}

const getDetail = (id) => {
  return store.findById(id)
}

module.exports = {
  getAll,
  getBest,
  getDetail
}
