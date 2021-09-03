# Server
 
## host:
https://noiloan.herokuapp.com

## endpoints:

- GET /category >> todas las categorías
- POST /category/add/  >> crea una nueva categoría (espera un name, por body)
- POST /category/addSub >> crea una nueva subCategoría (espera un category_name y subCategory name por body)
- GET /category/getSub >> todas las subCategorías

- /product   >> lista todos los productos con algunas propiedades minimas
- /product/best/:n   >> los 'n' productos mejor puntuados
- /product/detail/:id   >> un producto por ID con todas sus propiedades
