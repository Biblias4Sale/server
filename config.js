require('dotenv').config()

const { DB_PG_USER, DB_PG_PASSWORD, DB_PG_HOST, DB_PG_PORT, DB_PG_DATABASE, DATABASE_URL } = process.env
const Environment = process.env.NODE_ENV

const config = {
  alter: true,
  force: false,
  categoriesList: ['Accesorios', 'Camaras', 'Lentes', 'Luces', 'Cargadores y baterías'],
  subCategoryCamaras: ['Reflex', 'Mirrorless', 'Compacta', 'Semi-Reflex'],
  subCategoryLentes: ['Zoom', 'Fijo'],
  subCategoryAccesorios: ['Filtros', 'Protectores', 'Cuidado y Limpieza'],
  subCategoryLuces: ['Flashes', 'Iluminadores Led', 'Modificadores'],
  subCategoryCargaYbat: ['Original', 'Alternativo'],

  frontEndHost: () => {
    return Environment === 'production' ? 'https://noiloan.web.app' : 'http://localhost:3000'
  },

  connectionString: () => {
    return Environment === 'production' ? DATABASE_URL : `postgres://${DB_PG_USER}:${DB_PG_PASSWORD}@${DB_PG_HOST}:${DB_PG_PORT}/${DB_PG_DATABASE}`
  }
}

module.exports = config
