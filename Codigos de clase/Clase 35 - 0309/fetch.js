async function pedirAPI() {
    try {
        const respuesta = await fetch("https://fakestoreapi.com/products");
        const listaProductos = await respuesta.json();

        // traigo el ul para cargarle el li mas tarde
        const listado = document.querySelector('ul')

        //------------------------------------
        listaProductos.forEach((productoIndividual) => {

            const puntaje = productoIndividual.rating.rate
            const votacion = productoIndividual.rating.count

            const li = document.createElement('li')
            // crear los elementos HTML
            const h3 = document.createElement('h3')
            const p = document.createElement('p')
            const valoracion = document.createElement('p')

            // cargo con informacion los elementos
            h3.textContent = productoIndividual.title
            p.textContent = productoIndividual.description

            valoracion.textContent = 'Puntuacion: ' + puntaje + '. votos: ' + votacion
            //valoracion.textContent = `Puntuacion: ${puntaje}. votos: ${votacion}.`

            // creo la estructura
            li.append(h3, p, valoracion)

            // agregar el li al listado principal
            listado.append(li)
        })
        //------------------------------------

    } catch (error) {
        const ul = document.querySelector('ul')

        const li = document.createElement('li')

        li.textContent = 'Hubo un error al cargar los productos' + error.message

        ul.append(li)
    }
}

pedirAPI()
