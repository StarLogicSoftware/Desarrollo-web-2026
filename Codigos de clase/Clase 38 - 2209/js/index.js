import {obtenerDatosDeOpenSheet} from './ramon.js'

const datosServidor = await obtenerDatosDeOpenSheet()

console.log(datosServidor)