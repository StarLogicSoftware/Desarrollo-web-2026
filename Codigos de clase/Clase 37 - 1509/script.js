const listadoPrductos = [
    {
        id: "1",
        nombre: "Mate",
        precio: "12000",
        stock: "11",
        desc_corta: "mate stanley",
        desc_larga: "Este es un increible mate que casi casi se aprece a un stanley, pero queda cheto igual que tengas uno",
        foto: "https://www.federicoprato.com.ar/tienda/11414-home_default/mate-stanley.jpg",
        alt: "foto del mate stanley",
        disponibilidad: "disponible"
    },
    {
        id: "2",
        nombre: "Termo",
        precio: "43000",
        stock: "1",
        desc_corta: "termo lumilagro",
        desc_larga: "esta es la descripcion inexistente del termo",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPXK_UOUBCVTndqRFA2tDH4ZwvwUa5GxXenmBbgCd-Q&s=10",
        alt: "foto del termo lumilagro",
        disponibilidad: "no disponible"
    },
    {
        id: "3",
        nombre: "Termo 2",
        precio: "1600",
        stock: "1",
        desc_corta: "termo lumilagro",
        desc_larga: "esta es la descripcion inexistente del termo 2",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPXK_UOUBCVTndqRFA2tDH4ZwvwUa5GxXenmBbgCd-Q&s=11",
        alt: "foto del termo lumilagro",
        disponibilidad: "disponible"
    },
    {
        id: "4",
        nombre: "Mate 2",
        precio: "12000",
        stock: "1",
        desc_corta: "mate stanley",
        desc_larga: "Este es un increible mate que casi casi se aprece a un stanley, pero queda cheto igual que tengas uno",
        foto: "https://www.federicoprato.com.ar/tienda/11414-home_default/mate-stanley.jpg",
        alt: "foto del mate stanley",
        disponibilidad: "disponible"
    }
]
let productosFiltrados = []

const select = document.querySelector('#filtro')

select.addEventListener('change', () => {

    if (select.value == 0) {
        productosFiltrados = listadoPrductos
    }
    else if (select.value == 1) {
        // solo los disponibles
        productosFiltrados = listadoPrductos.filter((producto) => {
            return producto.disponibilidad == "disponible" // si (pasa) - no (no pasa)
        })
    }
    else if (select.value == 2) {
        // solo los disponibles
        productosFiltrados = listadoPrductos.filter((producto) => {
            return producto.disponibilidad == "no disponible" // si (pasa) - no (no pasa)
        })
    }

    // Actualizaria el HTML
    console.log(productosFiltrados)

    const ul = document.querySelector('#listado')

    ul.innerHTML = ''

    productosFiltrados.forEach((item) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')

        h3.textContent = item.nombre
        img.src = item.foto

        li.append(h3, img)

        ul.append(li)
    })
})

