# Apuntes CSS — Modelo de Cajas (Box Model)

---

## 1. ¿Qué es el modelo de cajas?

En CSS, **cada elemento HTML es una caja rectangular**. El modelo de cajas (Box Model) describe cómo se calcula el espacio que ocupa esa caja y cómo se compone.

Comprender el modelo de cajas es fundamental porque controla el tamaño real de los elementos, cómo se ubican en la página y cómo se relacionan entre sí.

---

## 2. Las cuatro capas de la caja

Toda caja CSS se compone de cuatro capas concéntricas, de adentro hacia afuera:

```
┌──────────────────────────────────────────────┐
│                   margin                     │
│   ┌──────────────────────────────────────┐   │
│   │                border                │   │
│   │   ┌──────────────────────────────┐   │   │
│   │   │            padding           │   │   │
│   │   │   ┌──────────────────────┐   │   │   │
│   │   │   │      contenido       │   │   │   │
│   │   │   │   (width × height)   │   │   │   │
│   │   │   └──────────────────────┘   │   │   │
│   │   └──────────────────────────────┘   │   │
│   └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

| Capa          | Descripción                                                           |
|---------------|-----------------------------------------------------------------------|
| **Contenido** | El área donde se renderiza el texto, imagen u otro contenido          |
| **Padding**   | Espacio entre el contenido y el borde. Hereda el color de fondo       |
| **Border**    | El borde que rodea el padding y el contenido                          |
| **Margin**    | Espacio exterior al borde. Siempre es transparente                    |

> Los detalles de cómo controlar cada capa están en el archivo **06-margenes padding y bordes.md**.

---

## 3. `width` y `height` — dimensiones del contenido

Por defecto `width` y `height` definen el tamaño del **área de contenido** solamente.

```css
div {
  width: 300px;
  height: 150px;
}
```

### Valores posibles

```css
/* Unidades fijas */
width: 300px;
width: 20rem;

/* Relativos al padre */
width: 50%;
width: 100%;

/* Relativo al viewport */
width: 50vw;
height: 100vh;

/* Ajuste al contenido */
width: auto;       /* por defecto: ocupa todo el ancho disponible (en bloques) */
width: max-content; /* el mínimo para que el contenido no se corte */
width: min-content; /* el mínimo posible sin desbordamiento */
width: fit-content; /* como max-content pero sin exceder el contenedor */
```

### `min-width`, `max-width`, `min-height`, `max-height`

Establecen límites para que el elemento no quede ni demasiado pequeño ni demasiado grande.

```css
.contenedor {
  width: 100%;
  max-width: 1200px;   /* nunca más ancho que 1200px */
  min-width: 320px;    /* nunca más angosto que 320px */
  margin: 0 auto;
}

.imagen {
  width: 100%;
  max-width: 600px;
  height: auto;
}

section {
  min-height: 100vh;   /* al menos la altura de la ventana */
}
```

---

## 4. `box-sizing` — cómo se calcula el tamaño total

Este es **el concepto más importante** del modelo de cajas en la práctica cotidiana.

### El problema con `content-box`

Por defecto, `width` y `height` solo miden el **contenido**. El padding y el borde se **suman por fuera**, haciendo que el elemento termine siendo más grande de lo que se definió.

```css
.caja {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
/*
  Tamaño real:
  - ancho = 300 (contenido) + 20 + 20 (padding) + 2 + 2 (borde) = 344px
  - Se definió 300px pero el elemento mide 344px
*/
```

```
content-box:

  ← 300px (width) →
  ┌──────────────────────────────────┐
  │            contenido             │
  └──────────────────────────────────┘
  ← padding 20px →│← padding 20px →
  ← border 2px ──────────────── 2px →
  ← tamaño real: 344px ──────────── →
```

### La solución: `border-box`

Con `border-box`, `width` y `height` incluyen el padding y el borde. El contenido se encoge si es necesario, pero el tamaño **total del elemento** es exactamente el que se definió.

```css
.caja {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
/*
  Tamaño real = 300px exactos
  El contenido se reduce: 300 - 40 (padding) - 4 (borde) = 256px de contenido
*/
```

```
border-box:

  ←────────── 300px (tamaño real) ──────────→
  ┌──────────────────────────────────────────┐
  │  padding   ┌────────────────┐   padding  │
  │  20px      │   contenido    │   20px     │
  │            │    (256px)     │            │
  │            └────────────────┘            │
  └──────────────────────────────────────────┘
              borde: 2px en cada lado
```

---

### Reset global recomendado

La práctica estándar en todo proyecto CSS moderno es aplicar `border-box` a todos los elementos desde el inicio:

```css
* {
  box-sizing: border-box;
}
```

Esto elimina uno de los errores más frecuentes al trabajar con CSS: elementos que "no entran" donde deberían porque el padding y el borde se suman por fuera.

---

### Comparación directa

```css
/* Ambas cajas tienen width: 200px y padding: 20px */

.content-box {
  box-sizing: content-box;   /* tamaño real: 240px */
  width: 200px;
  padding: 20px;
}

.border-box {
  box-sizing: border-box;    /* tamaño real: 200px */
  width: 200px;
  padding: 20px;
}
```

| Valor         | `width` incluye                      | Tamaño real si `width:200px` + `padding:20px` |
|---------------|--------------------------------------|-----------------------------------------------|
| `content-box` | Solo el contenido                    | 240px                                         |
| `border-box`  | Contenido + padding + borde          | 200px exactos                                 |

---

## 5. Tipos de caja según `display`

El comportamiento de la caja (cómo ocupa espacio y cómo interactúa con otros elementos) lo define la propiedad `display`.

Los dos tipos de caja básicos son:

### Caja de bloque (`block`)

- Ocupa **todo el ancho disponible** de su contenedor.
- Siempre genera un **salto de línea** antes y después.
- `width` y `height` se pueden controlar.
- El `padding` y `margin` funcionan en los cuatro lados.

```
[   bloque A   (ancho completo)   ]
[   bloque B   (ancho completo)   ]
```

Elementos que son bloque por defecto: `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<ul>`, `<ol>`, `<li>`, `<form>`, `<table>`.

---

### Caja en línea (`inline`)

- Ocupa **solo el espacio de su contenido**.
- **No genera salto de línea**: fluye con el texto.
- `width` y `height` **no tienen efecto**.
- `padding` y `margin` solo funcionan horizontalmente (los verticales no empujan otros elementos).

```
texto normal [inline A] más texto [inline B] continúa aquí
```

Elementos en línea por defecto: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`, `<label>`, `<button>`.

---

### Caja en línea-bloque (`inline-block`)

- Fluye con el texto como `inline` (no genera salto de línea).
- Pero acepta `width`, `height` y márgenes verticales como `block`.

```
texto [▪ inline-block con tamaño ▪] más texto continúa
```

> La propiedad `display` se trata en profundidad en el archivo **07-display.md**.

---

## 6. Desbordamiento — `overflow`

Controla qué pasa cuando el contenido es más grande que la caja.

```css
div { overflow: visible; }  /* el contenido desborda y se ve fuera de la caja (por defecto) */
div { overflow: hidden; }   /* el contenido desbordante se recorta y no se ve */
div { overflow: scroll; }   /* siempre muestra barras de scroll */
div { overflow: auto; }     /* muestra barras de scroll solo si el contenido desborda */
div { overflow: clip; }     /* recorta sin crear contexto de formato de bloque */
```

### Por eje

```css
div { overflow-x: auto; }    /* scroll horizontal */
div { overflow-y: hidden; }  /* recortar vertical */
```

### Casos de uso comunes

```css
/* Tabla responsiva */
.tabla-contenedor {
  overflow-x: auto;
}

/* Recortar imagen que desborda su contenedor redondeado */
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}

/* Truncar texto con puntos suspensivos */
.titulo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

## 7. `visibility` — visibilidad sin quitar el espacio

A diferencia de `display: none` (que saca el elemento del flujo), `visibility: hidden` **oculta el elemento pero mantiene su espacio**.

```css
.elemento { visibility: visible; }  /* visible (por defecto) */
.elemento { visibility: hidden; }   /* invisible, pero sigue ocupando espacio */
.elemento { visibility: collapse; } /* como hidden en elementos normales; colapsa filas/columnas en tablas */
```

```
display: none    → [    espacio liberado    ] otros elementos suben
visibility: hidden → [   □ invisible □   ] el espacio permanece
```

---

## 8. Resumen del modelo de cajas

| Concepto           | Descripción                                                       |
|--------------------|-------------------------------------------------------------------|
| Contenido          | Área de `width` × `height`                                        |
| Padding            | Relleno interno (con fondo); ver 06-margenes padding y bordes.md  |
| Border             | Borde de la caja; ver 06-margenes padding y bordes.md             |
| Margin             | Espacio externo transparente; ver 06-margenes padding y bordes.md |
| `box-sizing: content-box` | `width` = solo contenido (por defecto, evitar)           |
| `box-sizing: border-box`  | `width` = contenido + padding + borde (recomendado)      |
| `overflow`         | Qué pasa cuando el contenido supera la caja                       |
| `visibility`       | Ocultar sin quitar el espacio en el flujo                         |

---
