
let cantidadDeEmpresas = parseInt(prompt("Cantidad de empresas que hicieron el pedido"))
const listadoPedidos = []
const precioPorvianda = 1000

for(let i = 0; i < cantidadDeEmpresas; i++){

    const pedidoEmpresa = {}
    pedidoEmpresa.nombre = prompt('Razon social')
    pedidoEmpresa.direccion = prompt('Direccion envio')
    pedidoEmpresa.cantidadPlatos = parseInt(prompt("Cantidad de viandas"))

    listadoPedidos.push(pedidoEmpresa)
}

listadoPedidos.forEach( (empresa) => {
    empresa.subtotal = empresa.cantidadPlatos * precioPorvianda
} )

console.log(listadoPedidos)






















/* ARRAYS CON OBJETOS EN SU INTERIOR
const pedidosDelDia = []

for (let i = 0; i < 3; i++) {
    const empresa = {}
    empresa.nombre = prompt('Nombre empresa')
    empresa.direccion = prompt('Direccion de la empresa')
    empresa.cantidadViandas = prompt('Cantidad de pedidos')

    pedidosDelDia.push(empresa)
}
console.log(pedidosDelDia)




*/













/* OBJETOS CON ARRAYS
const alumno1 = {
    nombre: 'Nicolas',
    apellido: 'Fumo',
    parciales: [7,8,9]
}

const alumno2 = {
    nombre: 'Yani',
    apellido: 'Arnold',
    parciales: [4,5,6]
}

console.log(alumno1)

let sumatoriaNotas = 0
let promedio = 0


alumno2.parciales.forEach( (nota) => {
    sumatoriaNotas = sumatoriaNotas + nota
} )

promedio = sumatoriaNotas / 3

console.log(promedio)

*/




















// DEFINICION BASICA DE OBJETOS
/*
let persona = {
    nombre :'nicolas',
    apellido : 'fumo',
    edad : 22,
    Cargo: 'Docente de robotica'
}

const array = [2,3,4]

console.log(array[2])

console.log(persona.nombre + persona.apellido)

let producto = {
    nombre: 'perfume nicolaish',
    precio: 2800,
    stock: 25,
}

console.log(persona)
console.log(producto)

*/




