# Apuntes CSS — Selectores

---

## 1. ¿Qué es un selector?

Un selector es la parte de una regla CSS que indica **a qué elemento o elementos HTML se aplican los estilos**.

```css
selector {
  propiedad: valor;
}
```

```css
/* "p" es el selector — aplica a todos los <p> del documento */
p {
  color: #333;
  line-height: 1.6;
}
```

Los selectores pueden apuntar a elementos por su **etiqueta**, su **clase**, su **id**, su **estado**, su **posición** en el árbol HTML, y más.

---

## 2. Selector de tipo (etiqueta)

Selecciona **todos los elementos** de un tipo de etiqueta.

```css
h1     { color: #0d3b6e; }
p      { font-size: 1rem; }
a      { text-decoration: none; }
button { cursor: pointer; }
```

**Cuándo usarlo:** estilos base y resets. Para estilos específicos, preferir clases.

---

## 3. Selector de clase (`.`)

Selecciona todos los elementos que tienen ese valor en su atributo `class`.

```html
<p class="destacado">Este párrafo está destacado.</p>
<span class="destacado">Este texto también.</span>
```

```css
.destacado {
  font-weight: bold;
  color: #e63946;
}
```

Un elemento puede tener **múltiples clases** separadas por espacio:

```html
<div class="tarjeta sombra activa">...</div>
```

```css
.tarjeta   { border: 1px solid #ccc; border-radius: 8px; }
.sombra    { box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.activa    { border-color: #0d3b6e; }
```

**El selector más usado en la práctica.** Permite reutilización y evita la especificidad alta de los ids.

---

## 4. Selector de ID (`#`)

Selecciona el elemento con ese valor en su atributo `id`. En un documento, cada `id` debe ser **único**.

```html
<header id="cabecera-principal">...</header>
```

```css
#cabecera-principal {
  background-color: #0d3b6e;
  color: white;
}
```

**Cuándo usarlo:** en CSS se desaconseja su uso habitual porque tiene una especificidad muy alta que complica el mantenimiento. Es más útil para anclas de navegación (`<a href="#cabecera-principal">`) y para JavaScript (`document.getElementById`).

---

## 5. Selector universal (`*`)

Selecciona **todos los elementos** del documento.

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

**Cuándo usarlo:** resets globales al inicio del archivo CSS. Úsarlo con moderación en otros contextos porque puede impactar el rendimiento.

---

## 6. Selectores de atributo

Seleccionan elementos según el valor de sus atributos.

```css
/* Tiene el atributo (sin importar el valor) */
input[required]         { border-left: 3px solid red; }

/* El atributo es exactamente ese valor */
input[type="email"]     { background-image: url("icono-email.svg"); }
input[type="password"]  { letter-spacing: 0.2em; }

/* El atributo contiene esa palabra (separada por espacios) */
[class~="activo"]       { background-color: #e8f4fd; }

/* El atributo empieza con ese valor */
a[href^="https"]        { color: green; }

/* El atributo termina con ese valor */
a[href$=".pdf"]         { color: red; }

/* El atributo contiene esa cadena (en cualquier posición) */
a[href*="ejemplo"]      { font-style: italic; }
```

---

## 7. Selectores combinadores

Los combinadores expresan **relaciones entre elementos** en el árbol HTML.

---

### Descendiente (espacio)

Selecciona todos los elementos B que estén **dentro** de A, sin importar la profundidad.

```css
/* Todo <a> que esté dentro de <nav>, a cualquier nivel */
nav a {
  color: white;
  text-decoration: none;
}
```

```html
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>  <!-- ✓ seleccionado -->
  </ul>
</nav>
<a href="/otro">Otro enlace</a>  <!-- ✗ no seleccionado -->
```

---

### Hijo directo (`>`)

Selecciona solo los elementos B que sean **hijos directos** de A (un nivel de profundidad).

```css
/* Solo los <li> que son hijos directos de <ul> */
ul > li {
  list-style: none;
  padding: 0.5rem 0;
}
```

```html
<ul>
  <li>Directo ✓</li>       <!-- seleccionado -->
  <li>
    Directo ✓
    <ul>
      <li>Nieto ✗</li>     <!-- no seleccionado -->
    </ul>
  </li>
</ul>
```

---

### Hermano adyacente (`+`)

Selecciona el elemento B que viene **inmediatamente después** de A y comparten el mismo padre.

```css
/* El <p> que viene justo después de un <h2> */
h2 + p {
  font-size: 1.1rem;
  color: #555;
}
```

---

### Hermanos generales (`~`)

Selecciona **todos** los elementos B que vienen después de A y comparten el mismo padre (no solo el inmediato).

```css
/* Todos los <p> que vengan después de un <h2> en el mismo nivel */
h2 ~ p {
  margin-left: 1rem;
}
```

---

### Resumen de combinadores

| Combinador | Sintaxis  | Selecciona                              |
|------------|-----------|-----------------------------------------|
| Descendiente | `A B`   | Todo B dentro de A (cualquier nivel)    |
| Hijo directo | `A > B` | Solo B hijo inmediato de A              |
| Hermano adyacente | `A + B` | El primer B inmediatamente después de A |
| Hermanos generales | `A ~ B` | Todos los B después de A (mismo padre)  |

---

## 8. Pseudo-clases

Las pseudo-clases seleccionan elementos según su **estado** o **posición** en el DOM.  
Se escriben con dos puntos `:` después del selector.

---

### Estados de interacción

```css
/* Al pasar el mouse por encima */
a:hover         { color: #e63946; text-decoration: underline; }
button:hover    { background-color: #1a5276; }

/* Cuando el elemento tiene el foco (teclado o click) */
input:focus     { outline: 2px solid #0d3b6e; border-color: #0d3b6e; }
a:focus         { outline: 2px dashed #0d3b6e; }

/* Enlace ya visitado */
a:visited       { color: purple; }

/* Enlace sin visitar */
a:link          { color: #0d3b6e; }

/* Al hacer click (mientras se presiona) */
button:active   { transform: scale(0.98); }
```

---

### Estados de formulario

```css
input:disabled          { background-color: #eee; cursor: not-allowed; }
input:enabled           { background-color: white; }
input:checked           { accent-color: #0d3b6e; }
input:required          { border-left: 3px solid #e63946; }
input:optional          { border-left: 3px solid #ccc; }
input:valid             { border-color: green; }
input:invalid           { border-color: red; }
input:placeholder-shown { background-color: #fafafa; }
```

---

### Posición entre hermanos

```css
/* El primer hijo de su padre */
li:first-child  { font-weight: bold; }

/* El último hijo de su padre */
li:last-child   { border-bottom: none; }

/* El n-ésimo hijo (1 = primero) */
li:nth-child(2)         { color: red; }     /* el segundo */
li:nth-child(odd)       { background: #f5f5f5; } /* impares */
li:nth-child(even)      { background: white; }   /* pares */
li:nth-child(3n)        { color: blue; }    /* cada 3 elementos */
li:nth-child(3n + 1)    { color: green; }   /* 1º, 4º, 7º... */

/* El último n-ésimo hijo (contando desde el final) */
li:nth-last-child(1)    { font-style: italic; }

/* El único hijo de su padre */
p:only-child            { text-align: center; }
```

---

### Posición por tipo

Similar a los anteriores, pero cuenta solo entre elementos del **mismo tipo de etiqueta**.

```css
/* El primer <p> de su padre (sin contar otros elementos) */
p:first-of-type  { font-size: 1.2rem; }

/* El último <p> de su padre */
p:last-of-type   { margin-bottom: 0; }

/* El n-ésimo <p> de su padre */
p:nth-of-type(2) { color: gray; }
```

---

### Otras pseudo-clases

```css
/* Elemento que NO cumple el selector entre paréntesis */
li:not(:last-child)     { border-bottom: 1px solid #eee; }
input:not([type="submit"]) { border: 1px solid #ccc; }

/* Tiene algún hijo que cumpla el selector */
section:has(> h2)       { padding-top: 2rem; }

/* Elemento que está siendo objetivo de un ancla (#id en la URL) */
section:target          { background-color: #fffbe6; }

/* Elemento que puede recibir foco (no solo links e inputs) */
[tabindex]:focus-within { outline: 2px solid blue; }

/* Algún descendiente tiene el foco */
form:focus-within       { box-shadow: 0 0 0 3px rgba(13,59,110,0.2); }
```

---

## 9. Pseudo-elementos

Los pseudo-elementos crean o seleccionan **partes virtuales** de un elemento que no existen como nodos en el HTML.  
Se escriben con doble dos puntos `::` (aunque el navegador también acepta `:`).

```css
/* Primera letra del elemento */
p::first-letter {
  font-size: 3rem;
  float: left;
  line-height: 1;
  margin-right: 0.1em;
}

/* Primera línea del elemento */
p::first-line {
  font-weight: bold;
}

/* Contenido antes del elemento (generado por CSS) */
.precio::before {
  content: "$";
  color: gray;
}

/* Contenido después del elemento (generado por CSS) */
.requerido::after {
  content: " *";
  color: red;
}

/* Texto seleccionado por el usuario */
::selection {
  background-color: #0d3b6e;
  color: white;
}

/* Placeholder de inputs */
input::placeholder {
  color: #aaa;
  font-style: italic;
}
```

---

## 10. Especificidad

Cuando múltiples reglas aplican al mismo elemento y a la misma propiedad, la **especificidad** determina cuál gana.

### Cálculo de especificidad

Cada selector suma puntos en tres columnas `(A, B, C)`:

| Tipo de selector            | Columna | Valor  |
|-----------------------------|---------|--------|
| Estilos en línea (`style=`) | A       | 1,0,0  |
| IDs (`#id`)                 | A       | 0,1,0  |
| Clases (`.clase`)           | B       | 0,1,0  |
| Pseudo-clases (`:hover`)    | B       | 0,1,0  |
| Atributos (`[type="text"]`) | B       | 0,1,0  |
| Tipos de elemento (`p`, `h1`) | C     | 0,0,1  |
| Pseudo-elementos (`::before`) | C     | 0,0,1  |
| Universal (`*`)             | —       | 0,0,0  |

> **Nota:** IDs y clases suman en columnas separadas. `0,1,0` (clase) nunca vence a `1,0,0` (ID), sin importar cuántas clases se acumulen.

### Ejemplos

```css
p                   /* (0,0,1) */
.destacado          /* (0,1,0) */
p.destacado         /* (0,1,1) */
#cabecera           /* (1,0,0) */
#cabecera p         /* (1,0,1) */
#cabecera .nav a    /* (1,1,1) */
```

```css
/* Caso de conflicto */
p            { color: red; }   /* (0,0,1) */
.texto       { color: blue; }  /* (0,1,0) → gana esta */
```

```html
<p class="texto">¿De qué color soy?</p>  <!-- azul -->
```

---

### `!important`

Anula la especificidad y fuerza que esa declaración gane siempre.

```css
p { color: red !important; }
#id .clase p { color: blue; } /* pierde aunque tenga mayor especificidad */
```

**Evitar `!important` en lo posible.** Cuando se abusa de él, los conflictos se vuelven muy difíciles de depurar. Usarlo solo en casos excepcionales, como overrides de librerías externas.

---

### Regla mnemotécnica

Cuanto más específico es el selector, más difícil es sobreescribirlo. Para mantener el CSS manejable:

1. Usar principalmente **clases** (`.clase`) para estilizar.
2. Evitar **IDs** en CSS.
3. Evitar estilos **en línea**.
4. Evitar **`!important`**.

---

## 11. La cascada y el orden

Cuando la especificidad es igual, **gana la regla que aparece más abajo** en el archivo.

```css
p { color: red; }
p { color: blue; } /* gana esta: mismo selector, más abajo */
```

Esto también aplica cuando se importan o vinculan varios archivos CSS: el que se enlaza último tiene prioridad ante igualdad de especificidad.

---

## 12. Resumen de tipos de selectores

| Selector               | Sintaxis               | Ejemplo                          |
|------------------------|------------------------|----------------------------------|
| Tipo / etiqueta        | `elemento`             | `p`, `h1`, `a`                   |
| Clase                  | `.nombre`              | `.tarjeta`, `.destacado`         |
| ID                     | `#nombre`              | `#cabecera`, `#formulario`       |
| Universal              | `*`                    | `*`                              |
| Atributo               | `[attr]`, `[attr="v"]` | `[required]`, `[type="email"]`   |
| Descendiente           | `A B`                  | `nav a`                          |
| Hijo directo           | `A > B`                | `ul > li`                        |
| Hermano adyacente      | `A + B`                | `h2 + p`                         |
| Hermanos generales     | `A ~ B`                | `h2 ~ p`                         |
| Pseudo-clase           | `:pseudo`              | `:hover`, `:nth-child(2)`        |
| Pseudo-elemento        | `::pseudo`             | `::before`, `::first-letter`     |

---
