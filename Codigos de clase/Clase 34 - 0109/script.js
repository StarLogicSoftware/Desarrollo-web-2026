/* GUIA DE PROCESO
- guardar tareas (titulo y descripcion)
- voy a usar arrays ✅
- objetos para CADA UNA de las tareas
- localstorage para guardado
- JSON para serializar y deserializar datos
- eventos para elegir cuando se ejecuta cada cosa
*/

const arrayTareas = []
const claveLocalStorage = 'tareasLocalStorage'
const formulario = document.querySelector('form')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const tareaAGuardar = {
        titulo: evento.target.titulotarea.value,
        descripcion: evento.target.descripciontarea.value,
    }

    arrayTareas.push(tareaAGuardar)

    const arrayTareasJSON = JSON.stringify(arrayTareas)

    localStorage.setItem(claveLocalStorage, arrayTareasJSON)

    // localStorage.setItem(claveLocalStorage, JSON.stringify(arrayTareas))

     actualizarListaHTML(arrayTareas)
})

// Esto siempre que necesite cargar o modificar cosas al abrir la web (abrir, actualizar, cargar, etc)
document.addEventListener('DOMContentLoaded', () => {

    // leer el local storage
    const tareasDesdeLocalStorageJSON = localStorage.getItem(claveLocalStorage)

    if (tareasDesdeLocalStorageJSON != null) {
        // convertir ese texto (JSON) a un array
        const tareasACargar = JSON.parse(tareasDesdeLocalStorageJSON)

        // actualizar el array de tareas
        arrayTareas.push(...tareasACargar) //...spread operator (sirve para cargar un array dentro de otro)
    }

    actualizarListaHTML(arrayTareas)
})

function actualizarListaHTML (array) {
    // traer el ul para cargar las tareas
    const ul = document.querySelector('#listaTareas')

    // quitar todo el HTML dentro del ul para hacer todo de cero
    ul.innerHTML = ''

    // por cada elemento dentro del array, hago:
    array.forEach( tarea => {

        // crear los elementos que hay dentro de los li (y el li)
    const li = document.createElement('li') // <li></li>
    const h3 = document.createElement('h3') // <h3></h3>
    const p = document.createElement('p') // <p></p>

    // cargar las clases de CSS y los datos cada elemento
    li.classList.add('tarea') //<li class="tarea"></li>

    h3.textContent = tarea.titulo //<h3>titulo tarea</h3>
    p.textContent = tarea.descripcion //<p>descripcion tarea</p>

    // meter el h3 y el p dentro del li
    li.append(h3,p)

    // agregar a ese ul la tarea nueva
    ul.append(li)
    });
}