# Tutorial: Fetch con async/await en JavaScript

## 1. ¿Qué es "fetch"?

`fetch` es una función que ya viene incluida en JavaScript (no hay que instalar nada) y sirve para **pedir datos a través de internet**. Por ejemplo, pedirle a una API que nos devuelva información en formato JSON.

Pensalo así: es como golpear la puerta de un servidor y decirle "che, pasame esos datos". El servidor puede tardar un poquito en responder, así que `fetch` no nos da la respuesta al instante, sino que nos da **una promesa** de que en algún momento la respuesta va a llegar.

## 2. ¿Qué es una promesa?

Una **promesa** (`Promise`) es un objeto que representa algo que va a pasar en el futuro, pero todavía no pasó. Puede terminar de dos formas:

- Se **cumple** ✅ (la respuesta llegó bien)
- Se **rechaza** ❌ (hubo un error, por ejemplo no hay internet)

## 3. ¿Qué es `async` y `await`?

Trabajar con promesas "a mano" puede ser confuso al principio. Por eso existe una forma más prolija de escribirlo, usando dos palabras clave:

- **`async`**: se escribe antes de una función, y le dice a JavaScript "esta función va a trabajar con cosas que tardan tiempo (promesas)".
- **`await`**: se usa **adentro** de una función `async`, y significa "esperá acá hasta que esto termine, antes de seguir con la siguiente línea".

Es una forma de escribir código asincrónico (que tarda tiempo) como si fuera código normal, de arriba hacia abajo, sin líos.

### Comparación rápida

Sin `async/await` (más difícil de leer):

```javascript
fetch("https://alguna-api.com/datos")
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
  .catch(error => console.log("Ocurrió un error:", error));
```

Con `async/await` (más parecido a código "normal"):

```javascript
async function pedirDatos() {
  try {
    const respuesta = await fetch("https://alguna-api.com/datos");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log("Ocurrió un error:", error);
  }
}

pedirDatos();
```

Fijate que usamos `try/catch`: adentro del `try` ponemos el código que puede fallar (pedir los datos), y en el `catch` ponemos qué hacer si algo sale mal.

## 4. ¿Qué es `try/catch`?

Cuando pedimos datos a una API, muchas cosas pueden salir mal: que no haya conexión a internet, que la API esté caída, que la URL esté mal escrita, etc. Si no controlamos esos errores, la página se puede "romper" y dejar de funcionar sin dar ninguna explicación al usuario.

Para eso existe `try/catch`. La idea es simple:

- **`try`** (intentar): ahí adentro ponés el código que *querés* que se ejecute, pero que **podría fallar**.
- **`catch`** (atrapar): ahí adentro ponés qué hacer **si algo del `try` falló**. JavaScript "atrapa" el error antes de que rompa todo, y te lo entrega en una variable (generalmente la llamamos `error`) para que decidas qué hacer con él.

Estructura básica:

```javascript
try {
  // código que puede fallar
} catch (error) {
  // qué hacer si falló
  console.log("Algo salió mal:", error);
}
```

Un ejemplo simple, sin fetch, solo para entender la mecánica:

```javascript
try {
  const resultado = numeroQueNoExiste + 1; // esto va a fallar
  console.log(resultado);
} catch (error) {
  console.log("Hubo un error:", error.message);
}
```

Como `numeroQueNoExiste` no existe, el `try` falla, pero en vez de romper la página, el `catch` "atrapa" ese error y nosotros decidimos qué mostrar. En el caso de `fetch`, el `catch` nos sirve típicamente para mostrar un mensaje amigable al usuario ("no se pudieron cargar los datos") en vez de dejar la pantalla en blanco o rota.

## 5. Los pasos, siempre iguales

Cada vez que quieras traer datos de una API con `fetch`, vas a repetir más o menos esta receta:

1. Declarás una función `async`.
2. Adentro, hacés `await fetch(url)` para pedir los datos. Esto te da una respuesta "cruda".
3. Convertís esa respuesta a JSON con `await respuesta.json()`. Ahora sí tenés los datos usables (un objeto o un array).
4. Hacés algo con esos datos (mostrarlos en pantalla, por ejemplo).
5. Envolvés todo en `try/catch` por si algo falla.

## 6. Ejemplo real: mostrar productos de Fake Store API en un `<ul>`

Vamos a usar una API gratuita y sin necesidad de registrarse: **Fake Store API** (`https://fakestoreapi.com/products`). Simula una tienda online y nos devuelve una lista de productos.

### HTML

```html
<ul id="datos"></ul>
```

### JavaScript

```javascript
async function cargarProductos() {
  const lista = document.querySelector("#datos");

  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const productos = await respuesta.json();

    // "productos" ya es directamente el array con los productos
    productos.forEach(producto => {
      const item = document.createElement("li");
      item.textContent = `${producto.title} - $${producto.price}`;
      lista.appendChild(item);
    });

  } catch (error) {
    lista.textContent = "Hubo un problema al cargar los datos 😕";
    console.log(error);
  }
}

cargarProductos();
```

### ¿Qué hace este código, paso a paso?

1. Buscamos el `<ul id="datos">` con `querySelector`, algo que ya conocen.
2. Adentro de un `try`, le pedimos los datos a la API con `await fetch(...)`.
3. Convertimos la respuesta a JSON con `await respuesta.json()`. Acá `productos` es directamente un array (a diferencia de otras APIs, no hace falta entrar en una propiedad como `.results`).
4. Recorremos ese array con `forEach`, y por cada producto:
   - Creamos un `<li>` nuevo con `createElement`.
   - Le ponemos como texto el nombre y el precio del producto.
   - Lo agregamos a la lista con `appendChild`.
5. Si algo falla (por ejemplo, no hay conexión), el `catch` se activa y muestra un mensaje de error en la lista en vez de romper la página.

## 7. Para practicar

Algunas ideas para que los alumnos prueben por su cuenta, siempre con Fake Store API:

- Mostrar también la imagen de cada producto (`producto.image`).
- Traer un solo producto por su id: `https://fakestoreapi.com/products/1`.
- Traer solo una categoría, por ejemplo: `https://fakestoreapi.com/products/category/jewelery`.
- Agregar un botón que, al hacer clic, vuelva a cargar la lista de productos.
- Mostrar un mensaje de "Cargando..." mientras se espera la respuesta de la API.