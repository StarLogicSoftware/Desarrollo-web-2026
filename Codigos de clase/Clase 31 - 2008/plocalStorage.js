
// LOCALSTORAGE Y JSON

// localStorage.setItem('nombre', 'Nicolas')
// localStorage.setItem('edad', 45)

// const nombrePersona = localStorage.getItem('nombre')

// alert('Hola! '+ nombrePersona)

// const numeros = [2,3,4]
// localStorage.setItem('numerosFuncionales', numeros)

// const numerosDesdeLocalStorage = localStorage.getItem('numerosFuncionales')


const numeros = [2,3,4]

// convierte arrays (y objetos) en texto plano
const numerosPeroEnJSON = JSON.stringify(numeros)

// pasa de texto (tipo JSON) y lo vuelve a hacer array ) u objeto)
const numerosOtraVezArray = JSON.parse(numerosPeroEnJSON)

console.log(numerosOtraVezArray)