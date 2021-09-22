require('dotenv').config()

const { DB_PG_USER, DB_PG_PASSWORD, DB_PG_HOST, DB_PG_PORT, DB_PG_DATABASE, DATABASE_URL } = process.env
const Environment = process.env.NODE_ENV

const config = {
  alter: true,
  force: true,
  categoriesList: ['Accesorios', 'Camaras', 'Lentes', 'Luces', 'Cargadores y baterías'],
  subCategoryCamaras: ['Reflex', 'Mirrorless', 'Compacta', 'Semi-Reflex'],
  subCategoryLentes: ['Zoom', 'Fijo'],
  subCategoryAccesorios: ['Filtros', 'Protectores', 'Cuidado y Limpieza'],
  subCategoryLuces: ['Flashes', 'Iluminadores Led', 'Modificadores'],
  subCategoryCargaYbat: ['Original', 'Alternativo'],
  reviews: [
    {
      user: 'Lina',
      points: 4,
      tittle: 'Muy Lindo',
      description: 'El producto tiene muchas luces, me encanta!',
      fecha: '07/09/2021'
    },
    {
      user: 'Diego',
      points: 5,
      tittle: 'Bacano',
      description: 'Es un producto que no deja de sorprenderme gratamente, estoy muy satisfecho con la compra que he realizado. Lo recomiendo ampliamente.',
      fecha: '16/08/2021'
    },
    {
      user: 'Andrés',
      points: 3,
      tittle: 'Cumple con lo justo',
      description: 'La verdad es que por el precio está muy bien, hay un mundo mejor pero es más caro',
      fecha: '16/08/2021'
    }
  ],

  frontEndHost: () => {
    return Environment === 'production'
      ? ['https://noiloan.web.app', 'https://noiloan-admin.web.app']
      : ['http://localhost:3000', 'http://localhost:3001']
  },

  connectionString: () => {
    return Environment === 'production' ? DATABASE_URL : `postgres://${DB_PG_USER}:${DB_PG_PASSWORD}@${DB_PG_HOST}:${DB_PG_PORT}/${DB_PG_DATABASE}`
  }
}

module.exports = config
