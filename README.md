# Server
 
## host:
https://noiloan.herokuapp.com

## endpoints:

<hr>

### LOGIN Y LOGOUT:

- POST /login >> Login con correo y contraseña, guarda token en cookie 
```javascript
req.body.email
req.body.password
```
- GET /logout >> Cierra sesión eliminando el token del navegador _**No recibe parametros**_
Debe venir la petición con `{ withCredentials: true }`

<hr>

### CATEGORÍAS:

- GET /categories >> todas las categorías
- POST /categories/add/  >> crea una nueva categoría (espera un name, por body)
```JSON 
-{ 
-"name" : "Camaras"
-}
```
- POST /categories/addSub >> crea una nueva subCategoría (espera category y subCategory por body)
```JSON 
-{ 
-"name" : "Camaras",
-"subCategory" : "Reflex"
-}
```
- GET /categories/getSub/All >> todas las subCategorías
- GET /categories/getSub/:Category >> devuelve un array con todas las SubCategorías de esa Categoría

<hr>

### PRODUCTOS:

- GET /products   >> lista todos los productos con algunas propiedades minimas
- GET /products/best/:n   >> los 'n' productos mejor puntuados
- GET /products/detail/:id   >> un producto por ID con todas sus propiedades
- POST /products >> recibe por BODY un objeto con estas características:
```JSON
- { 
-  "model": "SX100", 
- "brand": "Canon ",
- "img": "https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000",
- "description": "Una cámara linda", 
- "price": 800, "points": 5,
- "subCategory": "Semi-Reflex"
- } 
```
<br>

-PUT /products/edit >> Edita la información de un producto.
```JSON
- { 
-  "model": "SX100", 
- "brand": "Canon ",
- "img": "https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000",
- "description": "Una cámara linda", 
- "price": 800, "points": 5,
- "subCategory": "Semi-Reflex"
- } 
```

-GET /products/review devuelve un array reviews. (por el momento hardCoded)

<br>

<hr>

### USUARIOS:

- POST /user >> Crea una cuenta nueva
 ```javascript
req.body.name
req.body.lastName
req.body.email
req.body.password
```

<hr>

### ADMINISTRADOR:

- GET /admin >> Obtiene todos los usuarios _**No recibe parametros**_
- DELETE /admin >> Elimina un usuario 
 ```javascript
req.body.id
```
- PUT /admin >> Activa un usuario 
 ```javascript
req.body.id
```
- PUT /admin/resetpassword >> Resetea el password del usuario 
 ```javascript
req.body.id
```
- PUT /admin/resetpassword >> Cambia password del usuario
 ```javascript
req.body.id,
req.body.password
```

<hr>

<br>

<hr>  

En server/Loader/dataStore.js 
Hay un objeto donde pueden agregar todos los productos que quieran, repitiendo el patrón de los productos que ya están creados.
<<<CUIDADO>>, la Key subCategory tiene que tener una subCategoría EXISTENTE ( Las pueden encontrar en server/config.js )