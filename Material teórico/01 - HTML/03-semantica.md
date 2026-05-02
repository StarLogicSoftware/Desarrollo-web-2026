# Apuntes HTML — Semántica

---

## 1. ¿Qué es la semántica en HTML?

La **semántica** en HTML significa usar la etiqueta correcta para describir el **significado** o **propósito** del contenido, no solo su apariencia visual.

```html
<!-- No semántico: solo agrupa y aplica estilos -->
<div class="encabezado">
  <div class="titulo">Mi sitio</div>
</div>

<!-- Semántico: describe qué es cada parte -->
<header>
  <h1>Mi sitio</h1>
</header>
```

Visualmente puede verse igual, pero la versión semántica le dice al navegador, a los motores de búsqueda y a los lectores de pantalla qué es cada sección.

### ¿Por qué importa?

- **Accesibilidad:** los lectores de pantalla (usados por personas con discapacidad visual) navegan por landmarks semánticos.
- **SEO:** los buscadores entienden mejor el contenido y lo indexan con más precisión.
- **Mantenibilidad:** el código es más fácil de leer y mantener.

---

## 2. Etiquetas semánticas estructurales

Estas etiquetas reemplazaron al uso excesivo de `<div>` para definir regiones de la página.

---

### `<header>`

Encabezado de la página o de una sección. Suele contener el logo, el nombre del sitio y la navegación principal.

```html
<header>
  <img src="logo.svg" alt="Logo de la empresa" />
  <h1>Nombre del sitio</h1>
  <nav>...</nav>
</header>
```

**Puede usarse más de una vez:** también es válido como encabezado de un `<article>` o `<section>`.

---

### `<nav>`

Contiene los **enlaces de navegación** principales del sitio o de una sección.

```html
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/nosotros">Nosotros</a></li>
    <li><a href="/contacto">Contacto</a></li>
  </ul>
</nav>
```

No toda lista de enlaces es un `<nav>`. Usarlo solo para bloques de navegación importantes (menú principal, paginación, breadcrumbs).

---

### `<main>`

Contiene el **contenido principal y único** de la página. Solo puede haber un `<main>` por documento.

```html
<main>
  <h1>Artículo principal</h1>
  <p>Contenido del artículo...</p>
</main>
```

El contenido de `<main>` es el que varía de página en página. El header y footer repetidos en todo el sitio no van aquí.

---

### `<footer>`

Pie de la página o de una sección. Suele contener datos de contacto, copyright, links legales, redes sociales.

```html
<footer>
  <p>&copy; 2026 Mi empresa. Todos los derechos reservados.</p>
  <nav>
    <a href="/privacidad">Política de privacidad</a>
    <a href="/terminos">Términos de uso</a>
  </nav>
</footer>
```

Al igual que `<header>`, puede aparecer dentro de `<article>` o `<section>`.

---

### `<section>`

Agrupa contenido **temáticamente relacionado** dentro de la página. Generalmente tiene un encabezado propio.

```html
<section>
  <h2>Nuestros servicios</h2>
  <p>Descripción de los servicios que ofrecemos.</p>
</section>

<section>
  <h2>Testimonios</h2>
  <p>Lo que dicen nuestros clientes.</p>
</section>
```

**Criterio:** si el contenido podría tener un título propio y forma una unidad temática, es candidato para ser un `<section>`.

---

### `<article>`

Representa un **contenido independiente y autocontenido**: podría extraerse y publicarse en otro contexto sin perder sentido.

```html
<article>
  <h2>Título del post</h2>
  <p>Fecha: 2 de mayo de 2026</p>
  <p>Contenido del artículo del blog...</p>
</article>
```

**Casos de uso:** posts de blog, noticias, tarjetas de producto, comentarios, entradas de feed.

---

### `<aside>`

Contenido **relacionado pero secundario** respecto al contenido principal. A menudo se renderiza como barra lateral.

```html
<aside>
  <h3>Artículos relacionados</h3>
  <ul>
    <li><a href="#">Cómo aprender HTML</a></li>
    <li><a href="#">Guía de CSS</a></li>
  </ul>
</aside>
```

**Casos de uso:** barras laterales, publicidades, contenido relacionado, notas al margen.

---

### Resumen visual de la estructura semántica

```
┌────────────────────────────────────┐
│              <header>              │
│   logo + nombre + <nav> principal  │
├────────────────────────────────────┤
│                                    │
│             <main>                 │
│  ┌──────────────────┐  ┌────────┐  │
│  │    <section>     │  │<aside> │  │
│  │  ┌────────────┐  │  │        │  │
│  │  │ <article>  │  │  │        │  │
│  │  └────────────┘  │  │        │  │
│  └──────────────────┘  └────────┘  │
│                                    │
├────────────────────────────────────┤
│              <footer>              │
└────────────────────────────────────┘
```

---

## 3. Semántica en etiquetas de texto

No solo la estructura es semántica. Las etiquetas de texto también comunican significado.

---

### `<strong>` vs `<b>` — importancia

```html
<strong>Advertencia:</strong> este proceso no se puede deshacer.
<b>Ingredientes</b> <!-- negrita tipográfica, sin énfasis de importancia -->
```

| Etiqueta   | Semántica                           |
|------------|-------------------------------------|
| `<strong>` | Contenido de **alta importancia**   |
| `<b>`      | Negrita tipográfica sin semántica   |

---

### `<em>` vs `<i>` — énfasis

```html
<em>Definitivamente</em> tenés que probarlo.   <!-- énfasis en la entonación -->
<i>El Señor de los Anillos</i> es mi libro favorito. <!-- título de obra, término técnico -->
```

| Etiqueta | Semántica                                           |
|----------|-----------------------------------------------------|
| `<em>`   | **Énfasis** en el contenido, afecta entonación      |
| `<i>`    | Cursiva tipográfica: obras, términos, frases idiomáticas |

---

### `<del>` vs `<s>` — texto eliminado

```html
<del>Texto que fue eliminado del documento.</del>  <!-- borrado con significado editorial -->
<s>Precio viejo: $500</s>                          <!-- ya no relevante, sin historial editorial -->
```

---

### `<ins>` — texto insertado

Complementa a `<del>`. Indica texto que fue agregado al documento.

```html
<p>El evento es el <del>martes</del> <ins>miércoles</ins> 5 de mayo.</p>
```

---

### `<abbr>` — abreviatura o acrónimo

El atributo `title` provee la forma completa. Al pasar el mouse aparece un tooltip.

```html
<p>Estudiamos <abbr title="HyperText Markup Language">HTML</abbr> y <abbr title="Cascading Style Sheets">CSS</abbr>.</p>
```

---

### `<time>` — fechas y horas

Marca fechas u horas de forma semántica para que las máquinas puedan procesarlas.

```html
<p>Publicado el <time datetime="2026-05-02">2 de mayo de 2026</time>.</p>
<p>El evento empieza a las <time datetime="18:00">6 de la tarde</time>.</p>
```

El atributo `datetime` usa el formato estándar ISO 8601: `YYYY-MM-DD` o `HH:MM`.

---

### `<address>` — información de contacto

Marca información de contacto del autor o del dueño del contenido cercano.

```html
<address>
  <p>Empresa Ejemplo S.A.</p>
  <p>Av. Corrientes 1234, Buenos Aires</p>
  <p><a href="mailto:info@empresa.com">info@empresa.com</a></p>
</address>
```

---

### `<blockquote>` y `<q>` — citas

```html
<!-- Cita en bloque (larga, de otra fuente) -->
<blockquote cite="https://fuente.com">
  <p>El diseño no es solo cómo se ve, sino cómo funciona.</p>
</blockquote>

<!-- Cita en línea (corta, dentro del texto) -->
<p>Como dijo alguien, <q>el código es poesía</q>.</p>
```

---

### `<cite>` — referencia a una obra

Marca el título de una obra citada: libro, película, canción, etc.

```html
<p>El diseño se explica en <cite>The Design of Everyday Things</cite>.</p>
```

---

### `<figure>` y `<figcaption>` — contenido con pie de ilustración

Agrupa contenido multimedia (imagen, código, gráfico) con su descripción.

```html
<figure>
  <img src="diagrama.png" alt="Diagrama de la arquitectura" />
  <figcaption>Fig. 1 — Arquitectura del sistema.</figcaption>
</figure>
```

`<figure>` es semántico: indica que el contenido es una ilustración referenciada desde el texto principal. `<figcaption>` es el pie de esa ilustración.

---

### `<details>` y `<summary>` — contenido expandible

Crea un widget desplegable nativo sin necesidad de JavaScript.

```html
<details>
  <summary>¿Cuánto tarda el envío?</summary>
  <p>El envío estándar tarda entre 3 y 5 días hábiles.</p>
</details>
```

`<summary>` es el título visible. Al hacer clic se expande y muestra el contenido de `<details>`.

---

## 4. Semántica en formularios

Los formularios también tienen elementos semánticos que mejoran la accesibilidad.

---

### `<fieldset>` y `<legend>`

Agrupa campos relacionados dentro de un formulario.

```html
<fieldset>
  <legend>Datos personales</legend>

  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</fieldset>
```

`<legend>` describe el grupo de campos. Los lectores de pantalla lo anuncian antes de leer cada campo del grupo.

---

### `<label>` con `for`

Asociar explícitamente el `<label>` al campo con `for` e `id` es fundamental para la accesibilidad.

```html
<!-- Correcto: al hacer clic en el label, se activa el input -->
<label for="usuario">Usuario:</label>
<input type="text" id="usuario" name="usuario" />

<!-- También válido: el input dentro del label (asociación implícita) -->
<label>
  Usuario:
  <input type="text" name="usuario" />
</label>
```

---

## 5. Atributos semánticos comunes

Algunos atributos le agregan semántica a cualquier elemento.

| Atributo      | Función                                                       |
|---------------|---------------------------------------------------------------|
| `lang`        | Idioma del contenido. Heredado de `<html>`, puede sobreescribirse en cualquier elemento |
| `title`       | Información adicional. Aparece como tooltip al pasar el mouse |
| `aria-label`  | Etiqueta descriptiva para tecnologías de asistencia cuando no hay texto visible |
| `aria-hidden` | Oculta el elemento a los lectores de pantalla (`true`/`false`) |
| `role`        | Define el rol semántico explícito (cuando la etiqueta nativa no alcanza) |
| `alt`         | Texto alternativo de imágenes — semántica de accesibilidad    |

```html
<!-- Botón sin texto visible: necesita aria-label -->
<button aria-label="Cerrar menú">
  <img src="icono-x.svg" alt="" />
</button>

<!-- Elemento decorativo oculto a lectores de pantalla -->
<span aria-hidden="true">★★★★☆</span>

<!-- Frase en otro idioma -->
<p>El famoso dicho <span lang="la">carpe diem</span> significa "aprovecha el día".</p>
```

---

## 6. `<div>` y `<span>` — cuándo usarlos

`<div>` y `<span>` no tienen semántica propia: son **contenedores genéricos**.

**Usarlos cuando:**
- No existe ninguna etiqueta semántica que describa mejor el contenido.
- Solo se necesita un punto de anclaje para aplicar estilos CSS o JavaScript.

**No usarlos cuando:**
- El contenido es navegación → `<nav>`
- El contenido es un artículo independiente → `<article>`
- El contenido es un bloque temático → `<section>`
- El contenido es encabezado → `<header>`
- El contenido es pie de página → `<footer>`
- Es texto importante → `<strong>`
- Es texto con énfasis → `<em>`

---
