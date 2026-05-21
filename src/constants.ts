import { Product } from './types';

// CONFIGURACIÓN DE PRECIOS POR CATEGORÍA (REEMPLAZAR CON VALORES REALES)
const PRECIO_CONJUNTO = 0; // Ejemplo: 85000
const PRECIO_BUZO = 0;     // Ejemplo: 48000
const PRECIO_JOGGER = 0;    // Ejemplo: 42000

// CONFIGURACIÓN DE IMÁGENES (PEGAR LINKS DE IMÁGENES AQUÍ)
const IMG_CONJUNTO_NOIR = ''; 
const IMG_CONJUNTO_GREY = '';
const IMG_CONJUNTO_NAVY = '';

const IMG_BUZO_NOIR = '';
const IMG_BUZO_GREY = '';
const IMG_BUZO_NAVY = '';

const IMG_JOGGER_NOIR = '';
const IMG_JOGGER_GREY = '';
const IMG_JOGGER_NAVY = '';

export const PRODUCTS: Product[] = [
  // Conjuntos
  {
    id: 'conjunto-negro',
    name: 'CONJUNTO ROVE NOIR',
    price: PRECIO_CONJUNTO,
    category: 'Conjuntos',
    color: 'Negro',
    description: 'Conjunto completo premium wide fit. Diseñado para el uso diario sin perder la elegancia.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Capucha amplia con cordón', 'Puño abierto sin elástico', 'De color Negro profundo', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_CONJUNTO_NOIR
  },
  {
    id: 'conjunto-gris',
    name: 'CONJUNTO ROVE GREY',
    price: PRECIO_CONJUNTO,
    category: 'Conjuntos',
    color: 'Gris',
    description: 'Conjunto completo en gris melange suave. Perfecto para climas frescos.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Capucha amplia con cordón', 'Puño abierto sin elástico', 'De color Gris Melange', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_CONJUNTO_GREY
  },
  {
    id: 'conjunto-azul',
    name: 'CONJUNTO ROVE NAVY',
    price: PRECIO_CONJUNTO,
    category: 'Conjuntos',
    color: 'Azul',
    description: 'Nuestro color insignia en conjunto completo. Elegancia urbana pura.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Capucha amplia con cordón', 'Puño abierto sin elástico', 'De color Azul Navy', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_CONJUNTO_NAVY
  },
  // Buzos
  {
    id: 'buzo-negro',
    name: 'HOODIE ROVE NOIR',
    price: PRECIO_BUZO,
    category: 'Buzos',
    color: 'Negro',
    description: 'Buzo con capucha estructurada y gramaje pesado para máxima comodidad.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Capucha amplia estructurada', 'Bolsillo canguro frontal', 'De color Negro', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_BUZO_NOIR
  },
  {
    id: 'buzo-gris',
    name: 'HOODIE ROVE GREY',
    price: PRECIO_BUZO,
    category: 'Buzos',
    color: 'Gris',
    description: 'El clásico hoodie gris con un corte moderno y detalles cuidados.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Capucha amplia estructurada', 'Bolsillo canguro frontal', 'De color Gris', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_BUZO_GREY
  },
  {
    id: 'buzo-azul',
    name: 'HOODIE ROVE NAVY',
    price: PRECIO_BUZO,
    category: 'Buzos',
    color: 'Azul',
    description: 'Buzo navy profundo, un básico que eleva cualquier outfit casual.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Capucha amplia estructurada', 'Bolsillo canguro frontal', 'De color Azul', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_BUZO_NAVY
  },
  // Joggins
  {
    id: 'jogging-negro',
    name: 'JOGGER ROVE NOIR',
    price: PRECIO_JOGGER,
    category: 'Joggins',
    color: 'Negro',
    description: 'Jogging de puño abierto con caída espectacular. Comodidad sin límites.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Puño abierto sin elástico', 'Pretina ajustable', 'De color Negro', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_JOGGER_NOIR
  },
  {
    id: 'jogging-gris',
    name: 'JOGGER ROVE GREY',
    price: PRECIO_JOGGER,
    category: 'Joggins',
    color: 'Gris',
    description: 'La máxima expresión del confort en un gris suave y versátil.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Puño abierto sin elástico', 'Pretina ajustable', 'De color Gris', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_JOGGER_GREY
  },
  {
    id: 'jogging-azul',
    name: 'JOGGER ROVE NAVY',
    price: PRECIO_JOGGER,
    category: 'Joggins',
    color: 'Azul',
    description: 'Pantalones de alto gramaje en azul navy. Duraderos y con estilo.',
    features: ['Tela gruesa 500gsm', 'Corte Wide Fit', 'Puño abierto sin elástico', 'Pretina ajustable', 'De color Azul', 'Sin logo externo', 'Logo ROVE discreto'],
    image: IMG_JOGGER_NAVY
  },
];

