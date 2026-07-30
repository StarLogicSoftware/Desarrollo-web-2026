
let notasLauti = [2,6,4,8,16,18,26,2,9]
console.log(notasLauti)





let aVerQueHayAca = notasLauti.forEach( (notita) => { 
    // console.log('La nota del examen fue de: ' + notita)
} )

let arrayDoble = notasLauti.map( (elemento) => {
    
    if(elemento > 6){
        return 'Aprobado con ' + elemento
    }
    else{
        return 'Desaprobado con ' + elemento
    }
    
    return elemento * 2
} )

console.log(arrayDoble)


















// notasLauti.forEach( function (notita) { 
//     console.log('La nota del examen fue de: ' + notita)
// } )

// notasLauti.forEach( function (notita) { 

//     if(notita > 6){
//         console.log("Aprobo con " + notita)
//     }
//     else{
//         console.log("Desaprobo con " + notita)
//     }
//     // console.log('La nota del examen fue de: ' + notita)
// } )




// for(let i = 0; i< notasLauti.length ; i++){
//     mostrarNota(notasLauti[i])
// }


// let mostrarNota = function (nota){
//     console.log('La nota fue de: ' + nota)
// }

//console.log(notasLauti)




// agregar un elemento al final al array
// notasLauti.push( parseInt( prompt('Ingresá la nota') ) )

// borra el ultimo elemento del array
// let datoBorrado = notasLauti.pop()

// agregar un elemento al inicio al array
// notasLauti.unshift(25)

// borra el primer elemento del array
// let datoBorrado = notasLauti.shift()


// console.log(datoBorrado)
// console.log(notasLauti)