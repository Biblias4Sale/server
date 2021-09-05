
const products = [
  {
    name: 'Canon EOS M200 kit 15-45mm + 16gb',
    brand: 'Canon',
    model: 'EOS M200',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2020/06/canon_3699c009_eos_m200_mirrorless_digital_1508687.jpg',
    description: '24,1mp Sensor de tamaño APS-C Vídeos 4K Conexión Bluetooth y Wi-Fi Pantalla táctil abatible Vídeos time-lapse',
    price: 104000,
    points: 4,
    subCategory: 'Reflex'
  },
  {
    name: 'Canon EOS M50 Mark II kit 15-45mm',
    brand: 'Canon',
    model: 'EOS M50 Mark II',
    img: 'Canon EOS M50 Mark II kit 15-45mm',
    description: 'Procesador de imagen DIGIC 8 Sensor CMOS (APS-C) de 24.1 megapíxeles ISO 100-25600 (H: 51200)  Vídeo 4K UHD de 24p y HD de 120p para cámara lenta Pantalla táctil LCD de ángulo variable  Conexión Wi-Fi y Bluetooth',
    price: 104999,
    points: 5,
    subCategory: 'Reflex'
  },
  {
    name: 'Nikon Z7 kit 24-70mm',
    brand: 'Nikon',
    model: 'Z7 kit 24-70mm',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2019/11/1765_3_z.jpg',
    description: 'El Kit Nikon Z7 + 24-70mm f4 S es una combinación muy versatil aprovecha al máximo el sistema de estabilización de 5 ejes integrado en o para maximizar la captura de luz y obtener una nitidez superior en todas tus fotografías.',
    price: 689000,
    points: 1,
    subCategory: 'Reflex'
  },
  {
    name: 'Canon Powershot SX420',
    brand: 'Canon',
    model: 'Powershot SX420',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2020/06/sx420.jpeg',
    description: '20.0 mpx Procesador digic 4+ (+rápido y +calidad) Zoom 42x (24-1008 mm) Pantalla 3.0” VIDEO 720p HD Af de alta velocidad Estabilizador de imagen Modo auto inteligente',
    price: 51000,
    points: 3,
    subCategory: 'Semi-Reflex'
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
    subCategory: 'Semi-Reflex'
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
    subCategory: 'Zoom'
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
    subCategory: 'Zoom'
  },
  {
    name: 'Lente Canon EF 75-300mm f/4-5.6 III',
    brand: 'Canon',
    model: 'EF 75-300mm f/4-5.6 III',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2018/07/EF_75-300mm_f4-5.6_III_Default_tcm86-939770.jpg',
    description: `Teleobjetivo zoom de precio asequible Motor de autoenfoque DC Revestimientos Súper Spectra
    Diseño ligero Tamaño de filtro de 58 mm Distancia mínima de enfoque de 1,5 m`,
    price: 37000,
    points: 1,
    subCategory: 'Zoom'
  },
  {
    name: 'Lente Nikon AF-S 50mm f/1.8G',
    brand: 'Nikon',
    model: 'AF-S 50mm f/1.8G',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2015/07/50-1.8g.png',
    description: 'Distancia Focal 50mm Formato FX/35mm Apertura máxima f/1.8 Dimensiones aproximadas 72.1mm x 52.4mm (diametro x longitud) Peso 185 grs Apertura mínima f/16 Angulo de visión máximo (Formato Fx) 47° Angulo de visión máximo (Formato Dx) 31.30°´',
    price: 437000,
    points: 4,
    subCategory: 'Fijo'
  },
  {
    name: 'Nikon 780 Body',
    brand: 'Nikon',
    model: '780',
    img: 'https://www.digi-zoom.com.ar/images/productos/1979_1_z.jpg',
    description: 'Sensor CMOS BSI de formato FX de 24.5MP Vídeo UHD 4K30; Salida N-Log y HDMI de 10 bit Sistema AF Multi-CAM 3500 II de 51 puntos',
    price: 437000,
    points: 1,
    subCategory: 'Reflex'
  },
  {
    name: 'Nikon D7500 (18-140 mm f/3.5-5.6 G ED VR)',
    brand: 'Nikon',
    model: 'D7500',
    img: 'https://www.digi-zoom.com.ar/images/productos/1398_1_z.jpg',
    description: '',
    price: 247000,
    points: 3,
    subCategory: 'Reflex'
  },
  {
    name: 'Canon EOS Rebel T6/1300D (18-55 mm III)',
    brand: 'Canon ',
    model: ' Rebel T6/1300D',
    img: 'https://www.digi-zoom.com.ar/images/productos/1092_1_z.jpg',
    description: 'Sensor CMOS 18MP APS-C Procesador de imagen DIGIC 4+ Monitor LCD 3.0 920k-Dot Grabación de video Full HD 1080p a 30 fps',
    price: 102000,
    points: 2,
    subCategory: 'Reflex'
  },
  {
    name: 'Canon EOS Rebel Kit T7 18-55mm III DSLR color negro',
    brand: 'Canon',
    model: 'Rebel',
    img: 'https://http2.mlstatic.com/D_NQ_NP_707440-MLA41971755145_052020-O.webp',
    description: 'El visor réflex permite obtener una perspectiva realista y tomar fotografías increíbles con resultados más a tu creatividad y controlar diferentes parámetros para tomar la fotografía perfecta.',
    price: 78127,
    points: 1,
    subCategory: 'Reflex'
  },
  {
    model: 'SX100',
    brand: 'Canon ',
    img: 'https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000',
    description: 'Una cámara linda',
    price: 80000,
    points: 5,
    subCategory: 'Semi-Reflex'
  },

  {
    name: 'Sony a6000 + 18-55mm',
    brand: 'Sony',
    model: 'a6000',
    img: 'https://cdn.alzashop.com/ImgW.ashx?fd=f4&cd=OS073c1&i=1.jpg',
    description: 'El visor réflex permite obtener una perspectiva realista y tomar fotografías increíbles con resultados más exactos gracias a la posibilidad de intercambiar objetivos.',
    price: 189000,
    points: 3,
    subCategory: 'Mirrorless'
  },
  {
    name: 'Sony Ilce-7m3 7miii Kit Lente 28-70mm',
    brand: 'Sony',
    model: 'Ilce-7m3',
    img: 'https://http2.mlstatic.com/D_NQ_NP_629912-MLA31353353879_072019-O.webp',
    description: 'Sensor CMOS BSI de formato FX de 24.5MP Vídeo UHD 4K30; Salida N-Log y HDMI de 10 bit Sistema AF Multi-CAM 3500 II ',
    price: 245000,
    points: 5,
    subCategory: 'Mirrorless'
  }

]

module.exports = { products }
