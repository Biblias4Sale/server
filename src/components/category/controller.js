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
//   brand:{
//    name:'asdsadsa'
//   category:{
//     name:['asdasdds'],
//     subCategory:{
//       name:'asdsad'
//     }
//   }
// }
// producto.category.subcatory.name.asdas.das.das.sad.
// proucto:{
//   name:'asdsad',
//   id:'1',
//   category:[],
//   subcategory:'asdasd'
//   brand:'asdasds
//   review:'asdsad'
//   img:[i1, i2, i2]
// }
// producto.subcatory
// mariano 3
// parma: 5,
// diego: 4,
// lina: 2,
// nacho: 2,
// andres: 1





const obj = {
      model: 'SX100',
      brand: 'Canon ',
      img: 'https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000',
      description: 'Una cámara linda',
      price: 800,
      points: 5,
      subCategory: 'Semi-Reflex'
}

const pago = async () => {
  await axios.post("http://localhost3002/api/v1/mercadopago", {obj}, {withCredentials:true})
  console.log(response)
}