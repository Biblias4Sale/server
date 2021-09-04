# Server
 
## host:
https://noiloan.herokuapp.com

## endpoints:

- GET /categories >> todas las categorías
- POST /categories/add/  >> crea una nueva categoría (espera un name, por body)
- POST /categories/addSub >> crea una nueva subCategoría (espera category y subCategory por body)
- GET /categories/getSub >> todas las subCategorías

- /products   >> lista todos los productos con algunas propiedades minimas
- /products/best/:n   >> los 'n' productos mejor puntuados
- /products/detail/:id   >> un producto por ID con todas sus propiedades
- Ojo con Jira, cuando trabajen en una funcionalidad, recuerden crear la historia y que quede vinculada a la historia de usuario