# Apuntes CSS — Tipografía y Texto

---

## 1. `font-family` — tipografía

Define la fuente del texto. Se escribe una lista de fuentes separadas por coma: si la primera no está disponible, el navegador prueba la siguiente.

```css
p {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-family: Georgia, "Times New Roman", serif;
}

code {
  font-family: "Courier New", Courier, monospace;
}
```

La última fuente de la lista siempre debe ser una **familia genérica** como fallback final:

| Genérica     | Descripción                                   | Ejemplos                       |
|--------------|-----------------------------------------------|--------------------------------|
| `serif`      | Con remates en los trazos                     | Georgia, Times New Roman       |
| `sans-serif` | Sin remates, más moderna y legible en pantalla| Arial, Helvetica, Roboto       |
| `monospace`  | Cada carácter ocupa el mismo ancho            | Courier New, Consolas          |
| `cursive`    | Estilo manuscrito                             | Pacifico, Dancing Script       |
| `fantasy`    | Decorativa                                    | Impact, Papyrus                |
| `system-ui`  | La fuente por defecto del sistema operativo   | San Francisco (Mac), Segoe UI (Win) |

---

### Fuentes con espacios en el nombre

Se deben escribir entre comillas:

```css
font-family: "Open Sans", sans-serif;
font-family: "Times New Roman", serif;
```

---

### Fuentes de Google Fonts

Se importan en el `<head>` del HTML o al inicio del CSS:

```html
<!-- En el HTML -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
```

```css
/* O en el CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

## 2. `font-size` — tamaño de fuente

```css
p    { font-size: 16px; }     /* píxeles — fijo */
p    { font-size: 1rem; }     /* relativo al <html> (16px por defecto) */
p    { font-size: 1em; }      /* relativo al padre */
p    { font-size: 120%; }     /* porcentaje del padre */
h1   { font-size: 2rem; }     /* 32px si html = 16px */
small{ font-size: 0.875rem; } /* 14px */
```

### Valores de palabras clave

```css
font-size: small;
font-size: medium;   /* por defecto del navegador (~16px) */
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: smaller;  /* relativo al padre: un nivel menor */
font-size: larger;   /* relativo al padre: un nivel mayor */
```

---

## 3. `font-weight` — grosor de la fuente

```css
p { font-weight: normal; }   /* equivale a 400 */
p { font-weight: bold; }     /* equivale a 700 */
p { font-weight: lighter; }  /* un nivel más liviano que el padre */
p { font-weight: bolder; }   /* un nivel más grueso que el padre */

/* Valores numéricos (de 100 a 900, en múltiplos de 100) */
p { font-weight: 100; }  /* Thin */
p { font-weight: 200; }  /* Extra Light */
p { font-weight: 300; }  /* Light */
p { font-weight: 400; }  /* Regular (normal) */
p { font-weight: 500; }  /* Medium */
p { font-weight: 600; }  /* Semi Bold */
p { font-weight: 700; }  /* Bold */
p { font-weight: 800; }  /* Extra Bold */
p { font-weight: 900; }  /* Black */
```

> No todos los pesos están disponibles en todas las fuentes. Si el peso pedido no existe, el navegador usa el más cercano.

---

## 4. `font-style` — estilo de la fuente

```css
p { font-style: normal; }   /* por defecto */
p { font-style: italic; }   /* cursiva (usa la variante italic de la fuente) */
p { font-style: oblique; }  /* inclinada artificialmente (si no hay italic) */
```

---

## 5. `font-variant` — variantes

```css
p { font-variant: normal; }       /* por defecto */
p { font-variant: small-caps; }   /* convierte minúsculas en versalitas */
```

---

## 6. `font` — propiedad de atajo

Permite combinar varias propiedades de fuente en una sola línea.

**Orden obligatorio:** `font-style font-variant font-weight font-size/line-height font-family`

```css
p {
  font: italic small-caps bold 1rem/1.6 'Georgia', serif;
}

/* Sin todos los valores — solo los obligatorios son font-size y font-family */
p {
  font: 1rem/1.5 Arial, sans-serif;
}

h1 {
  font: bold 2rem/1.2 'Roboto', sans-serif;
}
```

> Al usar `font` como atajo, los valores que se omiten se restablecen a su valor inicial.

---

## 7. `line-height` — interlineado

Controla el espacio entre líneas de texto.

```css
p { line-height: normal; }   /* por defecto del navegador (~1.2) */
p { line-height: 1.6; }      /* sin unidad: relativo al font-size (recomendado) */
p { line-height: 24px; }     /* fijo en píxeles */
p { line-height: 150%; }     /* porcentaje del font-size */
p { line-height: 1.5rem; }   /* relativo al root */
```

**Recomendación:** usar valores sin unidad (`1.5`, `1.6`) para que escale proporcionalmente con el `font-size`.  
Para cuerpo de texto: entre `1.4` y `1.8`. Para títulos: entre `1.1` y `1.3`.

---

## 8. `letter-spacing` — espaciado entre caracteres

```css
p        { letter-spacing: normal; }     /* por defecto */
p        { letter-spacing: 0.05em; }     /* ligeramente más espacio */
.titulo  { letter-spacing: 0.15em; }     /* títulos en mayúsculas con espaciado */
.compacto{ letter-spacing: -0.02em; }    /* ligeramente comprimido */
```

---

## 9. `word-spacing` — espaciado entre palabras

```css
p { word-spacing: normal; }    /* por defecto */
p { word-spacing: 0.2em; }     /* más separación entre palabras */
p { word-spacing: -0.05em; }   /* menos separación */
```

---

## 10. `text-align` — alineación horizontal del texto

```css
p { text-align: left; }     /* alineado a la izquierda (por defecto en LTR) */
p { text-align: right; }    /* alineado a la derecha */
p { text-align: center; }   /* centrado */
p { text-align: justify; }  /* justificado (alineado en ambos extremos) */
p { text-align: start; }    /* inicio del sentido de lectura (LTR = left) */
p { text-align: end; }      /* fin del sentido de lectura (LTR = right) */
```

---

## 11. `text-decoration` — decoración del texto

```css
a { text-decoration: none; }          /* sin subrayado */
a { text-decoration: underline; }     /* subrayado */
p { text-decoration: overline; }      /* línea sobre el texto */
p { text-decoration: line-through; }  /* tachado */
```

### Propiedades extendidas

```css
a {
  text-decoration-line:  underline;      /* qué tipo de línea */
  text-decoration-style: solid;          /* solid | dashed | dotted | double | wavy */
  text-decoration-color: red;            /* color de la línea */
  text-decoration-thickness: 2px;        /* grosor */
}

/* Atajo: line style color thickness */
a { text-decoration: underline wavy red 2px; }
```

---

## 12. `text-transform` — transformación de mayúsculas

```css
p { text-transform: none; }        /* sin cambios (por defecto) */
p { text-transform: uppercase; }   /* TODO EN MAYÚSCULAS */
p { text-transform: lowercase; }   /* todo en minúsculas */
p { text-transform: capitalize; }  /* Primera Letra De Cada Palabra En Mayúscula */
```

---

## 13. `text-indent` — sangría de primera línea

```css
p { text-indent: 2rem; }    /* sangría positiva */
p { text-indent: -2rem; }   /* sangría negativa (colgante) */
```

---

## 14. `text-shadow` — sombra del texto

```css
/* offset-x | offset-y | blur-radius | color */
h1 { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); }

/* Sin desenfoque */
h1 { text-shadow: 1px 1px 0 black; }

/* Múltiples sombras separadas por coma */
h1 { text-shadow: 1px 1px 0 black, 0 0 10px rgba(0,100,255,0.5); }

/* Sin sombra */
h1 { text-shadow: none; }
```

---

## 15. `white-space` — manejo de espacios en blanco

```css
p { white-space: normal; }    /* colapsa espacios, hace saltos de línea (por defecto) */
p { white-space: nowrap; }    /* no hace saltos de línea automáticos */
p { white-space: pre; }       /* conserva todos los espacios y saltos (como <pre>) */
p { white-space: pre-wrap; }  /* conserva espacios, pero sí hace saltos automáticos */
p { white-space: pre-line; }  /* colapsa espacios, pero respeta saltos explícitos */
```

---

## 16. `overflow-wrap` y `word-break` — rotura de palabras largas

```css
/* Permite romper palabras largas que desborden el contenedor */
p { overflow-wrap: normal; }      /* por defecto */
p { overflow-wrap: break-word; }  /* rompe la palabra si es necesario */
p { overflow-wrap: anywhere; }    /* igual que break-word pero afecta el cálculo de tamaño */

/* Control más fino sobre la rotura */
p { word-break: normal; }         /* por defecto */
p { word-break: break-all; }      /* rompe en cualquier carácter (útil para URLs) */
p { word-break: keep-all; }       /* no rompe palabras (para CJK) */
```

---

## 17. `text-overflow` — desbordamiento de texto

Controla qué pasa con el texto cuando desborda su contenedor. Requiere `overflow: hidden` y `white-space: nowrap`.

```css
.recortar {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;      /* corta el texto sin indicación */
}

.puntos {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* agrega "..." al final del texto recortado */
}
```

---

## 18. `vertical-align` — alineación vertical en línea

Aplica a elementos en línea (`inline` e `inline-block`) y celdas de tabla.

```css
img    { vertical-align: baseline; }  /* por defecto: alineado a la línea base del texto */
img    { vertical-align: top; }
img    { vertical-align: middle; }
img    { vertical-align: bottom; }
img    { vertical-align: text-top; }
img    { vertical-align: text-bottom; }
img    { vertical-align: super; }      /* superíndice */
img    { vertical-align: sub; }        /* subíndice */
img    { vertical-align: 4px; }        /* valor numérico desde la línea base */
```

---

## 19. Resumen de propiedades tipográficas

| Propiedad           | Controla                                    |
|---------------------|---------------------------------------------|
| `font-family`       | Tipografía                                  |
| `font-size`         | Tamaño                                      |
| `font-weight`       | Grosor / negrita                            |
| `font-style`        | Cursiva / normal                            |
| `font-variant`      | Versalitas                                  |
| `font`              | Atajo para todas las propiedades `font-*`   |
| `line-height`       | Interlineado                                |
| `letter-spacing`    | Espaciado entre caracteres                  |
| `word-spacing`      | Espaciado entre palabras                    |
| `text-align`        | Alineación horizontal                       |
| `text-decoration`   | Subrayado, tachado, sobrelineado            |
| `text-transform`    | Mayúsculas / minúsculas                     |
| `text-indent`       | Sangría de primera línea                    |
| `text-shadow`       | Sombra del texto                            |
| `white-space`       | Manejo de espacios y saltos de línea        |
| `overflow-wrap`     | Rotura de palabras largas                   |
| `word-break`        | Control fino de rotura de palabras          |
| `text-overflow`     | Texto desbordante (`ellipsis`)              |
| `vertical-align`    | Alineación vertical en línea                |

---
