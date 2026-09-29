
document.addEventListener('DOMContentLoaded', () => {
    const url = window.location.search
    const parametros = new URLSearchParams(url)

    datoURL = parametros.get('datito')

    // Cambiar este console.log por filtrar del servidor los datos con el id correcto
    console.log(datoURL)
})


// guardar el parametro que viene por la url





































// import {obtenerDatosDeOpenSheet} from './ramon.js'

// const datosServidor = await obtenerDatosDeOpenSheet()

// console.log(datosServidor)