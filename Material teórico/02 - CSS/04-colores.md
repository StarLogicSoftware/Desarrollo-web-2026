# Apuntes CSS — Colores

---

## 1. Propiedades que aceptan color

| Propiedad          | Qué colorea                                  |
|--------------------|----------------------------------------------|
| `color`            | El texto y los íconos del elemento           |
| `background-color` | El fondo del elemento                        |
| `border-color`     | El borde del elemento                        |
| `outline-color`    | El contorno (fuera del borde)                |
| `text-shadow`      | La sombra del texto                          |
| `box-shadow`       | La sombra de la caja                         |
| `caret-color`      | El cursor de texto en inputs                 |
| `accent-color`     | El color de controles de formulario nativos  |

```css
p       { color: #333; }
section { background-color: #f5f5f5; }
input   { border-color: #ccc; caret-color: #0d3b6e; }
```

---

## 2. Colores por nombre

CSS define 140 colores con nombre en inglés. Son los más sencillos de escribir pero ofrecen poco control fino.

```css
color: red;
color: blue;
color: green;
color: white;
color: black;
color: gray;
color: orange;
color: tomato;
color: skyblue;
color: coral;
color: gold;
color: transparent;   /* completamente invisible, pero ocupa espacio */
color: currentColor;  /* toma el valor de la propiedad color del mismo elemento */
```

### `currentColor`

Valor especial que referencia el `color` del texto del elemento. Útil para que bordes, sombras o íconos hereden el color del texto automáticamente.

```css
.boton {
  color: #0d3b6e;
  border: 2px solid currentColor; /* mismo color que el texto */
}
```

---

## 3. Hexadecimal (`#rrggbb`)

El formato más extendido. Combina rojo, verde y azul en base 16.  
Cada par va de `00` (mínimo/oscuro) a `ff` (máximo/brillante).

```css
color: #ff0000;   /* rojo puro */
color: #00ff00;   /* verde puro */
color: #0000ff;   /* azul puro */
color: #000000;   /* negro */
color: #ffffff;   /* blanco */
color: #0d3b6e;   /* azul marino */
color: #e63946;   /* rojo coral */
color: #5bb8e8;   /* celeste */
```

### Forma corta (`#rgb`)

Cuando cada par tiene dos letras iguales, se puede abreviar a tres caracteres:

```css
color: #f00;   /* = #ff0000 */
color: #fff;   /* = #ffffff */
color: #000;   /* = #000000 */
color: #09c;   /* = #0099cc */
```

### Con canal alfa (`#rrggbbaa`)

El cuarto par controla la **opacidad** de `00` (invisible) a `ff` (completamente opaco):

```css
color: #0d3b6e80;   /* azul marino al ~50% de opacidad */
color: #ff000033;   /* rojo al ~20% */
color: #000000cc;   /* negro al ~80% */
```

También existe la forma corta `#rgba`:

```css
color: #0009;   /* = #00000099 — negro semitransparente */
```

---

## 4. `rgb()` y `rgba()`

Define el color con valores numéricos del `0` al `255` para rojo, verde y azul.

```css
color: rgb(255, 0, 0);       /* rojo puro */
color: rgb(0, 0, 255);       /* azul puro */
color: rgb(13, 59, 110);     /* azul marino */
color: rgb(230, 57, 70);     /* rojo coral */
color: rgb(255, 255, 255);   /* blanco */
color: rgb(0, 0, 0);         /* negro */
```

### `rgba()` — con canal alfa

Agrega un cuarto valor de **opacidad** de `0` (invisible) a `1` (completamente opaco):

```css
color: rgba(13, 59, 110, 1);      /* totalmente opaco */
color: rgba(13, 59, 110, 0.8);    /* 80% opaco */
color: rgba(13, 59, 110, 0.5);    /* 50% opaco */
color: rgba(13, 59, 110, 0.1);    /* 10% opaco */
color: rgba(0, 0, 0, 0);          /* completamente transparente */
```

### Sintaxis moderna con `/`

CSS moderno permite usar `rgb()` con espacios y `/` para el alfa (sin necesidad de `rgba`):

```css
color: rgb(13 59 110);          /* sin comas */
color: rgb(13 59 110 / 0.5);    /* con alfa */
color: rgb(13 59 110 / 50%);    /* con alfa en porcentaje */
```

---

## 5. `hsl()` y `hsla()`

Define el color en base a **matiz** (hue), **saturación** y **luminosidad**. Muy intuitivo para ajustar colores.

```css
/* hsl(matiz, saturación%, luminosidad%) */
color: hsl(0, 100%, 50%);      /* rojo puro */
color: hsl(120, 100%, 50%);    /* verde puro */
color: hsl(240, 100%, 50%);    /* azul puro */
color: hsl(210, 79%, 24%);     /* azul marino (#0d3b6e) */
color: hsl(355, 78%, 56%);     /* rojo coral (#e63946) */
```

| Componente     | Rango          | Descripción                                      |
|----------------|----------------|--------------------------------------------------|
| Matiz (hue)    | `0` – `360`    | Posición en el círculo cromático (0=rojo, 120=verde, 240=azul) |
| Saturación     | `0%` – `100%`  | 0% = gris, 100% = color puro                     |
| Luminosidad    | `0%` – `100%`  | 0% = negro, 50% = normal, 100% = blanco          |

### Ventaja de HSL para variantes de un color

Es muy fácil crear versiones más claras, más oscuras o menos saturadas:

```css
:root {
  --color-base: hsl(210, 79%, 24%);      /* azul marino */
  --color-claro: hsl(210, 79%, 50%);     /* mismo azul, más claro */
  --color-palido: hsl(210, 30%, 80%);    /* mismo azul, muy desaturado */
}
```

### `hsla()` — con canal alfa

```css
color: hsla(210, 79%, 24%, 0.5);    /* 50% de opacidad */
color: hsl(210 79% 24% / 0.5);      /* sintaxis moderna sin comas */
```

---

## 6. `opacity` — opacidad del elemento completo

A diferencia del canal alfa (que afecta solo al color), `opacity` aplica a **todo el elemento**: texto, fondo, bordes e hijos.

```css
.fondo-suave { opacity: 0.5; }    /* 50% de opacidad en todo */
.visible     { opacity: 1; }      /* completamente visible (por defecto) */
.invisible   { opacity: 0; }      /* invisible pero ocupa espacio */
```

> **Diferencia clave:** `rgba(0,0,0,0.5)` solo hace el fondo semitransparente. `opacity: 0.5` hace todo el elemento semitransparente, incluyendo el texto y los hijos.

---

## 7. Degradados (`gradient`)

Los degradados son imágenes generadas por CSS. Se usan como valor de `background-image` (no de `background-color`).

---

### `linear-gradient()` — degradado lineal

```css
/* De un color a otro (de arriba hacia abajo por defecto) */
background-image: linear-gradient(red, blue);

/* Con dirección */
background-image: linear-gradient(to right, red, blue);
background-image: linear-gradient(to bottom right, red, blue);
background-image: linear-gradient(45deg, red, blue);

/* Con múltiples colores */
background-image: linear-gradient(to right, #e63946, #f4a261, #2a9d8f);

/* Con paradas de color explícitas (color stops) */
background-image: linear-gradient(to right, red 0%, red 30%, blue 30%, blue 100%);

/* Degradado transparente (útil sobre imágenes) */
background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7));
```

---

### `radial-gradient()` — degradado radial

```css
/* Desde el centro hacia los bordes */
background-image: radial-gradient(circle, #5bb8e8, #0d3b6e);

/* Elipse por defecto */
background-image: radial-gradient(#f5f5f5, #cccccc);

/* Tamaño y posición */
background-image: radial-gradient(circle at top left, red, blue);
background-image: radial-gradient(circle 200px at center, red, transparent);

/* Con múltiples colores */
background-image: radial-gradient(circle, #e63946, #f4a261, #2a9d8f);
```

---

### `conic-gradient()` — degradado cónico

Gira alrededor de un punto central (como un gráfico de torta).

```css
background-image: conic-gradient(red, yellow, green, blue, red);

/* Gráfico de torta simple */
background-image: conic-gradient(#e63946 0% 25%, #f4a261 25% 50%, #2a9d8f 50% 75%, #0d3b6e 75% 100%);

/* Con rotación inicial */
background-image: conic-gradient(from 90deg, red, blue);
```

---

### `repeating-linear-gradient()` y `repeating-radial-gradient()`

Repiten el patrón del degradado de forma continua.

```css
/* Rayas diagonales */
background-image: repeating-linear-gradient(
  45deg,
  #f5f5f5 0px,
  #f5f5f5 10px,
  #ddd 10px,
  #ddd 20px
);

/* Círculos concéntricos */
background-image: repeating-radial-gradient(
  circle,
  #0d3b6e 0px,
  #0d3b6e 10px,
  #5bb8e8 10px,
  #5bb8e8 20px
);
```

---

## 8. Variables CSS para colores (`custom properties`)

Una práctica muy recomendada es definir los colores como variables en `:root`:

```css
:root {
  --color-primario:    #0d3b6e;
  --color-secundario:  #5bb8e8;
  --color-acento:      #e63946;
  --color-texto:       #333333;
  --color-fondo:       #f5f5f5;
  --color-blanco:      #ffffff;
}

/* Uso */
body        { background-color: var(--color-fondo); color: var(--color-texto); }
h1          { color: var(--color-primario); }
a           { color: var(--color-secundario); }
.boton      { background-color: var(--color-acento); }
```

**Ventajas:**
- Cambiar el color en un solo lugar lo actualiza en todo el sitio.
- El código es más legible y semántico.
- Facilita implementar temas (modo oscuro, etc.).

### Modo oscuro con variables

```css
:root {
  --color-fondo: #ffffff;
  --color-texto: #333333;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-fondo: #1a1a2e;
    --color-texto: #e0e0e0;
  }
}

body {
  background-color: var(--color-fondo);
  color: var(--color-texto);
}
```

---

## 9. Resumen de formatos de color

| Formato           | Ejemplo                          | Alpha | Cuándo usarlo                               |
|-------------------|----------------------------------|-------|---------------------------------------------|
| Nombre            | `red`, `skyblue`                 | No    | Pruebas rápidas                             |
| Hexadecimal       | `#0d3b6e`                        | Sí (`#rrggbbaa`) | Uso general, muy extendido     |
| Hexadecimal corto | `#09c`                           | Sí (`#rgba`) | Colores simples que lo permiten    |
| `rgb()`           | `rgb(13, 59, 110)`               | Con `rgba()` | Cuando se trabaja con valores numéricos |
| `hsl()`           | `hsl(210, 79%, 24%)`             | Con `hsla()` | Cuando se ajustan matiz/luminosidad |
| `currentColor`    | `currentColor`                   | —     | Heredar el color del texto                  |
| `transparent`     | `transparent`                    | —     | Elemento visible pero sin color             |

---
