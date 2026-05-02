# Apuntes HTML — Introducción

---

## 1. ¿Qué es HTML?

HTML (HyperText Markup Language) es el **lenguaje de marcado** que define la **estructura y el contenido** de una página web.

No es un lenguaje de programación: no tiene lógica, condiciones ni bucles. Su función es describir qué es cada parte del contenido: un título, un párrafo, una imagen, un enlace, etc.

El navegador lee el HTML y lo convierte en lo que vemos visualmente en pantalla.

---

## 2. Estructura básica de un documento HTML

Todo archivo HTML bien formado tiene esta estructura mínima:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi página</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Este es mi primer párrafo.</p>
  </body>
</html>
```

---

### `<!DOCTYPE html>`

Declaración que le dice al navegador que el documento usa **HTML5**.  
Va siempre en la primera línea. No es una etiqueta HTML, es una instrucción.

---

### `<html>`

Es el **elemento raíz** del documento. Todo el contenido HTML va dentro de él.

El atributo `lang` declara el idioma del contenido, lo que mejora la accesibilidad y el SEO.

```html
<html lang="es">
  ...
</html>
```

---

## 3. El `<head>`

El `<head>` contiene **metadatos**: información sobre el documento que el navegador necesita pero que el usuario no ve directamente en la página.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi página</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
```

| Elemento                        | Para qué sirve                                              |
|---------------------------------|-------------------------------------------------------------|
| `<meta charset="UTF-8">`        | Define la codificación de caracteres (permite tildes, ñ, etc.) |
| `<meta name="viewport" ...>`    | Controla el zoom y escala en dispositivos móviles           |
| `<title>`                       | El texto que aparece en la pestaña del navegador            |
| `<link rel="stylesheet" ...>`   | Vincula un archivo CSS externo                              |
| `<script src="...">`            | Vincula un archivo JavaScript externo                       |

---

## 4. El `<body>`

El `<body>` contiene **todo lo que el usuario ve en la página**: textos, imágenes, botones, formularios, etc.

```html
<body>
  <h1>Título principal</h1>
  <p>Un párrafo de texto.</p>
  <img src="foto.jpg" alt="Una fotografía" />
</body>
```

Todo lo visible va aquí. El navegador renderiza el `<body>` y lo muestra en pantalla.

---

## 5. Etiquetas: apertura y cierre

Las etiquetas HTML se escriben entre corchetes angulares `< >`.  
La gran mayoría tiene una **etiqueta de apertura** y una **etiqueta de cierre**:

```html
<p>Este es un párrafo.</p>
```

- `<p>` — etiqueta de **apertura**
- `</p>` — etiqueta de **cierre** (se distingue por la `/`)
- El texto entre ambas es el **contenido** del elemento

---

### Elementos de bloque vs. elementos en línea

| Tipo        | Comportamiento                                              | Ejemplos             |
|-------------|-------------------------------------------------------------|----------------------|
| Bloque      | Ocupa todo el ancho disponible, genera salto de línea       | `<p>`, `<h1>`, `<div>` |
| En línea    | Ocupa solo el espacio de su contenido, sin salto de línea   | `<span>`, `<a>`, `<strong>` |

---

### Elementos vacíos (auto-cerrados)

Algunos elementos no tienen contenido y no necesitan etiqueta de cierre:

```html
<img src="foto.jpg" alt="Descripción" />
<br />
<hr />
<input type="text" />
<meta charset="UTF-8" />
```

En HTML5 la `/` al final es opcional, pero es buena práctica incluirla para mayor claridad.

---

## 6. Atributos

Los atributos **añaden información o configuran** el comportamiento de una etiqueta.  
Se escriben dentro de la etiqueta de apertura, siempre con el formato `nombre="valor"`:

```html
<a href="https://ejemplo.com" target="_blank">Visitar sitio</a>
<img src="logo.png" alt="Logo de la empresa" width="200" />
<input type="email" placeholder="Tu correo" required />
```

- `href` — indica la URL del enlace
- `src` — indica la ruta del archivo de imagen
- `alt` — texto alternativo para imágenes (accesibilidad)
- `class` — asigna una o varias clases CSS
- `id` — identificador único del elemento
- `style` — estilos CSS en línea (evitar en lo posible)

---

## 7. Anidado de etiquetas

Los elementos HTML pueden contener a otros elementos. A esto se lo llama **anidado**.

```html
<p>
  Este es un texto con una <strong>palabra importante</strong> en negrita.
</p>
```

**Regla importante:** las etiquetas deben cerrarse en orden inverso al que se abrieron. El anidado incorrecto produce errores visuales.

```html
<!-- Correcto -->
<p><strong>Texto</strong></p>

<!-- Incorrecto -->
<p><strong>Texto</p></strong>
```

---

## 8. Comentarios en HTML

Los comentarios son texto que el navegador ignora. Sirven para documentar el código.

```html
<!-- Esto es un comentario y no se muestra en pantalla -->

<!-- Sección de navegación -->
<nav>
  ...
</nav>
```

---

## 9. Etiquetas básicas de contenido

### `<h1>` a `<h6>` — Títulos

Representan encabezados de distintos niveles de importancia.  
`<h1>` es el más importante; `<h6>`, el menos.

```html
<h1>Título principal de la página</h1>
<h2>Sección importante</h2>
<h3>Subsección</h3>
<h4>Apartado</h4>
<h5>Sub-apartado</h5>
<h6>El nivel más bajo</h6>
```

**Regla:** cada página debería tener un solo `<h1>`. No saltear niveles (no ir de `<h1>` directo a `<h4>`).

---

### `<p>` — Párrafo

Representa un bloque de texto como párrafo.

```html
<p>Este es un párrafo de texto normal.</p>
<p>Este es otro párrafo. El navegador agrega espacio entre ellos automáticamente.</p>
```

El navegador ignora los saltos de línea y espacios múltiples dentro del HTML.  
Para forzar un salto de línea dentro de un párrafo se usa `<br />`.

```html
<p>
  Primera línea.<br />
  Segunda línea en el mismo párrafo.
</p>
```

---
