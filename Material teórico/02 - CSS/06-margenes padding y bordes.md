# Apuntes CSS — Márgenes, Padding y Bordes

---

## 1. El modelo de caja (Box Model)

Todo elemento HTML es una **caja rectangular** compuesta por cuatro capas, de adentro hacia afuera:

```
┌─────────────────────────────────────┐
│              margin                 │  ← espacio externo (transparente)
│  ┌───────────────────────────────┐  │
│  │            border             │  │  ← borde
│  │  ┌─────────────────────────┐  │  │
│  │  │         padding         │  │  │  ← relleno interno (color del fondo)
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     contenido     │  │  │  │  ← texto, imagen, etc.
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

| Capa       | Descripción                                                      |
|------------|------------------------------------------------------------------|
| Contenido  | El texto, imagen u otro contenido del elemento                   |
| `padding`  | Espacio entre el contenido y el borde. Toma el color del fondo   |
| `border`   | El borde que rodea el padding y el contenido                     |
| `margin`   | Espacio exterior al borde. Siempre transparente                  |

---

## 2. `box-sizing` — cómo se calcula el tamaño

Por defecto (`content-box`), `width` y `height` solo definen el tamaño del **contenido**. El padding y el borde se suman por fuera, haciendo que el elemento sea más grande de lo esperado.

```css
/* Por defecto: width solo cuenta el contenido */
.caja {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  /* tamaño real = 300 + 40 + 4 = 344px */
}
```

Con `border-box`, `width` y `height` incluyen el padding y el borde. **Es la configuración recomendada.**

```css
/* Resetear globalmente (práctica estándar) */
* {
  box-sizing: border-box;
}

.caja {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  /* tamaño real = 300px exactos — el padding y borde van hacia adentro */
}
```

| Valor         | `width` incluye            |
|---------------|----------------------------|
| `content-box` | Solo el contenido (por defecto) |
| `border-box`  | Contenido + padding + border (recomendado) |

---

## 3. `margin` — margen externo

El margen es el espacio **fuera del borde** del elemento. Es siempre transparente.

### Propiedades individuales

```css
div {
  margin-top:    20px;
  margin-right:  10px;
  margin-bottom: 20px;
  margin-left:   10px;
}
```

### Propiedad de atajo

```css
/* Un valor: todos los lados */
margin: 20px;

/* Dos valores: vertical | horizontal */
margin: 20px 10px;

/* Tres valores: top | horizontal | bottom */
margin: 20px 10px 30px;

/* Cuatro valores: top | right | bottom | left  (sentido horario) */
margin: 20px 10px 30px 15px;
```

> **Regla mnemotécnica para 4 valores:** T-R-B-L → "TRouBLe" (problema en inglés).

### Centrado horizontal con `auto`

`margin: 0 auto` centra horizontalmente un bloque con ancho definido:

```css
.contenedor {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;  /* 0 arriba/abajo, auto a los costados */
}
```

### Márgenes negativos

Los márgenes pueden ser negativos para superponer elementos:

```css
.elemento {
  margin-top: -10px;   /* sube el elemento 10px sobre el anterior */
}
```

### Colapso de márgenes

Cuando dos elementos de **bloque** adyacentes tienen márgenes verticales, estos **se fusionan** en uno solo (el mayor de los dos). No se suman.

```css
.p1 { margin-bottom: 30px; }
.p2 { margin-top: 20px; }
/* El espacio entre ellos es 30px, no 50px */
```

El colapso no ocurre con Flexbox ni Grid, ni entre márgenes horizontales.

### Valores posibles de `margin`

| Valor        | Descripción                                                    |
|--------------|----------------------------------------------------------------|
| `px`, `rem`, `em`, `%` | Unidades de longitud                               |
| `auto`       | El navegador calcula el margen (centrado horizontal)           |
| `0`          | Sin margen                                                     |
| Valor negativo | Acerca o superpone elementos                                |

---

## 4. `padding` — relleno interno

El padding es el espacio entre el **contenido y el borde**. Hereda el `background-color` del elemento.

### Propiedades individuales

```css
div {
  padding-top:    20px;
  padding-right:  10px;
  padding-bottom: 20px;
  padding-left:   10px;
}
```

### Propiedad de atajo

Funciona exactamente igual que `margin`:

```css
/* Un valor: todos los lados */
padding: 20px;

/* Dos valores: vertical | horizontal */
padding: 12px 24px;

/* Tres valores: top | horizontal | bottom */
padding: 10px 20px 30px;

/* Cuatro valores: top | right | bottom | left */
padding: 10px 20px 30px 15px;
```

### Diferencias con `margin`

| Característica              | `margin`         | `padding`          |
|-----------------------------|------------------|--------------------|
| Dónde está                  | Fuera del borde  | Dentro del borde   |
| Color de fondo              | Siempre transparente | Toma el `background-color` |
| Puede ser negativo          | Sí               | No                 |
| Colapso vertical            | Sí               | No                 |
| Aumenta el área clickeable  | No               | Sí                 |

### Valores posibles de `padding`

| Valor              | Descripción                        |
|--------------------|------------------------------------|
| `px`, `rem`, `em`  | Unidades fijas o relativas         |
| `%`                | Porcentaje del **ancho** del padre (tanto vertical como horizontal) |
| `0`                | Sin relleno                        |

> `padding` **no acepta valores negativos**.

---

## 5. `border` — borde

El borde rodea el padding y el contenido del elemento.

### Propiedades individuales

```css
div {
  border-width: 2px;
  border-style: solid;
  border-color: #0d3b6e;
}
```

### Propiedad de atajo

```css
/* ancho | estilo | color */
div { border: 2px solid #0d3b6e; }
div { border: 1px dashed #ccc; }
div { border: 4px double black; }
```

### Por lado

```css
div {
  border-top:    2px solid red;
  border-right:  1px dashed blue;
  border-bottom: 3px dotted green;
  border-left:   0;                  /* sin borde izquierdo */
}

/* Quitar solo un lado */
div {
  border: 1px solid #ccc;
  border-top: none;
}
```

---

### `border-width` — grosor del borde

```css
border-width: 1px;              /* todos los lados */
border-width: 2px 4px;          /* vertical | horizontal */
border-width: 1px 2px 3px 4px;  /* top right bottom left */

/* Palabras clave */
border-width: thin;      /* ~1px */
border-width: medium;    /* ~3px (por defecto) */
border-width: thick;     /* ~5px */
```

---

### `border-style` — estilo del borde

```css
border-style: none;     /* sin borde (por defecto) */
border-style: solid;    /* línea continua */
border-style: dashed;   /* línea de guiones */
border-style: dotted;   /* línea de puntos */
border-style: double;   /* doble línea continua */
border-style: groove;   /* efecto hundido */
border-style: ridge;    /* efecto elevado */
border-style: inset;    /* efecto insertado */
border-style: outset;   /* efecto saliente */
border-style: hidden;   /* oculto (igual que none pero afecta tablas) */
```

> El borde solo se muestra si `border-style` tiene un valor distinto de `none` y `border-width` es mayor que 0.

---

### `border-color` — color del borde

```css
border-color: #0d3b6e;             /* todos los lados */
border-color: red blue;            /* vertical | horizontal */
border-color: red blue green gold; /* top right bottom left */
border-color: currentColor;        /* igual que el color del texto */
border-color: transparent;         /* invisible pero ocupa espacio */
```

---

### `border-radius` — esquinas redondeadas

```css
/* Todos los vértices iguales */
div { border-radius: 8px; }

/* Dos valores: top-left+bottom-right | top-right+bottom-left */
div { border-radius: 8px 20px; }

/* Cuatro valores: top-left | top-right | bottom-right | bottom-left */
div { border-radius: 4px 8px 16px 8px; }

/* Círculo perfecto (si width = height) */
.avatar { border-radius: 50%; }

/* Píldora / cápsula */
.boton { border-radius: 999px; }

/* Por esquina individual */
div {
  border-top-left-radius:     8px;
  border-top-right-radius:    4px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius:  4px;
}

/* Elipse: radio horizontal / radio vertical */
div { border-radius: 50px / 20px; }
```

---

### `border-image` — imagen como borde

```css
div {
  border: 10px solid transparent;
  border-image: url('borde.png') 30 round;
  border-image: linear-gradient(red, blue) 1;
}
```

---

## 6. `outline` — contorno exterior

El `outline` es similar al borde pero se dibuja **fuera del borde** y **no ocupa espacio** (no afecta el layout).

```css
/* ancho | estilo | color */
div     { outline: 2px solid #0d3b6e; }
input   { outline: 3px solid rgba(13,59,110,0.4); }
button  { outline: none; }   /* elimina el outline (cuidado: afecta accesibilidad) }
```

### Propiedades individuales

```css
outline-width:  2px;
outline-style:  solid;          /* mismos valores que border-style */
outline-color:  #0d3b6e;
outline-offset: 4px;            /* espacio entre el borde y el outline */
```

> `outline` se usa principalmente para indicar el **foco** de los elementos interactivos (accesibilidad). Nunca quitar sin reemplazar por otra indicación visual.

---

## 7. `box-shadow` — sombra de la caja

Agrega una o varias sombras a la caja del elemento. No ocupa espacio en el layout.

### Sintaxis

```
box-shadow: offset-x  offset-y  blur  spread  color;
```

| Valor      | Descripción                                                              |
|------------|--------------------------------------------------------------------------|
| `offset-x` | Desplazamiento horizontal. Positivo = derecha, negativo = izquierda      |
| `offset-y` | Desplazamiento vertical. Positivo = abajo, negativo = arriba             |
| `blur`     | Radio de desenfoque. `0` = sombra nítida. Siempre positivo               |
| `spread`   | Expansión de la sombra. Positivo = más grande, negativo = más chica       |
| `color`    | Color de la sombra. Se recomienda `rgba()` para poder controlar la opacidad |

### Ejemplos básicos

```css
/* Sombra clásica: desplazada abajo a la derecha */
.tarjeta { box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2); }

/* Sombra centrada (sin desplazamiento) */
.boton   { box-shadow: 0 0 12px rgba(0, 0, 0, 0.3); }

/* Sombra nítida (sin blur) */
.bloque  { box-shadow: 4px 4px 0 #0d3b6e; }

/* Sombra con spread (se expande en todos los lados) */
.caja    { box-shadow: 0 0 0 4px #e63946; }  /* borde exterior simulado */

/* Sombra negativa — se contrae */
.caja    { box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.3); }
```

### `inset` — sombra interior

La palabra clave `inset` al inicio dibuja la sombra **hacia adentro** del elemento.

```css
/* Sombra interior en un input */
.campo  { box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15); }

/* Efecto hundido */
.hundido { box-shadow: inset 2px 2px 6px rgba(0,0,0,0.2), inset -2px -2px 6px rgba(255,255,255,0.5); }
```

### Múltiples sombras

Se separan con coma. Se apilan de la primera (más arriba) a la última (más abajo).

```css
.tarjeta {
  box-shadow:
    0 1px 3px  rgba(0, 0, 0, 0.12),
    0 4px 12px rgba(0, 0, 0, 0.10);
}

/* Sombra de color + resplandor */
.boton-azul {
  box-shadow:
    0 4px 8px  rgba(13, 59, 110, 0.4),
    0 0  20px  rgba(13, 59, 110, 0.2);
}
```

### Quitar la sombra

```css
.sin-sombra { box-shadow: none; }
```

### Diferencia con `filter: drop-shadow()`

`box-shadow` sigue siempre la forma rectangular (con `border-radius`), mientras que `filter: drop-shadow()` sigue el contorno real del contenido (útil para imágenes PNG con transparencia).

```css
/* Solo sigue la caja */
.imagen { box-shadow: 4px 4px 8px black; }

/* Sigue el contorno del PNG */
.icono-png { filter: drop-shadow(4px 4px 8px black); }
```

---

## 8. Diferencias entre `margin`, `padding`, `border` y `outline`

| Propiedad | Posición           | Ocupa espacio | Afecta fondo | Puede ser negativo |
|-----------|--------------------|---------------|--------------|-------------------|
| `margin`  | Fuera del borde    | Sí            | No (transparente) | Sí          |
| `border`  | Sobre el padding   | Sí            | Sí           | No                |
| `padding` | Dentro del borde   | Sí            | Sí           | No                |
| `outline` | Fuera del borde    | No            | No           | No                |

---

## 8. Resumen de atajos y orden de valores

Todas las propiedades de caja que aceptan 4 valores siguen el **mismo orden horario: arriba → derecha → abajo → izquierda**.

```css
/* 1 valor → todos los lados */
margin:  10px;
padding: 10px;

/* 2 valores → vertical (top+bottom) | horizontal (left+right) */
margin:  10px 20px;
padding: 10px 20px;

/* 3 valores → top | horizontal | bottom */
margin:  10px 20px 30px;
padding: 10px 20px 30px;

/* 4 valores → top | right | bottom | left */
margin:  10px 20px 30px 40px;
padding: 10px 20px 30px 40px;
```

```css
/* border-radius también sigue el orden, pero por vértices:
   top-left | top-right | bottom-right | bottom-left */
border-radius: 4px 8px 4px 8px;
```

---

## 9. Propiedades lógicas (dirección de flujo)

CSS moderno incluye propiedades **lógicas** que se adaptan al sentido de escritura del documento (`ltr` o `rtl`), más flexibles que las propiedades físicas (top/right/bottom/left).

| Física                | Lógica (LTR)          |
|-----------------------|-----------------------|
| `margin-top`          | `margin-block-start`  |
| `margin-bottom`       | `margin-block-end`    |
| `margin-left`         | `margin-inline-start` |
| `margin-right`        | `margin-inline-end`   |
| `padding-top`         | `padding-block-start` |
| `padding-left`        | `padding-inline-start`|
| `border-top`          | `border-block-start`  |

### Atajos lógicos

```css
/* margin-block: top y bottom al mismo tiempo */
p { margin-block: 1rem; }

/* margin-inline: left y right al mismo tiempo */
.contenedor { margin-inline: auto; }   /* equivale a margin: 0 auto */

/* padding-block: top y bottom */
section { padding-block: 3rem; }

/* padding-inline: left y right */
.card { padding-inline: 1.5rem; }
```

---
