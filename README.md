# Server

## host:

https://noiloan.herokuapp.com
**Todas las peticiones con sesión iniciada, deben traer el token en la variable _nToken_, la cual debe venir en el header**

## endpoints:

<hr>

### LOGIN Y LOGOUT:

- POST /login >> Login con correo y contraseña, guarda token en cookie

```javascript
req.body.email;
req.body.password;
```
**Retorna 1. Info del usuario - 2. Carrito - 3. Token**

- GET /logout >> Cierra sesión eliminando el token del navegador _**No recibe parametros**_
  Debe venir la petición con `{ withCredentials: true }`

<hr>

### CATEGORÍAS:

- GET /categories >> todas las categorías
- POST /categories/add/ >> crea una nueva categoría (espera un name, por body)

```JSON
-{
"name" : "Camaras"
}
```

- POST /categories/addSub >> crea una nueva subCategoría (espera category y subCategory por body)

```JSON
-{
"name" : "Camaras",
"subCategory" : "Reflex"
}
```

- GET /categories/getSub/All >> todas las subCategorías
- GET /categories/getSubParams/:Category >> devuelve un array con todas las SubCategorías de esa Categoría

<hr>

### PRODUCTOS:

- GET /products >> lista todos los productos con algunas propiedades minimas
- GET /products/best/:n >> los 'n' productos mejor puntuados
- GET /products/detail/:id >> un producto por ID con todas sus propiedades
- POST /products >> recibe por BODY un objeto con estas características:

```JSON
 {
"name":"Nacho",
"lastName": "Posta",
"email": "wasap@gmail.com",
"password": "asdqw.",
"cp": 666,
"address": "En la loma del orto",
"city": "Bahía Blanca",
"province": "Buenos Aires",
"phone": 291432562
 }
```

- PUT /deleteproducts >> Elimina productos

```JSON
{
  "idProducts": ["12", "17", "23", "24"]
}
```

- PUT /activateproducts >> Activa productos

```JSON
{
  "idProducts": ["12", "17", "23", "24"]
}
```

- PUT /changeprice >> Resta valor al precio

```JSON
//Si viene solo un id de producto, el valor debe ser en dinero
{
  "idProducts": ["12"],
  "value": 450
}

//Si vienen dos o más id de producto, el valor debe ser en porcentaje
{
  "idProducts": ["12", "17", "23", "24"],
  "value": 0.1
}
```

- PUT /activateproducts >> Activa productos

````JSON
{
  "idProducts": ["12", "17", "23", "24"]
}

-PUT /products/edit >> Edita la información de un producto.
```JSON
 {
  "model": "SX100",
 "brand": "Canon ",
 "img": "https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000",
 "description": "Una cámara linda",
 "price": 800, "points": 5,
 "subCategory": "Semi-Reflex"
 }
````

-GET /products/review devuelve un array reviews. (por el momento hardCoded)

<br>

<hr>

### USUARIOS:

- POST /user >> Crea una cuenta nueva

```javascript
req.body.name;
req.body.lastName;
req.body.email;
req.body.password;
```
**Retorna 1. Info del usuario - 2. Carrito - 3. Token**

- PUT /user/:id >> Editar información del usuario

```javascript
req.params.id;
req.body.name;
req.body.lastName;
req.body.email;
req.body.password;
```

- DELETE /user/:id >> Elimina usuario

```javascript
req.params.id;
```

<hr>

### CARRITO:

- GET /cart >> Obtiene un carrito

```javascript
req.params.id
```

<hr>

### ADMINISTRADOR:

- GET /admin >> Obtiene todos los usuarios _**No recibe parametros**_
  -POST /admin >> Crea un usuario

```javascript
req.body.name;
req.body.lastName;
req.body.email;
req.body.type;
```

- DELETE /admin >> Elimina un usuario

```javascript
req.params.id,
```

- PUT /admin/:id >> Activa un usuario

```javascript
req.params.id,
```

- PUT /admin/resetpassword >> Resetea el password del usuario

```javascript
req.params.id,
```

- PUT /admin/changepassword/:id >> Cambia password del usuario

```javascript
req.params.id,
req.body.password,
```

- PUT /admin/changetype/:id >> Cambia password del usuario

```javascript
req.params.id,
req.body.type,
```

- PUT /admin/csvadd >> Carga csv de usuarios

```javascript
req.params.id,
req.body.type,
```

- PUT /admin/csvget >> Descarga csv de usuarios

```javascript
req.params.id,
req.body.type,
```

<hr>

<br>

<hr>

En server/Loader/dataStore.js
Hay un objeto donde pueden agregar todos los productos que quieran, repitiendo el patrón de los productos que ya están creados.
<<<CUIDADO>>, la Key subCategory tiene que tener una subCategoría EXISTENTE ( Las pueden encontrar en server/config.js )
