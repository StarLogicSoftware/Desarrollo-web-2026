const listadoPrductos = []

document.addEventListener('DOMContentLoaded', obtenerDatosDeOpenSheet)

function cargarProductosHTML(arrayProductos) {
    const div = document.querySelector('#productos')
    div.innerHTML = ''

    arrayProductos.forEach(producto => {
        const columna = document.createElement('div')
        columna.className = 'col s12 m6 l4'

        const articulo = document.createElement('article')
        articulo.className = 'card producto-card hoverable'

        const imagenCaja = document.createElement('div')
        imagenCaja.className = 'card-image'

        const img = document.createElement('img')
        img.src = producto.foto
        img.alt = producto.alt

        const content = document.createElement('div')
        content.className = 'card-content'

        const h3 = document.createElement('h5')
        h3.textContent = producto.nombre

        const pdesc = document.createElement('p')
        pdesc.className = 'descripcion'
        pdesc.textContent = producto.desc_corta

        const pprecio = document.createElement('p')
        pprecio.className = 'precio'
        pprecio.textContent = `$${producto.precio}`

        const stock = document.createElement('span')
        stock.className = 'stock'
        stock.textContent = producto.stock

        const acciones = document.createElement('div')
        acciones.className = 'card-action'

        const boton = document.createElement('a')
        boton.href = '#'
        boton.className = 'btn btn-comprar waves-effect waves-light'
        boton.textContent = 'Comprar'

        const icono = document.createElement('i')
        icono.className = 'material-icons'
        icono.textContent = 'shopping_cart'

        boton.appendChild(icono)

        acciones.appendChild(stock)
        acciones.appendChild(boton)

        content.append(h3, pdesc, pprecio)
        imagenCaja.appendChild(img)
        articulo.append(imagenCaja, content, acciones)
        columna.appendChild(articulo)
        div.appendChild(columna)
    })
}

async function obtenerDatosDeOpenSheet() {
    const idHoja = "1MSr3H7w2ghobo9y0tY87OVtLDdlv9K9tI5H7vkjR7nc";
    const nombreHoja = "productos";

    const urlOpenSheet = `https://opensheet.elk.sh/${idHoja}/${nombreHoja}`;

    try {
        const respuesta = await fetch(urlOpenSheet);

        if (!respuesta.ok) {
            throw new Error(`Error del: ${respuesta.status}`);
        }

        const datos = await respuesta.json()

        listadoPrductos.push(...datos)
        cargarProductosHTML(listadoPrductos)

        console.log(listadoPrductos)
    } catch (error) {
        console.error("No se pudieron obtener los datos:", error)
        return null
    }
}


