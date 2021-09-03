
const Categories = ['Camaras Digitales', 'Lentes', 'Iluminación', 'Accesorios']

const getAllCategories = () => {
  return Categories
}

const addCategory = (newCategory) => {
  Categories.push(newCategory)
}

module.exports = {
  getAllCategories,
  addCategory
}
