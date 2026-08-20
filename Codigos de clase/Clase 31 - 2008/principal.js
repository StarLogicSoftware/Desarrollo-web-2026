
const formulario = document.querySelector('#formulario-tareas')
const ul = document.querySelector('li')
console.log(ul)

formulario.addEventListener('submit', (evento) => {
    // Esto previene que el formulario me recargue la pagina solito
    evento.preventDefault()

    // obtengo del input el texto de la tarea a cargar
    let nombreTarea = evento.target.titulotarea.value
    console.log(nombreTarea)

    if (nombreTarea != "") {
        // crear un <li> para la tarea a cargar en el ul
        const li = document.createElement('li')

        // colocar el nombre de la tarea como el contenido del li
        li.textContent = nombreTarea

        // agregar las clases CSS para que se vea bonito :D
        li.classList.add('elemento-tarea')

        // colocar el li recien creado dentro del ul (ya lo ve el usuario)
        ul.append(li)
    }
    else{
        alert('No se pueden agregar tareas sin titulo!')
    }




})