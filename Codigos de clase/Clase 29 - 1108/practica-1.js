let precio = 0
let total = 0
let productos = []

do{
    precio = parseInt(  prompt('Precio del producto')  )

    if(precio > 0){
        productos.push(precio)
    }

    if(precio > 10000){
        // descuento del 10%
    }

}while(precio > 0)

productos.forEach((producto)=>{
    total = total + producto
})

productos.forEach((producto)=>{
    console.log('item: ' + producto)
})
console.log('TOTAL: ' + total)