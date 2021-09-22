
const products = [
  {
    name: 'Canon EOS M200 kit 15-45mm + 16gb',
    brand: 'Canon',
    model: 'EOS M200',
    img: 'https://www.perozzi.com.ar/23767-large_default/canon-camara-fotografica-eos-m200-15-45-04201933.jpg',
    description: '24,1mp Sensor de tamaño APS-C Vídeos 4K Conexión Bluetooth y Wi-Fi Pantalla táctil abatible Vídeos time-lapse',
    price: 104000,
    points: 4,
    subCategory: 'Reflex',
    stock: 10
  },
  {
    name: 'Canon EOS M50 Mark II kit 15-45mm',
    brand: 'Canon',
    model: 'EOS M50 Mark II',
    img: 'https://http2.mlstatic.com/D_NQ_NP_971032-MLA40041740402_122019-O.webp',
    description: 'Procesador de imagen DIGIC 8 Sensor CMOS (APS-C) de 24.1 megapíxeles ISO 100-25600 (H: 51200)  Vídeo 4K UHD de 24p y HD de 120p para cámara lenta Pantalla táctil LCD de ángulo variable  Conexión Wi-Fi y Bluetooth',
    price: 104999,
    points: 5,
    subCategory: 'Reflex',
    stock: 12
  },
  {
    name: 'Nikon Z7 kit 24-70mm',
    brand: 'Nikon',
    model: 'Z7 kit 24-70mm',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2019/11/1765_3_z.jpg',
    description: 'El Kit Nikon Z7 + 24-70mm f4 S es una combinación muy versatil aprovecha al máximo el sistema de estabilización de 5 ejes integrado en o para maximizar la captura de luz y obtener una nitidez superior en todas tus fotografías.',
    price: 689000,
    points: 1,
    subCategory: 'Reflex',
    stock: 9
  },
  {
    name: 'Canon Powershot SX420',
    brand: 'Canon',
    model: 'Powershot SX420',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2020/06/sx420.jpeg',
    description: '20.0 mpx Procesador digic 4+ (+rápido y +calidad) Zoom 42x (24-1008 mm) Pantalla 3.0” VIDEO 720p HD Af de alta velocidad Estabilizador de imagen Modo auto inteligente',
    price: 51000,
    points: 3,
    subCategory: 'Semi-Reflex',
    stock: 6
  },
  {
    name: 'Canon Powershot SX540HS',
    brand: 'Canon',
    model: 'SX540HS',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2020/06/sx540.jpg',
    description: `20.3 mpx Procesador digic 6 (+rápido y +calidad) Zoom 50x (24-1200 mm) Pantalla 3.0” VIDEO 1080p fHD
    Af de alta velocidad Estabilizador de imagen Modo auto inteligente Modo hibrido automático Controles Manuales`,
    price: 64000,
    points: 2,
    subCategory: 'Semi-Reflex',
    stock: 15
  },
  {
    name: 'Lente Canon EF 100mm f/2.8L Macro IS USM',
    brand: 'Canon',
    model: '100mm f/2.8L Macro IS USM',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2019/09/macro.jpg',
    description: `MOTOR PARA EL AF USM de anillo ÁNGULO DE VISIÓN 20°, 14°, 24° (horizontal, vertical, diagonal)
     PARA EL AF, NOTA AL PIE AF Enfoque continuo manual ABERTURA MÍNIMA 32 CONSTRUCCIÓN DEL OBJETIVO (ELEMENTOS/GRUPOS) 15/12 INFORMACIÓN DE LA DISTANCIA Sí AMPLIACIÓN 1`,
    price: 294000,
    points: 2,
    subCategory: 'Zoom',
    stock: 17
  },
  {
    name: 'Lente Nikon AF-P 70-300mm f/4.5-6.3G ED VR',
    brand: 'Nikon',
    model: 'AF-P 70-300mm f/4.5-6.3G ED VR',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2017/01/70-300.jpg',
    description: `Este objetivo es compatible con las cámaras de la serie D3000 a partir de la D3300
     de la serie D7000 a partir de la D7100 en adelante. También es compatible con la D500. Tenga en cuenta
     que es posible que las cámaras compatibles requieran una actualización del firmware.`,
    price: 52000,
    points: 1,
    subCategory: 'Zoom',
    stock: 18
  },
  {
    name: 'Lente Canon EF 75-300mm f/4-5.6 III',
    brand: 'Canon',
    model: 'EF 75-300mm f/4-5.6 III',
    img: 'https://http2.mlstatic.com/D_NQ_NP_737723-MLA45295416537_032021-O.webp',
    description: `Teleobjetivo zoom de precio asequible Motor de autoenfoque DC Revestimientos Súper Spectra
    Diseño ligero Tamaño de filtro de 58 mm Distancia mínima de enfoque de 1,5 m`,
    price: 37000,
    points: 1,
    subCategory: 'Zoom',
    stock: 20
  },
  {
    name: 'Lente Nikon AF-S 50mm f/1.8G',
    brand: 'Nikon',
    model: 'AF-S 50mm f/1.8G',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2015/07/50-1.8g.png',
    description: 'Distancia Focal 50mm Formato FX/35mm Apertura máxima f/1.8 Dimensiones aproximadas 72.1mm x 52.4mm (diametro x longitud) Peso 185 grs Apertura mínima f/16 Angulo de visión máximo (Formato Fx) 47° Angulo de visión máximo (Formato Dx) 31.30°´',
    price: 437000,
    points: 4,
    subCategory: 'Fijo',
    stock: 17
  },
  {
    name: 'Nikon D780 Body',
    brand: 'Nikon',
    model: 'D780',
    img: 'https://www.digi-zoom.com.ar/images/productos/1979_1_z.jpg',
    description: 'Sensor CMOS BSI de formato FX de 24.5MP Vídeo UHD 4K30; Salida N-Log y HDMI de 10 bit Sistema AF Multi-CAM 3500 II de 51 puntos',
    price: 437000,
    points: 1,
    subCategory: 'Reflex',
    stock: 7
  },
  {
    name: 'Nikon D7500 (18-140 mm f/3.5-5.6 G ED VR)',
    brand: 'Nikon',
    model: 'D7500',
    img: 'https://www.digi-zoom.com.ar/images/productos/1398_1_z.jpg',
    description: '',
    price: 247000,
    points: 3,
    subCategory: 'Reflex',
    stock: 4
  },
  {
    name: 'Canon EOS Rebel T6/1300D (18-55 mm III)',
    brand: 'Canon',
    model: ' Rebel T6/1300D',
    img: 'https://www.digi-zoom.com.ar/images/productos/1092_1_z.jpg',
    description: 'Sensor CMOS 18MP APS-C Procesador de imagen DIGIC 4+ Monitor LCD 3.0 920k-Dot Grabación de video Full HD 1080p a 30 fps',
    price: 102000,
    points: 2,
    subCategory: 'Reflex',
    stock: 0
  },
  {
    name: 'Canon EOS Rebel Kit T7 18-55mm III DSLR color negro',
    brand: 'Canon',
    model: 'Rebel',
    img: 'https://http2.mlstatic.com/D_NQ_NP_707440-MLA41971755145_052020-O.webp',
    description: 'El visor réflex permite obtener una perspectiva realista y tomar fotografías increíbles con resultados más a tu creatividad y controlar diferentes parámetros para tomar la fotografía perfecta.',
    price: 78127,
    points: 1,
    subCategory: 'Reflex',
    stock: 25
  },
  {
    model: 'SX100',
    brand: 'Canon',
    img: 'https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000',
    description: 'Una cámara linda',
    price: 80000,
    points: 5,
    subCategory: 'Semi-Reflex',
    stock: 30
  },

  {
    name: 'Sony a6000 + 18-55mm',
    brand: 'Sony',
    model: 'a6000',
    img: 'https://jet-web.s3.us-west-1.amazonaws.com/images/catalog/pro_59056954_4.webp',
    description: 'El visor réflex permite obtener una perspectiva realista y tomar fotografías increíbles con resultados más exactos gracias a la posibilidad de intercambiar objetivos.',
    price: 189000,
    points: 3,
    subCategory: 'Mirrorless',
    stock: 14
  },
  {
    name: 'Sony Ilce-7m3 7miii Kit Lente 28-70mm',
    brand: 'Sony',
    model: 'Ilce-7m3',
    img: 'https://http2.mlstatic.com/D_NQ_NP_629912-MLA31353353879_072019-O.webp',
    description: 'Sensor CMOS BSI de formato FX de 24.5MP Vídeo UHD 4K30; Salida N-Log y HDMI de 10 bit Sistema AF Multi-CAM 3500 II ',
    price: 245000,
    points: 5,
    subCategory: 'Mirrorless',
    stock: 15
  },
  {
    name: 'Neewer TT560 Flash Speedlite',
    brand: 'Powerextra',
    model: '2.4G Wireless Flash',
    img: 'https://m.media-amazon.com/images/I/61q-kYsRKEL._AC_SL1280_.jpg',
    description: 'Powerextra LCD Display Flash Speedlite, 2.4G Wireless Flash Trigger Transmitter Kit for CA Nikon Pentax Panasonic Olympus and Sony DSLR Camera, Digital Cameras with Standard Hot Shoe',
    price: 11900,
    points: 4,
    subCategory: 'Flashes',
    stock: 0
  },
  {
    name: 'High-Speed Sync 1/8000s Li-ion Battery Camera Flash Speedlite Light',
    brand: 'Godox ',
    model: 'V860II-F TTL GN60',
    img: 'https://m.media-amazon.com/images/I/51ngO3AmQiL._AC_SL1000_.jpg',
    description: 'Godox V860II-F TTL GN60 2.4G High-Speed Sync 1/8000s Li-ion Battery Camera Flash Speedlite Light Compatible for Fujifilm Camera with 15x17cm Softbox & Filter &USB LED',
    price: 35000,
    points: 5,
    subCategory: 'Flashes',
    stock: 20
  },
  {
    name: 'NW550 Camera Flash Speedlite',
    brand: 'Neewer',
    model: 'NW550',
    img: 'https://m.media-amazon.com/images/I/71DlRl4LEHL._AC_SL1500_.jpg',
    description: 'Neewer NW550 Camera Flash Speedlite, Compatible with Canon Nikon Panasonic Olympus Pentax, Sony with Mi Hot Shoe and Other DSLRs and Mirrorless Cameras with Standard Hot Shoe',
    price: 7000,
    points: 2,
    subCategory: 'Flashes',
    stock: 23
  },
  {
    name: 'MEIKE 320S Mini TTL Speedlite Automatic',
    brand: 'MEIKE',
    model: '320S Mini ',
    img: 'https://blog.foto24.com/wp-content/uploads/2017/08/mk-320_7.png',
    description: 'Neewer NW550 Camera Flash Speedlite, Compatible with Canon Nikon Panasonic Olympus Pentax, Sony with Mi Hot Shoe and Other DSLRs and Mirrorless Cameras with Standard Hot Shoe',
    price: 8500,
    points: 3,
    subCategory: 'Flashes',
    stock: 23
  },
  {
    name: 'TTL GN36 Wireless Speedlite Flash',
    brand: 'Godox',
    model: 'EACHSHOT TT350S',
    img: 'https://m.media-amazon.com/images/I/41U-yjaOjQL._AC_.jpg',
    description: 'EACHSHOT Godox TT350S 2.4G HSS 1/8000s TTL GN36 Wireless Speedlite Flash for Sony Mirrorless DSLR A7 A7R A7S A7-II A7-III A7R-II A7R-III A7S-II A6300 A6000 w/Color Filter',
    price: 14400,
    points: 4,
    subCategory: 'Flashes',
    stock: 35
  },
  {
    name: 'High Power Infrared LED Lights',
    brand: 'ICAMI',
    model: 'IR Illuminators 96',
    img: 'https://m.media-amazon.com/images/I/71s3utXXU6L._AC_SL1500_.jpg',
    description: 'ICAMI IR Illuminators 96pcs,High Power Infrared LED Lights for Camera',
    price: 8000,
    points: 3,
    subCategory: 'Iluminadores Led',
    stock: 27
  },
  {
    name: 'Illuminator 8-Led Infrared Light',
    brand: 'JC',
    model: 'IR Illuminators',
    img: 'https://m.media-amazon.com/images/I/61hAItJPWML._AC_SL1200_.jpg',
    description: 'JC IR Illuminator 8-Led Infrared Light Wide Angle 90°with Power Adapter for CCTV and IP Cameras',
    price: 9800,
    points: 4,
    subCategory: 'Iluminadores Led',
    stock: 13
  },
  {
    name: 'LED Video Light and Stand Lighting Kit',
    brand: 'Neewer',
    model: 'Bi-Color 480 LED',
    img: 'https://m.media-amazon.com/images/I/71+6TnrbygL._AC_SL1500_.jpg',
    description: 'Neewer 2 Packs Dimmable Bi-Color 480 LED Video Light and Stand Lighting Kit Includes: 3200-5600K CRI 96+ LED Panel with U Bracket, 75 inches Light Stand for YouTube Studio Photography, Video Shooting',
    price: 21000,
    points: 5,
    subCategory: 'Iluminadores Led',
    stock: 15
  },
  {
    name: 'IR Illuminator',
    brand: 'IR',
    model: '850nm 6-LED IR Illuminators',
    img: 'https://m.media-amazon.com/images/I/71+6TnrbygL._AC_SL1500_.jpg',
    description: 'IR Illuminator,850nm 6-LED IR Illuminators,Ir Lights for Security Cameras,Long Range Infrared Light,Outdoor Infrared Illuminator for CCTV IP Camera Night Vision,Ir Floodlight Wide Angle Ir Light',
    price: 6000,
    points: 2,
    subCategory: 'Iluminadores Led',
    stock: 30
  },
  {
    name: 'Ultra High Power Panel Digital Camera',
    brand: 'IR',
    model: '160 LED CN-160',
    img: 'https://m.media-amazon.com/images/I/81zzhw6KrAL._AC_SL1500_.jpg',
    description: 'NEEWER 160 LED CN-160 Dimmable Ultra High Power Panel Digital Camera / Camcorder Video Light, LED Light for Canon, Nikon, Pentax, Panasonic,SONY, Samsung and Olympus Digital SLR Cameras',
    price: 11300,
    points: 3,
    subCategory: 'Iluminadores Led',
    stock: 25
  },
  {
    name: 'LED Video Light, Portable Camera Photo Light Panel',
    brand: 'VILTROX',
    model: 'VL-162T CRI95+',
    img: 'https://m.media-amazon.com/images/I/81zzhw6KrAL._AC_SL1500_.jpg',
    description: 'VILTROX VL-162T CRI95+ LED Video Light, Portable Camera Photo Light Panel Dimmable for DSLR Camera Camcorder with Battery, Charger, High Brightness, 3300K-5600K Bi-Color, White Filter and LCD Display',
    price: 20600,
    points: 4,
    subCategory: 'Iluminadores Led',
    stock: 17
  },
  {
    name: 'Standard Reflector Diffuser Lamp Shade ',
    brand: 'Soonpho',
    model: 'Soonpho 7',
    img: 'https://m.media-amazon.com/images/I/717XORMkKgL._AC_SL1000_.jpg',
    description: 'Soonpho 7" Standard Reflector Diffuser Lamp Shade Dish with 10° /30°/ 50° Degree Honeycomb Grid White Soft Cloth for Bowens Mount Studio Strobe Flash Light Speedlite',
    price: 7200,
    points: 4,
    subCategory: 'Modificadores',
    stock: 30
  },
  {
    name: 'Mountdog Photography Reflector with Clip 24 Inches',
    brand: 'Mountdog',
    model: 'Mountdog-x',
    img: 'https://m.media-amazon.com/images/I/51RdcFYbuZL._AC_SL1000_.jpg',
    description: 'Mountdog Photography Reflector with Clip 24 Inches/ 60cm 5 in 1 Photo Light Collapsible Diffuser with Bag & Reflector Holder for Studio Photography Outdoor Lighting Translucent Silver Gold White Black',
    price: 990,
    points: 3,
    subCategory: 'Modificadores',
    stock: 35
  },
  {
    name: 'Bowens Mount Softbox',
    brand: 'Bowens',
    model: 'Bowens-xxx',
    img: 'https://m.media-amazon.com/images/I/71BJLdp3H8S._AC_SL1500_.jpg',
    description: 'Bowens Mount Softbox, 25 inch Umbrella Octagon Softbox Reflector with Carrying Bag, for Speedlite Studio Flash Monolight Portrait and Product Photography',
    price: 18800,
    points: 5,
    subCategory: 'Modificadores',
    stock: 17
  },
  {
    name: 'HPUSN Softbox Lighting Kit',
    brand: 'HPUSN',
    model: 'HPUSN 3300',
    img: 'https://m.media-amazon.com/images/I/71Hkk8shljS._AC_SL1500_.jpg',
    description: 'HPUSN Softbox Lighting Kit 2x76x76cm Photography Continuous Lighting System Photo Studio Equipment with 2pcs E27 Socket 85W 5400K Bulbs for Portrait Product Fashion Photography',
    price: 23100,
    points: 5,
    subCategory: 'Modificadores',
    stock: 15
  },
  {
    name: 'ICOE Softbox Lighting Kit Photography',
    brand: 'YICOE',
    model: 'YICOE 3.0',
    img: 'https://m.media-amazon.com/images/I/71dDC+zt3pL._AC_SL1500_.jpg',
    description: 'YICOE Softbox Lighting Kit Photography Photo Studio Equipment Continuous Lighting System with 5700K Energy Saving Light Bulb for Portraits Fashion, Advertising Photo Shooting YouTube Video',
    price: 24900,
    points: 4,
    subCategory: 'Modificadores',
    stock: 12
  },
  {
    name: 'Neewer 2-Pack Dimmable 5600K USB LED Video Light with Adjustable Tripod',
    brand: 'Neewer',
    model: 'Neewer 5600',
    img: 'https://m.media-amazon.com/images/I/619GKUSuxCL._AC_SL1500_.jpg',
    description: 'Neewer 2-Pack Dimmable 5600K USB LED Video Light with Adjustable Tripod Stand and Color Filters for Tabletop/Low-Angle Shooting, Zoom/Video Conference Lighting/Game Streaming/YouTube Video Photography',
    price: 5100,
    points: 2,
    subCategory: 'Modificadores',
    stock: 18
  }

]

module.exports = { products }
