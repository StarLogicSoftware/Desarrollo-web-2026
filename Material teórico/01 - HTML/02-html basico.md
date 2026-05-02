# Apuntes HTML — Etiquetas Básicas

---

## 1. Títulos — `<h1>` a `<h6>`

Definen encabezados jerárquicos. `<h1>` es el más importante, `<h6>` el menos.

```html
<h1>Título de la página</h1>
<h2>Título de sección</h2>
<h3>Subtítulo</h3>
<h4>Apartado</h4>
<h5>Sub-apartado</h5>
<h6>Nivel más bajo</h6>
```

**Uso correcto:** un solo `<h1>` por página, no saltear niveles, usarlos para estructura de contenido (no para dar tamaño al texto — eso es tarea del CSS).

---

## 2. Párrafo — `<p>`

Bloque de texto. El navegador agrega margen automáticamente entre párrafos.

```html
<p>Esto es un párrafo de texto.</p>
<p>Esto es otro párrafo.</p>
```

---

## 3. Salto de línea — `<br />`

Fuerza un salto de línea dentro del mismo bloque de contenido. Elemento vacío, sin cierre.

```html
<p>
  Primer renglón.<br />
  Segundo renglón dentro del mismo párrafo.
</p>
```

**Cuándo usarlo:** solo cuando el salto forma parte del contenido (como en un poema o una dirección postal). No usarlo para separar bloques — para eso están los párrafos y el CSS.

---

## 4. Línea horizontal — `<hr />`

Dibuja una línea horizontal. Se usa para separar secciones temáticas. Elemento vacío.

```html
<p>Sección uno.</p>
<hr />
<p>Sección dos.</p>
```

---

## 5. Texto en negrita — `<b>` y `<strong>`

Ambas muestran el texto en negrita visualmente, pero tienen significados distintos.

```html
<b>Texto en negrita sin énfasis semántico.</b>
<strong>Texto con importancia semántica (énfasis fuerte).</strong>
```

| Etiqueta   | Significado                            |
|------------|----------------------------------------|
| `<b>`      | Negrita visual, sin importancia semántica |
| `<strong>` | Contenido de **gran importancia** — lectores de pantalla lo enfatizan |

**Preferir `<strong>`** cuando el texto es realmente importante. Usar `<b>` solo para estilizar sin semántica adicional.

---

## 6. Texto en cursiva — `<i>` y `<em>`

Ambas muestran el texto en cursiva, pero con significados distintos.

```html
<i>Texto en cursiva sin énfasis semántico.</i>
<em>Texto con énfasis semántico (el lector lo destaca).</em>
```

| Etiqueta | Significado                                      |
|----------|--------------------------------------------------|
| `<i>`    | Cursiva visual, sin semántica — términos técnicos, títulos de obras, frases en otro idioma |
| `<em>`   | **Énfasis** real en el contenido — afecta la entonación en lectores de pantalla |

---

## 7. Texto subrayado — `<u>`

Muestra el texto subrayado. Históricamente para subrayar, hoy se usa con reserva.

```html
<u>Texto subrayado.</u>
```

**Cuidado:** el subrayado en la web se asocia visualmente a los enlaces. Usarlo para otros fines puede confundir al usuario.

---

## 8. Texto tachado — `<s>` y `<del>`

```html
<s>Precio original: $500</s>   <!-- visualmente tachado, sin semántica -->
<del>Texto eliminado o ya no válido.</del>  <!-- indica eliminación con semántica -->
```

`<del>` suele acompañarse de `<ins>` para mostrar una inserción que reemplaza al texto borrado:

```html
<p>El precio era <del>$500</del> y ahora es <ins>$350</ins>.</p>
```

---

## 9. Texto resaltado — `<mark>`

Resalta texto como con marcador fluorescente.

```html
<p>El concepto más importante es <mark>accesibilidad</mark>.</p>
```

---

## 10. Código — `<code>`, `<pre>`, `<kbd>`

### `<code>` — fragmento de código en línea

```html
<p>Usá la propiedad <code>font-size</code> para cambiar el tamaño del texto.</p>
```

### `<pre>` — bloque de texto preformateado

Conserva espacios y saltos de línea tal como están escritos en el HTML.

```html
<pre>
  function saludar() {
    console.log("Hola");
  }
</pre>
```

### `<kbd>` — entrada de teclado

```html
<p>Presioná <kbd>Ctrl</kbd> + <kbd>S</kbd> para guardar.</p>
```

---

## 11. Enlace — `<a>`

Crea un hipervínculo. El atributo `href` define el destino.

```html
<a href="https://ejemplo.com">Visitar sitio</a>
```

### Atributos principales

| Atributo   | Descripción                                              |
|------------|----------------------------------------------------------|
| `href`     | URL de destino. Puede ser absoluta, relativa o ancla (`#`) |
| `target`   | `_blank` abre en nueva pestaña; `_self` en la misma (por defecto) |
| `rel`      | Relación con la página de destino. `noopener noreferrer` recomendado con `_blank` |
| `title`    | Texto de tooltip al pasar el mouse                       |
| `download` | Indica que el enlace debe descargarse en vez de navegar  |

```html
<!-- Enlace externo en nueva pestaña -->
<a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer">Abrir en nueva pestaña</a>

<!-- Enlace relativo -->
<a href="contacto.html">Contacto</a>

<!-- Ancla (salta a un id en la misma página) -->
<a href="#seccion-dos">Ir a sección 2</a>

<!-- Descarga un archivo -->
<a href="documento.pdf" download>Descargar PDF</a>

<!-- Abrir cliente de correo -->
<a href="mailto:info@ejemplo.com">Envianos un email</a>
```

---

## 12. Imagen — `<img />`

Inserta una imagen en la página. Elemento vacío (sin cierre).

```html
<img src="foto.jpg" alt="Descripción de la imagen" />
```

### Atributos principales

| Atributo | Descripción                                                       |
|----------|-------------------------------------------------------------------|
| `src`    | Ruta o URL de la imagen (obligatorio)                             |
| `alt`    | Texto alternativo: se muestra si la imagen no carga y lo leen los lectores de pantalla (obligatorio) |
| `width`  | Ancho en píxeles (preferible definirlo en CSS)                    |
| `height` | Alto en píxeles (preferible definirlo en CSS)                     |
| `loading`| `lazy` para carga diferida (mejora rendimiento)                   |

```html
<img src="logo.png" alt="Logo de la empresa" width="200" loading="lazy" />
```

**Regla:** el `alt` es obligatorio. Si la imagen es puramente decorativa, se deja vacío (`alt=""`), pero no se omite.

---

## 13. Listas

### Lista desordenada — `<ul>` + `<li>`

Muestra elementos con viñeta (bullet). El orden no importa.

```html
<ul>
  <li>Manzanas</li>
  <li>Naranjas</li>
  <li>Peras</li>
</ul>
```

### Lista ordenada — `<ol>` + `<li>`

Muestra elementos numerados. El orden importa.

```html
<ol>
  <li>Abrir el archivo</li>
  <li>Editar el contenido</li>
  <li>Guardar los cambios</li>
</ol>
```

### Lista de definición — `<dl>`, `<dt>`, `<dd>`

Para pares término–descripción (como un glosario).

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para estructurar páginas web.</dd>

  <dt>CSS</dt>
  <dd>Lenguaje de estilos para diseñar páginas web.</dd>
</dl>
```

### Listas anidadas

```html
<ul>
  <li>Frutas
    <ul>
      <li>Manzana</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Verduras</li>
</ul>
```

---

## 14. Contenedor genérico en bloque — `<div>`

Elemento de **bloque** sin semántica propia. Se usa para agrupar y aplicar estilos con CSS.

```html
<div class="tarjeta">
  <h2>Título</h2>
  <p>Descripción del contenido.</p>
</div>
```

---

## 15. Contenedor genérico en línea — `<span>`

Elemento **en línea** sin semántica propia. Se usa para aplicar estilos a partes de un texto.

```html
<p>El precio es <span class="precio-destacado">$350</span> por unidad.</p>
```

---

## 16. Tablas

```html
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ana</td>
      <td>28</td>
      <td>Buenos Aires</td>
    </tr>
    <tr>
      <td>Carlos</td>
      <td>35</td>
      <td>Córdoba</td>
    </tr>
  </tbody>
</table>
```

| Etiqueta  | Descripción                                    |
|-----------|------------------------------------------------|
| `<table>` | Contenedor de la tabla                         |
| `<thead>` | Sección de encabezados                         |
| `<tbody>` | Cuerpo de la tabla (los datos)                 |
| `<tfoot>` | Pie de la tabla (totales, notas)               |
| `<tr>`    | Fila (table row)                               |
| `<th>`    | Celda de encabezado (negrita y centrada por defecto) |
| `<td>`    | Celda de datos                                 |

---

## 17. Formularios — elementos básicos

### `<form>`

Contenedor de un formulario. Define a dónde y cómo se envían los datos.

```html
<form action="/enviar" method="POST">
  ...
</form>
```

### `<input />`

El elemento de entrada más versátil. El atributo `type` define qué tipo de dato recibe.

```html
<input type="text"     placeholder="Tu nombre" />
<input type="email"    placeholder="Tu correo" />
<input type="password" placeholder="Contraseña" />
<input type="number"   min="0" max="100" />
<input type="checkbox" /> Acepto los términos
<input type="radio"    name="genero" value="f" /> Femenino
<input type="file" />
<input type="date" />
<input type="submit"   value="Enviar" />
<input type="reset"    value="Limpiar" />
```

### `<label>`

Asocia un texto descriptivo a un campo. Mejora la accesibilidad.

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" />
```

### `<textarea>`

Campo de texto de múltiples líneas.

```html
<textarea name="mensaje" rows="5" cols="40" placeholder="Escribí tu mensaje"></textarea>
```

### `<select>` y `<option>`

Lista desplegable de opciones.

```html
<select name="pais">
  <option value="">-- Seleccioná un país --</option>
  <option value="ar">Argentina</option>
  <option value="mx">México</option>
  <option value="es">España</option>
</select>
```

### `<button>`

```html
<button type="submit">Enviar</button>
<button type="button">Acción personalizada</button>
<button type="reset">Limpiar</button>
```

---
