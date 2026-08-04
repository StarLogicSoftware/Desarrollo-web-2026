
// precio unico del plato
// cada empresa hace su pedido (cantidades)
// calcular el total (ver uno por uno esos datos)
// cantidad de empresas (bucle definido)

let pedidos = []
let costoPorEmpresa = []
let cantidadEmpresas = 0
let totalPedidos = 0
let precioTotal = 0
let precioPorVianda = parseInt(prompt('Precio unitario de cada vianda'))

cantidadEmpresas = parseInt(prompt('Cantidad de empresas con pedido?'))


// Es para cargar uno a uno los pedidos de CADA empresa
for( let i = 0 ; i < cantidadEmpresas ; i++){
    pedidos.push( parseInt( prompt('Cantidad de viandas?' ) ) )
}

// Saca uno a uno la cantidad de pedidos de CADA empresa y calcula el total
pedidos.forEach((pedidoIndividual)=>{
    totalPedidos = totalPedidos + pedidoIndividual
})

costoPorEmpresa = pedidos.map((cadaPedido)=>{
    return cadaPedido * precioPorVianda
})

costoPorEmpresa.forEach((individualEmpresa)=>{
    console.log('Precio a facturar: ' + individualEmpresa)
})

precioTotal = totalPedidos * precioPorVianda

console.log('Cantidad de pedidos: ' + totalPedidos)
console.log('Total a facturar: ' + precioTotal)
