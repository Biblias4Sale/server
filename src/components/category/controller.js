const store = require('./store')

const getAllCategories = async () => {
  // const data = await store.getAllCategories()
  // const response = data.map(object => {
  //   const category = {
  //     name: object.dataValues.name,
  //     id: object.dataValues.id
  //   }
  //   return category
  // })
  // return response
  const response = await store.getAllCategories()
  return (response.map(object => object.dataValues.name))
}

const addCategory = async (newCategory) => await store.addCategory(newCategory)

const addSubCategory = async (category, subCategory) => await store.addSubCategory(category, subCategory)

const getAllSubCategories = async (cat) => {
  const response = await store.getAllSubCategories(cat)
  const resp = response.map(object => object.dataValues.name)

  return resp
}

module.exports = {
  getAllCategories,
  addCategory,
  addSubCategory,
  getAllSubCategories
}

// producto:{
//   name:'asdasd',
//   id:'asdsadsd',
//   category:{
//     name:['asdasdds'],
//     subCategory:{
//       name:'asdsad'
//     }
//   }
// }
// producto.category.subcatory.name

// proucto:{
//   name:'asdsad',
//   id:'1',
//   category:[],
//   subcategory:'asdasd'
// }
// producto.subcatory


// mariano 3
// parma: 6,
// diego: 4,
// lina: 2,
// nacho: 2,
// andres: 1
