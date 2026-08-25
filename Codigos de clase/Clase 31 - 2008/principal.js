
const formulario = document.querySelector('#formulario-tareas')
const tareasArray = ['estudiar', 'hacer pizza']

const actualizarListadoHTML = (arrayDeDatos) => {
    // traigo el "ul" del HTML para cargar los <li> dentro
    const ul = document.querySelector('ul')

    // esto borra todo el HTML del interior del <ul>
    ul.innerHTML = ''

     // saco uno a uno los elementos del array, y creo los <li> con los datos dentro
    arrayDeDatos.forEach( (item)=>{
        // creo el <li> que se inyectara dentro del ul
        const liTarea = document.createElement('li')

        // carga el texto del elemento del array que corresponda
        liTarea.textContent = item

        //ponerle las clases de CSS al <li> recien creado
        liTarea.classList.add('elemento-tarea')
        
        // insertar dentro del ul del HTML, el li que acabamos de crear
        ul.append(liTarea)
    } )
}

// detectamos que se quiere agreagar una nueva tarea
formulario.addEventListener('submit', (evento) => {
    // Esto previene que el formulario me recargue la pagina solito
    evento.preventDefault()

    // obtengo del input el texto de la tarea a cargar
    let nombreTarea = evento.target.titulotarea.value

    // esto agrega la tarea nueva al array
    tareasArray.push(nombreTarea)

    // si se agregan elementos, hay que actualizar el HTML
    actualizarListadoHTML(tareasArray)
})

document.addEventListener('DOMContentLoaded', ()=>{
    actualizarListadoHTML(tareasArray)
})




// // Codigo clase 20/08
// formulario.addEventListener('submit', (evento) => {
//     // Esto previene que el formulario me recargue la pagina solito
//     evento.preventDefault()

//     // obtengo del input el texto de la tarea a cargar
//     let nombreTarea = evento.target.titulotarea.value

//     if (nombreTarea != "") {
//         // crear un <li> para la tarea a cargar en el ul
//         const li = document.createElement('li')

//         // colocar el nombre de la tarea como el contenido del li
//         li.textContent = nombreTarea

//         // agregar las clases CSS para que se vea bonito :D
//         li.classList.add('elemento-tarea')

//         // colocar el li recien creado dentro del ul (ya lo ve el usuario)
//         ul.append(li)
//     }
//     else{
//         alert('No se pueden agregar tareas sin titulo!')
//     }
// })