require('dotenv').config()

const isProduction = process.env.NODE_ENV === 'production'

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
    return isProduction ? 'https://noiloan.web.app' : 'http://localhost:3000'
  }
}

module.exports = config
