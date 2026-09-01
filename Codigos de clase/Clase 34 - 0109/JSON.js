
const persona = {
    nombre:'Nicolas',
    apellido:'Fumo',
    empleo: 'Centro de innovación'
}

const datosLluvia = [0,5,0,25,9]

//     esto es texto    convierte "algo" en texto plano
const datosParaEnviar = JSON.stringify(datosLluvia)

//  Esta linea, toma un texto en formato "JSON" y lo convierte a "algo" de javascript
const datosQueReciboDelServer = JSON.parse(datosParaEnviar)


console.log(datosParaEnviar)
console.log(datosLluvia)



const arrayTareas = []

const tareaIndividual = {
    titulo:'titulo del formulario',
    descripcion: 'descripcion del formulario'
}

arrayTareas.push(tareaIndividual)

// codigo para actualizar el HTML

// localstorage