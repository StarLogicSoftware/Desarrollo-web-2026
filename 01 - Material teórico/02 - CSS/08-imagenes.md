# Apuntes CSS — Imágenes y Fondos

---

## 1. Imágenes (`<img>`) — propiedades básicas

### `width` y `height`

Por defecto una imagen se muestra en su tamaño original. Se recomienda controlar el tamaño desde CSS.

```css
img {
  width: 300px;      /* ancho fijo */
  height: auto;      /* alto proporcional (recomendado) */
}

/* Imagen responsiva: nunca más ancha que su contenedor */
img {
  width: 100%;
  height: auto;
}

/* Tamaño máximo */
img {
  max-width: 100%;
  height: auto;
}
```

---

### `object-fit` — cómo se ajusta la imagen a su caja

Controla cómo se redimensiona el contenido de una `<img>` (o `<video>`) dentro de los límites definidos por `width` y `height`.

```css
img {
  width: 300px;
  height: 200px;
  object-fit: fill;        /* por defecto: estira la imagen para llenar (puede deformar) */
}

img { object-fit: contain; }   /* cabe completa, puede dejar espacio vacío (letterbox) */
img { object-fit: cover; }     /* llena la caja recortando los bordes (sin deformar) */
img { object-fit: none; }      /* tamaño original, recorta si es más grande */
img { object-fit: scale-down; } /* el menor entre none y contain */
```

| Valor        | Comportamiento                                              |
|--------------|-------------------------------------------------------------|
| `fill`       | Estira la imagen para llenar toda la caja (puede deformar)  |
| `contain`    | Escala para que quepa completa, respetando proporción       |
| `cover`      | Escala para cubrir toda la caja, recortando lo que sobra    |
| `none`       | Tamaño original, sin escalar                                |
| `scale-down` | Aplica `none` o `contain`, el que resulte más pequeño       |

> `cover` es el valor más usado para imágenes de tarjetas, avatares y galerías.

---

### `object-position` — posición del contenido dentro de la caja

Se usa junto con `object-fit` para indicar qué parte de la imagen se muestra cuando se recorta.

```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: center;        /* por defecto */
}

img { object-position: top; }
img { object-position: bottom; }
img { object-position: left; }
img { object-position: right; }
img { object-position: top right; }
img { object-position: 20% 80%; }       /* porcentaje */
img { object-position: 50px 20px; }     /* píxeles desde la esquina superior izquierda */
```

---

### `aspect-ratio` — relación de aspecto

Mantiene la proporción de la caja sin necesidad de definir ambas dimensiones.

```css
img {
  width: 100%;
  aspect-ratio: 16 / 9;   /* ancho/alto */
}

.avatar {
  width: 80px;
  aspect-ratio: 1 / 1;    /* cuadrado perfecto */
}

.poster {
  width: 200px;
  aspect-ratio: 2 / 3;
}
```

---

### `filter` — filtros visuales

Aplica efectos visuales sobre la imagen.

```css
img { filter: none; }                    /* sin filtro (por defecto) */
img { filter: grayscale(100%); }         /* escala de grises */
img { filter: grayscale(50%); }          /* semi gris */
img { filter: blur(4px); }              /* desenfoque */
img { filter: brightness(1.2); }        /* más brillo (1 = normal) */
img { filter: brightness(0.7); }        /* menos brillo */
img { filter: contrast(1.5); }          /* más contraste */
img { filter: saturate(2); }            /* más saturación */
img { filter: saturate(0); }            /* sin color (igual que grayscale) */
img { filter: sepia(100%); }            /* efecto sepia */
img { filter: invert(100%); }           /* colores invertidos */
img { filter: hue-rotate(90deg); }      /* rota el matiz */
img { filter: opacity(0.5); }           /* 50% de opacidad */

/* Sombra que sigue el contorno real del PNG */
img { filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.4)); }

/* Múltiples filtros encadenados */
img { filter: grayscale(100%) brightness(1.2) contrast(1.1); }
```

---

## 2. Fondo de elementos — `background`

Las propiedades de fondo aplican a cualquier elemento HTML, no solo a imágenes.

---

### `background-color` — color de fondo

```css
div  { background-color: #f5f5f5; }
body { background-color: white; }
.alerta { background-color: rgba(230, 57, 70, 0.1); }
```

---

### `background-image` — imagen de fondo

```css
div { background-image: url('imagen.jpg'); }
div { background-image: url('../fotos/hero.png'); }
div { background-image: none; }   /* sin imagen */
```

> A diferencia de `<img>`, una imagen de fondo es **decorativa**: no tiene texto alternativo y los lectores de pantalla la ignoran.

#### Degradados como imagen de fondo

Los degradados son valores válidos de `background-image`:

```css
div { background-image: linear-gradient(to right, #0d3b6e, #5bb8e8); }
div { background-image: radial-gradient(circle, #5bb8e8, #0d3b6e); }
div { background-image: linear-gradient(135deg, #e63946, #f4a261, #2a9d8f); }

/* Degradado + imagen (el degradado va encima) */
.hero {
  background-image:
    linear-gradient(to bottom, transparent, rgba(0,0,0,0.7)),
    url('foto-hero.jpg');
}
```

---

### `background-repeat` — repetición de la imagen

```css
div { background-repeat: repeat; }     /* repite en x e y (por defecto) */
div { background-repeat: repeat-x; }   /* solo horizontal */
div { background-repeat: repeat-y; }   /* solo vertical */
div { background-repeat: no-repeat; }  /* sin repetir */
div { background-repeat: space; }      /* repite con espacio entre copias, sin recortar */
div { background-repeat: round; }      /* ajusta el tamaño para que entre sin recortar */
```

---

### `background-size` — tamaño de la imagen de fondo

```css
div { background-size: auto; }          /* tamaño original (por defecto) */
div { background-size: 300px 200px; }   /* ancho y alto exactos */
div { background-size: 50%; }           /* porcentaje del contenedor */
div { background-size: cover; }         /* cubre todo el elemento, recortando si es necesario */
div { background-size: contain; }       /* cabe completa dentro del elemento */
```

| Valor     | Comportamiento                                                  |
|-----------|-----------------------------------------------------------------|
| `auto`    | Tamaño original de la imagen                                    |
| `cover`   | Escala para cubrir todo el elemento (puede recortar)            |
| `contain` | Escala para que la imagen quepa completa (puede repetirse)      |

---

### `background-position` — posición de la imagen de fondo

```css
div { background-position: center; }         /* por defecto */
div { background-position: top; }
div { background-position: bottom; }
div { background-position: left; }
div { background-position: right; }
div { background-position: top right; }
div { background-position: center bottom; }
div { background-position: 50% 30%; }         /* horizontal vertical */
div { background-position: 20px 40px; }       /* desde la esquina superior izquierda */
```

---

### `background-attachment` — comportamiento al hacer scroll

```css
div { background-attachment: scroll; }   /* la imagen se mueve con la página (por defecto) */
div { background-attachment: fixed; }    /* la imagen queda fija al viewport (efecto parallax) */
div { background-attachment: local; }    /* se mueve con el scroll interno del elemento */
```

---

### `background-origin` — origen del posicionamiento

Define desde dónde se calcula la posición de la imagen.

```css
div { background-origin: padding-box; }   /* por defecto: desde el padding */
div { background-origin: border-box; }    /* desde el borde */
div { background-origin: content-box; }   /* desde el contenido */
```

---

### `background-clip` — hasta dónde se extiende el fondo

```css
div { background-clip: border-box; }    /* llega hasta el borde (por defecto) */
div { background-clip: padding-box; }   /* se corta en el borde (no cubre el borde) */
div { background-clip: content-box; }   /* solo cubre el área de contenido */
div { background-clip: text; }          /* el fondo se muestra solo detrás del texto */
```

#### Texto con degradado (truco con `background-clip: text`)

```css
h1 {
  background-image: linear-gradient(to right, #0d3b6e, #5bb8e8);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

---

### `background` — propiedad de atajo

Permite combinar todas las propiedades de fondo en una sola línea.

```css
/* background: color image repeat attachment position / size */
div {
  background: #f5f5f5 url('imagen.jpg') no-repeat center / cover;
}

/* Solo color */
div { background: #0d3b6e; }

/* Solo imagen */
div { background: url('patron.png') repeat center; }

/* Degradado con posición */
div { background: linear-gradient(to right, #0d3b6e, #5bb8e8) no-repeat center / cover; }
```

> Al usar el atajo, los valores omitidos se restablecen a sus iniciales. Si se usan `background-color` y `background-image` por separado, es más claro y predecible.

---

### Múltiples fondos

CSS permite apilar varios fondos separados por coma. El primero de la lista queda **encima**.

```css
div {
  background-image:
    url('icono.png'),
    linear-gradient(to bottom, #0d3b6e, #5bb8e8);
  background-repeat:
    no-repeat,
    no-repeat;
  background-position:
    right 20px center,
    center;
  background-size:
    40px,
    cover;
}
```

---

## 3. Resumen de propiedades de fondo

| Propiedad               | Qué controla                                      |
|-------------------------|---------------------------------------------------|
| `background-color`      | Color de fondo sólido                             |
| `background-image`      | Imagen o degradado de fondo                       |
| `background-repeat`     | Si la imagen se repite y en qué dirección         |
| `background-size`       | Tamaño de la imagen de fondo                      |
| `background-position`   | Posición de la imagen dentro del elemento         |
| `background-attachment` | Si el fondo se mueve con el scroll o queda fijo   |
| `background-origin`     | Origen del posicionamiento de la imagen           |
| `background-clip`       | Hasta dónde se extiende el fondo                  |
| `background`            | Atajo para todas las propiedades anteriores       |

---
