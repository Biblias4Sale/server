const  cloudinary  = require('.././cloudinary/cloudinary')



const cb = (response) => {
    return response
  } 


const imgUploader = async (uploadFiles, type) => {
//     let responseArr = []
//     if (type === 'products'){
//         responseArr = await uploadFiles.map((file) => {
//           cloudinary.uploader.upload(
//           file, {
//               async: false,
//               upload_preset: 'product_imgs'
//           }, (error, response) = () => {
//             if(response){
//                 responseArr.push(response)
//                 return responseArr
//             }
//             if(error){
//                 console.log(error)
//             }
//         }) 
//     })
//     console.log(responseArr) 
// }
// console.log(responseArr.length)
// return responseArr  
}

module.exports = { imgUploader }