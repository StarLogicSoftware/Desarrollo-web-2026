
let edad = 26

// guarda un dato (clave, el dato a guardar)
localStorage.setItem('edadPersona', edad )

// borra todos los datos del localstorage ()
localStorage.clear()

// quita un elemento de la memoria (clave a borrar)
localStorage.removeItem('edadPersona')

// lee el dato de la memoria ('clave')
const datoDesdeLocalStorage = localStorage.getItem('edadPersona')

// extra de como usar datos del localstorage
if(datoDesdeLocalStorage != null){
    alert('La edad es de : ' + datoDesdeLocalStorage)
}
else{
    localStorage.setItem('edadPersona', 0 )
}