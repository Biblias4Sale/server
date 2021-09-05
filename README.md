# Server
 
## host:
https://noiloan.herokuapp.com

## endpoints:

<hr>

- GET /categories >> todas las categorías
- POST /categories/add/  >> crea una nueva categoría (espera un name, por body)
- POST /categories/addSub >> crea una nueva subCategoría (espera category y subCategory por body)
- GET /categories/getSub/All >> todas las subCategorías
- GET /categories/getSub/:Category >> devuelve un array con todas las SubCategorías de esa Categoría

<hr>

- GET /products   >> lista todos los productos con algunas propiedades minimas
- GET /products/best/:n   >> los 'n' productos mejor puntuados
- GET /products/detail/:id   >> un producto por ID con todas sus propiedades
- POST /products >>> recibe por body un objeto con estas características:

- { 
-  "model": "SX100", 
- "brand": "Canon ",
- "img": "https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000",
- "description": "Una cámara linda", 
- "price": 800, "points": 5,
- "subCategory": "Semi-Reflex"
- } 

<hr>


- En server/Loader/dataStore.js Hay un objeto donde pueden agregar todos los productos que quieran, repitiendo el patrón de los productos que ya están creados. <<>, la Key subCategory tiene que tener una subCategoría EXISTENTE ( Las pueden encontrar en server/config.js )

<hr>