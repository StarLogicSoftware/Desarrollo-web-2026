# Apuntes CSS — Tablas y Listas

---

## 1. Estilizar tablas

Por defecto las tablas HTML tienen un diseño poco visual: celdas sin bordes unificados, espaciados extraños y sin colores. CSS permite controlar todo eso.

---

### `border-collapse` — unificar bordes

Es la propiedad más importante para tablas. Controla si los bordes de celdas adyacentes se **fusionan en uno** o se mantienen separados.

```css
table {
  border-collapse: collapse;   /* fusiona los bordes (lo más común) */
}

table {
  border-collapse: separate;  /* cada celda tiene su propio borde (por defecto) */
}
```

```css
/* Tabla con bordes unificados */
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ccc;
  padding: 0.75rem 1rem;
  text-align: left;
}
```

---

### `border-spacing` — espacio entre celdas

Solo aplica cuando `border-collapse: separate`. Define el espacio entre los bordes de las celdas.

```css
table {
  border-collapse: separate;
  border-spacing: 8px;           /* igual en x e y */
}

table {
  border-spacing: 8px 4px;       /* horizontal | vertical */
}
```

---

### `table-layout` — algoritmo de cálculo de columnas

```css
table { table-layout: auto; }    /* el navegador calcula el ancho según el contenido (por defecto) */
table { table-layout: fixed; }   /* el ancho se basa en el ancho definido en CSS o en el primer row */
```

Con `fixed`, la tabla **renderiza más rápido** y las columnas tienen anchos predecibles. Requiere definir `width` en la tabla.

```css
table {
  table-layout: fixed;
  width: 100%;
}

/* Definir anchos de columna con th */
th:nth-child(1) { width: 40%; }
th:nth-child(2) { width: 30%; }
th:nth-child(3) { width: 30%; }
```

---

### `caption-side` — posición del `<caption>`

```css
table { caption-side: top; }     /* por defecto: arriba de la tabla */
table { caption-side: bottom; }  /* debajo de la tabla */
```

---

### `empty-cells` — celdas vacías

Solo en `border-collapse: separate`. Controla si se muestran bordes y fondo en celdas vacías.

```css
table { empty-cells: show; }   /* muestra borde y fondo en celdas vacías (por defecto) */
table { empty-cells: hide; }   /* oculta borde y fondo de celdas vacías */
```

---

### `vertical-align` en celdas

```css
td { vertical-align: top; }
td { vertical-align: middle; }    /* por defecto en celdas */
td { vertical-align: bottom; }
```

---

### `text-align` en celdas

```css
th { text-align: left; }     /* por defecto: center en th */
td { text-align: right; }
td { text-align: center; }
```

---

### Tabla de ejemplo completa

```css
/* Reset base */
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 0.95rem;
}

caption {
  caption-side: bottom;
  font-size: 0.85rem;
  color: #777;
  margin-top: 0.5rem;
}

/* Encabezado */
thead th {
  background-color: #0d3b6e;
  color: white;
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
}

/* Cuerpo */
tbody td {
  padding: 0.65rem 1rem;
  border-bottom: 1px solid #e0e0e0;
  vertical-align: middle;
}

/* Filas alternadas */
tbody tr:nth-child(even) {
  background-color: #f5f8fc;
}

/* Fila al pasar el mouse */
tbody tr:hover {
  background-color: #eaf2fb;
}

/* Pie */
tfoot td {
  border-top: 2px solid #0d3b6e;
  font-weight: bold;
  padding: 0.65rem 1rem;
}
```

---

### Tabla responsiva

Las tablas son difíciles de mostrar en pantallas pequeñas. La solución más común es permitir scroll horizontal:

```css
.tabla-contenedor {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

```html
<div class="tabla-contenedor">
  <table>...</table>
</div>
```

---

## 2. Estilizar listas

Las listas (`<ul>`, `<ol>`, `<li>`) vienen con estilos por defecto del navegador: viñetas, números y sangría. Todo eso es controlable con CSS.

---

### `list-style-type` — tipo de marcador

```css
/* Listas desordenadas */
ul { list-style-type: disc; }        /* ● por defecto */
ul { list-style-type: circle; }      /* ○ */
ul { list-style-type: square; }      /* ■ */
ul { list-style-type: none; }        /* sin marcador */

/* Listas ordenadas */
ol { list-style-type: decimal; }          /* 1, 2, 3... (por defecto) */
ol { list-style-type: decimal-leading-zero; } /* 01, 02, 03... */
ol { list-style-type: lower-alpha; }      /* a, b, c... */
ol { list-style-type: upper-alpha; }      /* A, B, C... */
ol { list-style-type: lower-roman; }      /* i, ii, iii... */
ol { list-style-type: upper-roman; }      /* I, II, III... */
ol { list-style-type: lower-latin; }      /* a, b, c... (alias de lower-alpha) */
ol { list-style-type: upper-latin; }      /* A, B, C... */

/* Carácter personalizado con string */
ul { list-style-type: "→ "; }    /* cualquier texto o emoji */
ul { list-style-type: "✓ "; }
```

---

### `list-style-image` — imagen como marcador

```css
ul { list-style-image: url('icono-check.svg'); }
ul { list-style-image: none; }
```

> Para más control sobre el tamaño y posición de la imagen, es mejor usar `::before` con `content` y `background-image`.

---

### `list-style-position` — posición del marcador

```css
ul { list-style-position: outside; } /* fuera del flujo del texto (por defecto) */
ul { list-style-position: inside; }  /* el marcador forma parte del flujo del texto */
```

Con `outside` (por defecto), el marcador queda en el margen y el texto no fluye por debajo de él.  
Con `inside`, el marcador está en línea con el texto y la segunda línea queda alineada al margen.

---

### `list-style` — propiedad de atajo

```css
/* list-style: type position image */
ul { list-style: disc outside none; }

/* Equivalente a lo anterior */
ul { list-style: disc; }

/* Sin marcador */
ul { list-style: none; }
```

---

### Quitar los estilos por defecto de una lista

```css
ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

---

### Marcadores personalizados con `::before`

Usando el pseudo-elemento `::before` se tiene control total sobre el marcador:

```css
ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding-left: 1.5rem;
  position: relative;
}

ul li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #0d3b6e;
}
```

```css
/* Checklist con emoji */
.checklist li::before {
  content: "✓";
  color: #2a9d8f;
  font-weight: bold;
  margin-right: 0.5rem;
}
```

---

### `::marker` — pseudo-elemento del marcador

CSS moderno permite estilizar directamente el marcador con `::marker`:

```css
li::marker {
  color: #0d3b6e;
  font-size: 1.2em;
}

ol li::marker {
  color: #e63946;
  font-weight: bold;
}
```

> `::marker` solo acepta un subconjunto de propiedades CSS: `color`, `font-*`, `content`, `unicode-bidi` y `white-space`.

---

### `counter-reset` y `counter-increment` — contadores personalizados

Permiten crear numeraciones totalmente personalizadas.

```css
/* Contador de secciones */
ol {
  list-style: none;
  counter-reset: mi-contador;
}

ol li {
  counter-increment: mi-contador;
  padding-left: 2.5rem;
  position: relative;
}

ol li::before {
  content: counter(mi-contador) ".";
  position: absolute;
  left: 0;
  font-weight: bold;
  color: #0d3b6e;
}
```

```css
/* Contador con formato */
content: counter(mi-contador, upper-roman) ".";   /* I. II. III. */
content: counter(mi-contador, lower-alpha) ")";   /* a) b) c) */
```

---

### Listas anidadas — control de nivel

```css
/* Viñetas diferenciadas por nivel */
ul                 { list-style-type: disc; }
ul ul              { list-style-type: circle; }
ul ul ul           { list-style-type: square; }

/* Margen izquierdo progresivo */
ul { padding-left: 1.5rem; }
```

---

## 3. Resumen de propiedades

### Propiedades de tabla

| Propiedad          | Controla                                            |
|--------------------|-----------------------------------------------------|
| `border-collapse`  | Si los bordes se fusionan o se mantienen separados  |
| `border-spacing`   | Espacio entre celdas (con `separate`)               |
| `table-layout`     | Algoritmo de cálculo de anchos de columna           |
| `caption-side`     | Posición del `<caption>`                            |
| `empty-cells`      | Visibilidad de celdas vacías                        |
| `vertical-align`   | Alineación vertical del contenido de la celda       |

### Propiedades de lista

| Propiedad              | Controla                                        |
|------------------------|-------------------------------------------------|
| `list-style-type`      | Tipo de marcador (viñeta, número, letra, etc.)  |
| `list-style-image`     | Imagen como marcador                            |
| `list-style-position`  | Posición del marcador (inside / outside)        |
| `list-style`           | Atajo para las tres anteriores                  |
| `::marker`             | Estilos directos del marcador                   |
| `::before`             | Marcadores personalizados con `content`         |
| `counter-reset`        | Define o reinicia un contador                   |
| `counter-increment`    | Incrementa un contador                          |

---
