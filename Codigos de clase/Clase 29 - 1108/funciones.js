
//                      funcion anonima
// let sumadorEnVariable = function (numero1, numero2){
//     let resultado = numero1 + numero2

//     return resultado
// }

// let funcionFlecha = (numero1, numero2) =>  numero1 + numero2

// // funcion flecha (arrow function)
// // (parametros) => { codigo }

// console.log( sumadorEnVariable(4,9) )
// console.log( sumador2Numeros(4,9) )


// function sumador2Numeros(numero1, numero2){
//     let resultado = numero1 + numero2

//     return resultado
// }


let multiplicar = (numero, multiplicador) => {
    return numero * multiplicador 
}

let sumar = (dato1, dato2) => {
    return dato1 + dato2
}

let cuentaComplicada = function (numero, funcionUtil){
    let resultadoGuapo = numero + 10

    let resultado = funcionUtil(resultadoGuapo, 2)

    return resultado
}

console.log(  cuentaComplicada(5, multiplicar)   )









// agregarAlCarrito('zapatillas')
// agregarAlCarrito('paraguas')

// multiplicar(3,5)

// console.log('holisss')

// // declarar la funcion
// function agregarAlCarrito (producto){
//     console.log('holisss')
// }

// function multiplicar (numero, multiplicador) {
//     return numero * multiplicador 
// }

let funcionEnVariable = () => {

}