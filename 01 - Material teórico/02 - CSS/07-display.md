# Apuntes CSS — Display

---

## 1. ¿Qué es `display`?

`display` es la propiedad CSS que controla **cómo un elemento genera su caja** y cómo esa caja interactúa con los elementos que la rodean.

Es una de las propiedades más importantes de CSS: cambia completamente el comportamiento del elemento en el flujo del documento.

```css
elemento { display: valor; }
```

---

## 2. `display: block`

El elemento ocupa **todo el ancho disponible** de su contenedor y genera un salto de línea antes y después de él.

```css
span { display: block; }  /* convierte un inline en bloque */
```

**Características:**
- Ocupa el 100% del ancho del padre por defecto.
- Genera salto de línea (cada bloque arranca en una nueva línea).
- Acepta `width`, `height`, `margin` y `padding` en los cuatro lados.

```
[    bloque A — ancho completo    ]
[    bloque B — ancho completo    ]
[    bloque C — ancho completo    ]
```

**Elementos que son `block` por defecto:**  
`<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, `<main>`, `<aside>`, `<ul>`, `<ol>`, `<li>`, `<form>`, `<table>`, `<figure>`, `<blockquote>`, `<hr>`.

---

## 3. `display: inline`

El elemento ocupa **solo el espacio de su contenido** y fluye dentro del texto sin generar saltos de línea.

```css
div { display: inline; }  /* convierte un bloque en inline */
```

**Características:**
- No genera salto de línea.
- `width` y `height` **no tienen efecto**.
- `margin` y `padding` **horizontales** funcionan.
- `margin` y `padding` **verticales** visualmente se aplican pero **no empujan** a los elementos vecinos.

```
texto normal [inline A] más texto [inline B] sigue en la misma línea
```

**Elementos `inline` por defecto:**  
`<span>`, `<a>`, `<strong>`, `<em>`, `<b>`, `<i>`, `<u>`, `<s>`, `<mark>`, `<abbr>`, `<code>`, `<kbd>`, `<label>`, `<cite>`, `<q>`.

---

## 4. `display: inline-block`

**Híbrido:** fluye como `inline` (sin salto de línea) pero acepta `width`, `height` y márgenes verticales como `block`.

```css
span { display: inline-block; }
a { display: inline-block; width: 120px; text-align: center; }
```

**Características:**
- No genera salto de línea (vive junto al texto o a otros inline).
- Acepta `width`, `height`, `margin` y `padding` en todos los lados.
- Útil para botones, badges, íconos con tamaño definido dentro de texto.

```
texto  [▪ bloque con tamaño ▪]  más texto  [▪ otro ▪]  continúa
```

**Elementos `inline-block` por defecto:**  
`<img>`, `<input>`, `<button>`, `<select>`, `<textarea>`.

---

## 5. `display: none`

Elimina completamente el elemento del flujo del documento. **No ocupa espacio**: los demás elementos actúan como si no existiera.

```css
.oculto  { display: none; }
.visible { display: block; }
```

```
Con display: block:   [A]  [B]  [C]  — B ocupa espacio
Con display: none:    [A]  [C]  — B desapareció por completo
```

> Diferencia con `visibility: hidden`: este último oculta el elemento pero mantiene su espacio en el layout.

**Uso típico:** mostrar/ocultar menús, modales, tooltips o secciones con JavaScript o con pseudo-clases.

```css
/* Menú desplegable oculto por defecto */
.menu { display: none; }

/* Se muestra al hacer hover en el padre */
.nav-item:hover .menu { display: block; }
```

---

## 6. `display: flex`

Activa el **modelo Flexbox** en el elemento. Sus hijos directos se convierten en flex items y se pueden distribuir y alinear con gran control en una dimensión (fila o columna).

```css
.contenedor { display: flex; }
```

Ver el archivo **09-layout-flexbox.md** para toda la documentación de Flexbox.

---

## 7. `display: inline-flex`

Igual que `flex` pero el contenedor en sí se comporta como `inline` (no genera salto de línea).

```css
.badge { display: inline-flex; align-items: center; gap: 0.5rem; }
```

---

## 8. `display: grid`

Activa el **modelo CSS Grid** en el elemento. Sus hijos directos se convierten en grid items y se pueden posicionar en una cuadrícula de filas y columnas.

```css
.contenedor { display: grid; }
```

---

## 9. `display: inline-grid`

Igual que `grid` pero el contenedor se comporta como `inline`.

```css
.mini-tabla { display: inline-grid; grid-template-columns: 1fr 1fr; }
```

---

## 10. `display: table` y valores relacionados

Permiten que elementos que no son tablas se comporten como si fueran partes de una tabla HTML. Raramente necesarios hoy con Flexbox y Grid.

```css
.tabla     { display: table; }
.fila      { display: table-row; }
.celda     { display: table-cell; vertical-align: middle; }
.encabezado{ display: table-header-group; }
.pie       { display: table-footer-group; }
.cuerpo    { display: table-row-group; }
.columna   { display: table-column; }
.grupo-col { display: table-column-group; }
.caption   { display: table-caption; }
```

**Cuándo usarlo hoy:** básicamente nunca. Quedó como legado. Para alinear verticalmente en contextos muy específicos (como emails HTML) puede ser útil `display: table-cell` + `vertical-align: middle`.

---

## 11. `display: list-item`

El elemento se comporta como un `<li>`: genera una caja de bloque con un marcador (viñeta o número).

```css
div { display: list-item; list-style-type: disc; }
```

---

## 12. `display: contents`

El elemento en sí **desaparece como caja** pero sus hijos siguen participando en el layout como si fueran hijos directos del padre del elemento.

```css
.wrapper { display: contents; }
```

```html
<ul style="display: flex; gap: 1rem;">
  <div style="display: contents">  <!-- la caja del div desaparece -->
    <li>Item 1</li>   <!-- se comportan como hijos directos del ul -->
    <li>Item 2</li>
  </div>
</ul>
```

**Uso:** cuando se necesita un contenedor semántico en el HTML pero que no genere caja en el layout (útil con Flexbox y Grid).

> Advertencia: `display: contents` elimina la caja de accesibilidad del elemento en algunos navegadores. Usarlo con cuidado en elementos con roles semánticos propios.

---

## 13. Resumen y comparación

| Valor            | Salto de línea | Acepta `width`/`height` | Acepta `margin`/`padding` vertical |
|------------------|----------------|-------------------------|-------------------------------------|
| `block`          | Sí             | Sí                      | Sí                                  |
| `inline`         | No             | No                      | No (se aplica visualmente pero no empuja) |
| `inline-block`   | No             | Sí                      | Sí                                  |
| `none`           | —              | —                       | — (no existe en el layout)          |
| `flex`           | Sí (el contenedor) | Sí                  | Sí                                  |
| `inline-flex`    | No             | Sí                      | Sí                                  |
| `grid`           | Sí (el contenedor) | Sí                  | Sí                                  |
| `inline-grid`    | No             | Sí                      | Sí                                  |
| `contents`       | —              | —                       | — (la caja no existe)               |

---

## 14. Cambiar `display` según el contexto

Es muy común cambiar `display` para adaptar elementos a diferentes contextos:

```css
/* Links de navegación como bloques para ocupar todo el ancho */
nav a {
  display: block;
  padding: 0.75rem 1.5rem;
}

/* Elementos de lista en línea para una barra horizontal */
nav li {
  display: inline-block;
}

/* Imagen como bloque para eliminar el espacio fantasma debajo */
img {
  display: block;
}

/* Hacer un div invisible manteniendo su espacio */
.placeholder {
  visibility: hidden;  /* no es display, pero relacionado */
}

/* Ocultar completamente en mobile */
@media (max-width: 768px) {
  .solo-desktop { display: none; }
}

/* Mostrar solo en mobile */
.solo-mobile { display: none; }
@media (max-width: 768px) {
  .solo-mobile { display: block; }
}
```

---

## 15. El espacio fantasma de `inline` e `inline-block`

Los elementos `inline` e `inline-block` respetan los **espacios en blanco del HTML** (saltos de línea, tabulaciones). Esto puede generar pequeños espacios no deseados entre elementos.

```html
<!-- Estos dos spans tendrán un espacio entre ellos -->
<span>Uno</span>
<span>Dos</span>
```

**Soluciones:**

```css
/* 1. Convertir el padre en flex (elimina el espacio fantasma) */
.contenedor { display: flex; }

/* 2. font-size: 0 en el padre y restaurar en los hijos */
.contenedor { font-size: 0; }
.contenedor span { font-size: 1rem; }
```

Con `display: flex` o `display: grid` este problema desaparece por completo, por eso se prefieren para layouts.

---
