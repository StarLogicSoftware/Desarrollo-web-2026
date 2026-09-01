# Tutorial: Usar una hoja de cálculo de Google como fuente de datos con fetch

En este tutorial vamos a armar un **catálogo simple de productos**, pero en vez de traer los datos de una API como hicimos antes, los vamos a traer de una **hoja de cálculo de Google Sheets**. Esto es súper útil porque cualquiera (incluso alguien que no sabe programar) puede cargar o editar los productos directamente desde una planilla, como si fuera un Excel.

> 💡 Este tutorial da por sentado que ya conocen `fetch`, `async/await` y `try/catch` (lo vimos la clase anterior, revisen el video ante cualquier duda).

## 1. ¿Qué vamos a lograr?

1. Crear una hoja de cálculo en Google Sheets con nuestros productos.
2. Configurarla para que pueda ser leída desde internet.
3. Usar `fetch` para traer esos datos en formato JSON.
4. Mostrarlos como un catálogo simple en HTML.

## 2. Preparar la hoja de cálculo

1. Entrá a [Google Sheets](https://sheets.google.com) y creá una hoja nueva.
2. En la **primera fila**, escribí los nombres de las columnas (esto es importante, porque van a ser los "nombres" de cada dato). Por ejemplo:

| nombre | precio | imagen |
|---|---|---|
| Remera básica | 8500 | https://picsum.photos/id/100/200 |
| Zapatillas urbanas | 21000 | https://picsum.photos/id/103/200 |
| Mochila resistente | 15300 | https://picsum.photos/id/106/200 |

3. Completá algunas filas con productos de prueba.

### Configurar los permisos para poder leerla desde fetch

Para que nuestro código JavaScript pueda leer la planilla, necesitamos que sea **pública para lectura** (no editable, solo visible):

1. Hacé clic en el botón **Compartir** (arriba a la derecha).
2. Donde dice "Acceso general", cambiá de "Restringido" a **"Cualquier persona con el enlace"**.
3. Asegurate de que el rol sea **"Lector"** (no "Editor"), para que nadie pueda modificarla desde afuera.
4. Copiá la URL de la planilla, que va a tener esta forma:

```
https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890/edit#gid=0
```

Lo que está entre `/d/` y `/edit` es el **ID de la planilla**. En este ejemplo sería:

```
1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
```

Ese ID lo vamos a necesitar en el próximo paso.

## 3. Convertir la planilla en una URL que devuelva JSON

Google Sheets no entrega los datos en JSON de forma directa y simple para principiantes, así que vamos a usar un servicio gratuito llamado **opensheet** que hace ese trabajo por nosotros: toma nuestra planilla pública y la convierte en JSON automáticamente.

La URL tiene esta forma:

```
https://opensheet.elk.sh/ID_DE_LA_PLANILLA/NOMBRE_DE_LA_HOJA
```

- `ID_DE_LA_PLANILLA`: el ID que copiamos en el paso anterior.
- `NOMBRE_DE_LA_HOJA`: el nombre de la pestaña dentro del documento (por defecto suele llamarse `Hoja 1` o `Sheet1`; también podés usar el número `1` si no estás seguro).

Ejemplo completo:

```
https://opensheet.elk.sh/1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890/Hoja1
```

**Probalo primero en el navegador**, pegando esa URL en una pestaña nueva. Si todo está bien configurado, vas a ver algo así:

```json
[
  { "nombre": "Remera básica", "precio": "8500", "imagen": "https://picsum.photos/id/100/200" },
  { "nombre": "Zapatillas urbanas", "precio": "21000", "imagen": "https://picsum.photos/id/103/200" },
  { "nombre": "Mochila resistente", "precio": "15300", "imagen": "https://picsum.photos/id/106/200" }
]
```

Fijate que cada fila de la planilla se convirtió en un **objeto**, y cada columna en una **propiedad** de ese objeto. Es exactamente el mismo tipo de estructura que devuelven las APIs que usamos antes.

## 4. Armar el catálogo con fetch

### HTML

```html
<div id="catalogo"></div>
```

### JavaScript

```javascript
async function cargarCatalogo() {
  const catalogo = document.querySelector("#catalogo");
  const url = "https://opensheet.elk.sh/1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890/Hoja1";

  try {
    const respuesta = await fetch(url);
    const productos = await respuesta.json();

    productos.forEach(producto => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto");

      tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" width="150">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
      `;

      catalogo.appendChild(tarjeta);
    });

  } catch (error) {
    catalogo.textContent = "No se pudo cargar el catálogo 😕";
    console.log(error);
  }
}

cargarCatalogo();
```

> ⚠️ Recordá reemplazar el `ID_DE_LA_PLANILLA` y el nombre de la hoja por los de tu propio documento de Google.

### ¿Qué hace este código, paso a paso?

1. Buscamos el `<div id="catalogo">` donde vamos a mostrar los productos.
2. Dentro de un `try`, pedimos los datos con `await fetch(url)`, usando la URL de opensheet que armamos antes.
3. Convertimos la respuesta a JSON con `await respuesta.json()`. Como vimos, esto nos da directamente un array de productos.
4. Recorremos ese array con `forEach`, y por cada producto:
   - Creamos un `<div>` nuevo que representa una "tarjeta" de producto.
   - Le agregamos una clase CSS (`producto`) para poder darle estilos después.
   - Usamos `innerHTML` para insertar la imagen, el nombre y el precio, usando los datos de cada fila de la planilla.
   - Agregamos la tarjeta al catálogo con `appendChild`.
5. Si algo falla (planilla mal configurada, sin conexión, etc.), el `catch` muestra un mensaje en vez de romper la página.

## 5. Un CSS mínimo para que se vea mejor (opcional)

```css
#catalogo {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.producto {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  width: 180px;
  text-align: center;
}
```

## 6. Para practicar

- Agregar una columna `categoria` en la planilla y mostrar un filtro por categoría.
- Agregar una columna `stock` y no mostrar los productos que tengan `0`.
- Cambiar valores en la planilla de Google y recargar la página, para ver cómo el catálogo se actualiza solo, sin tocar el código.
- Agregar un botón "Actualizar catálogo" que vuelva a ejecutar `cargarCatalogo()`.