# Apuntes CSS — Layout: Grid

---

# Módulo 1 — Introducción y conceptos

---

## 1. ¿Qué es CSS Grid?

CSS Grid es un sistema de layout **bidimensional**: permite controlar filas y columnas al mismo tiempo. Es el primer sistema de diseño nativo de CSS pensado para maquetación de páginas completas.

### Flexbox vs Grid

| Característica         | Flexbox                              | Grid                                 |
|------------------------|--------------------------------------|--------------------------------------|
| Dimensiones            | 1D (fila **o** columna)              | 2D (filas **y** columnas)            |
| Enfoque                | Distribuir items en una dirección    | Definir estructura primero, colocar items después |
| Casos ideales          | Barras de navegación, listas de cards | Layouts de página, cuadrículas, dashboards |
| Se pueden combinar     | Sí                                   | Sí                                   |

> No son competidores: se usan juntos. Grid para el layout general de la página, Flexbox para los componentes dentro de cada celda.

---

## 2. Activar Grid

```css
.contenedor { display: grid; }         /* grid como bloque */
.contenedor { display: inline-grid; }  /* grid como inline */
```

Al activar Grid, los **hijos directos** se convierten en **grid items**. Los nietos y demás descendientes no son grid items.

```html
<div class="grid">            <!-- grid container -->
  <div>Item 1</div>           <!-- grid item -->
  <div>Item 2</div>           <!-- grid item -->
  <div>Item 3</div>           <!-- grid item -->
</div>
```

Sin definir columnas, todos los items se apilan en una sola columna (igual que el flujo normal).

---

## 3. Definir columnas y filas: `grid-template-columns` y `grid-template-rows`

```css
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 columnas de 200px */
  grid-template-rows: 100px 100px;          /* 2 filas de 100px */
}
```

```
┌─────────┬─────────┬─────────┐
│  Item 1 │  Item 2 │  Item 3 │  ← fila 1 (100px)
├─────────┼─────────┼─────────┤
│  Item 4 │  Item 5 │  Item 6 │  ← fila 2 (100px)
└─────────┴─────────┴─────────┘
   200px      200px     200px
```

### La unidad `fr` — fracción del espacio disponible

`fr` (fraction) es la unidad más importante de Grid. Divide el espacio disponible del contenedor en fracciones.

```css
grid-template-columns: 1fr 1fr 1fr;   /* 3 columnas iguales */
grid-template-columns: 2fr 1fr;        /* la primera es el doble que la segunda */
grid-template-columns: 300px 1fr;      /* la primera es fija, la segunda toma el resto */
grid-template-columns: 1fr 2fr 1fr;    /* centro doble de ancho */
```

```
/* 1fr 2fr 1fr en un contenedor de 600px */

┌──────────┬────────────────────┬──────────┐
│  150px   │       300px        │  150px   │
└──────────┴────────────────────┴──────────┘
    1fr            2fr              1fr
```

---

## 4. `repeat()` — evitar repetición

Cuando varias columnas o filas tienen el mismo valor, `repeat()` simplifica la declaración.

```css
grid-template-columns: repeat(3, 1fr);          /* = 1fr 1fr 1fr */
grid-template-columns: repeat(4, 200px);        /* = 200px 200px 200px 200px */
grid-template-columns: repeat(3, 1fr 2fr);      /* = 1fr 2fr 1fr 2fr 1fr 2fr */
grid-template-rows: repeat(2, 150px);           /* 2 filas de 150px */
```

---

## 5. `gap` — espacio entre celdas

```css
.grid { gap: 1rem; }                  /* mismo gap en filas y columnas */
.grid { gap: 1rem 2rem; }             /* gap-fila gap-columna */
.grid { row-gap: 1rem; }              /* solo entre filas */
.grid { column-gap: 2rem; }           /* solo entre columnas */
```

```
┌────────┐  2rem  ┌────────┐  2rem  ┌────────┐
│   A    │        │   B    │        │   C    │
└────────┘        └────────┘        └────────┘
              1rem (row-gap)
┌────────┐  2rem  ┌────────┐  2rem  ┌────────┐
│   D    │        │   E    │        │   F    │
└────────┘        └────────┘        └────────┘
```

> `gap` no agrega espacio en los bordes del contenedor, solo entre las celdas.

---

## 6. Filas automáticas: `grid-auto-rows` y `grid-auto-columns`

Cuando hay más items que celdas definidas, Grid crea filas automáticamente. `grid-auto-rows` controla su tamaño.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;   /* todas las filas que se creen serán de 150px */
}
```

### `minmax()` — tamaño mínimo y máximo

Muy útil con `grid-auto-rows` para que las filas crezcan con el contenido pero nunca sean muy pequeñas.

```css
grid-auto-rows: minmax(100px, auto);
/* mínimo 100px, máximo se ajusta al contenido */
```

---

## 7. Grid responsivo con `auto-fill` y `auto-fit`

Permiten crear grids que cambian de columnas automáticamente sin media queries.

```css
/* auto-fill: crea todas las columnas que quepan, aunque queden vacías */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: igual pero colapsa las columnas vacías y estira las que tienen contenido */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

```
Contenedor de 700px con minmax(200px, 1fr):

auto-fill:  [  230px  ] [  230px  ] [  230px  ] [vacía]
auto-fit:   [   350px  ] [   350px  ]
```

> En la práctica `auto-fit` es más útil para galerías de cards.

---

## 8. El atajo `grid-template`

```css
/* grid-template: filas / columnas */
grid-template: 100px 1fr / repeat(3, 1fr);

/* equivale a: */
grid-template-rows: 100px 1fr;
grid-template-columns: repeat(3, 1fr);
```

---

## 9. Resumen del Módulo 1

| Propiedad                 | Descripción                                              |
|---------------------------|----------------------------------------------------------|
| `display: grid`           | Activa el contexto Grid                                  |
| `grid-template-columns`   | Define el número y tamaño de las columnas                |
| `grid-template-rows`      | Define el número y tamaño de las filas                   |
| `fr`                      | Unidad fraccionaria del espacio disponible               |
| `repeat(n, tamaño)`       | Repite una definición n veces                            |
| `gap`                     | Espacio entre celdas                                     |
| `grid-auto-rows`          | Tamaño de filas creadas automáticamente                  |
| `minmax(min, max)`        | Rango de tamaño para una celda                           |
| `auto-fill` / `auto-fit`  | Número automático de columnas                            |

---
---

# Módulo 2 — Centrar y distribuir elementos

---

## 1. Los dos ejes de Grid

Grid tiene dos ejes que se alinean de forma independiente:

```
Eje inline (→ horizontal):
┌──────────────────────────────────────────┐
→ → → → → → → → → → → → → → → → → → → → → →

Eje block (↓ vertical):
↓   ┌───┐ ┌───┐ ┌───┐
↓   │   │ │   │ │   │
↓   └───┘ └───┘ └───┘
```

| Propiedad         | Controla                              | Eje           |
|-------------------|---------------------------------------|---------------|
| `justify-content` | Distribución de las columnas          | Horizontal    |
| `align-content`   | Distribución de las filas             | Vertical      |
| `justify-items`   | Alineación de items dentro de su celda | Horizontal   |
| `align-items`     | Alineación de items dentro de su celda | Vertical     |
| `justify-self`    | Alineación de un item individual       | Horizontal   |
| `align-self`      | Alineación de un item individual       | Vertical     |
| `place-content`   | Atajo: `align-content` / `justify-content` | Ambos     |
| `place-items`     | Atajo: `align-items` / `justify-items` | Ambos       |
| `place-self`      | Atajo: `align-self` / `justify-self`  | Ambos         |

---

## 2. `justify-content` — distribución horizontal de la cuadrícula

Mueve toda la cuadrícula dentro del contenedor a lo largo del eje horizontal. Solo tiene efecto cuando el total de columnas es menor que el contenedor.

```css
.grid { justify-content: start; }         /* alinea al inicio (por defecto) */
.grid { justify-content: end; }           /* alinea al final */
.grid { justify-content: center; }        /* centra la cuadrícula */
.grid { justify-content: stretch; }       /* estira las columnas para llenar */
.grid { justify-content: space-between; } /* espacio entre columnas, sin bordes */
.grid { justify-content: space-around; }  /* espacio alrededor de cada columna */
.grid { justify-content: space-evenly; }  /* espacio igual entre todos */
```

```
start:          [A][B][C]
center:         ···[A][B][C]···
end:                    [A][B][C]
space-between:  [A]    [B]    [C]
space-evenly:   ·[A]··[B]··[C]·
```

---

## 3. `align-content` — distribución vertical de la cuadrícula

Igual que `justify-content` pero en el eje vertical. Solo tiene efecto cuando el total de filas es menor que la altura del contenedor.

```css
.grid {
  height: 500px;
  align-content: start;
  align-content: center;
  align-content: end;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
}
```

---

## 4. `justify-items` — alineación horizontal dentro de cada celda

Controla cómo se posiciona **cada item dentro de su celda** a lo largo del eje horizontal.

```css
.grid { justify-items: stretch; } /* ocupa todo el ancho de la celda (por defecto) */
.grid { justify-items: start; }   /* alinea al inicio de la celda */
.grid { justify-items: end; }     /* alinea al final de la celda */
.grid { justify-items: center; }  /* centra dentro de la celda */
```

```
stretch (por defecto):
┌────────────────┐
│ item a todo el │
│ ancho de celda │
└────────────────┘

center:
┌────────────────┐
│   ┌────────┐   │
│   │  item  │   │
│   └────────┘   │
└────────────────┘
```

---

## 5. `align-items` — alineación vertical dentro de cada celda

```css
.grid { align-items: stretch; } /* ocupa toda la altura de la celda (por defecto) */
.grid { align-items: start; }   /* alinea arriba */
.grid { align-items: end; }     /* alinea abajo */
.grid { align-items: center; }  /* centra verticalmente */
.grid { align-items: baseline; }/* alinea por la línea base del texto */
```

---

## 6. `place-items` — atajo para `align-items` + `justify-items`

```css
/* place-items: align-items justify-items */
.grid { place-items: center; }         /* centra en ambos ejes */
.grid { place-items: start end; }      /* arriba-izquierda + abajo-derecha */
.grid { place-items: center stretch; } /* centrado vertical, estirado horizontal */
```

### Centrado perfecto de un item en la celda

```css
.grid {
  display: grid;
  place-items: center;
}
/* Todos los items quedan perfectamente centrados en su celda */
```

---

## 7. `justify-self` y `align-self` — controlar un item individual

Sobreescriben `justify-items` y `align-items` para un item específico.

```css
.item-especial {
  justify-self: end;    /* alinea solo este item al final horizontalmente */
  align-self: start;    /* alinea solo este item arriba verticalmente */
}

/* Atajo */
.item-especial {
  place-self: start end;  /* align-self: start, justify-self: end */
}
```

---

## 8. `place-content` — atajo para `align-content` + `justify-content`

```css
/* place-content: align-content justify-content */
.grid { place-content: center; }        /* cuadrícula centrada en el contenedor */
.grid { place-content: end space-between; }
```

---

## 9. Centrado completo — el caso más común

### Centrar un único elemento dentro del contenedor

```css
.contenedor {
  display: grid;
  place-items: center;     /* centra items en sus celdas */
  /* o bien: */
  place-content: center;   /* centra la cuadrícula entera */
}
```

### Centrar múltiples items

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;  /* la cuadrícula centrada si no llena el ancho */
  align-items: start;        /* items alineados arriba en su fila */
  gap: 1.5rem;
}
```

---

## 10. Resumen del Módulo 2

| Propiedad         | Afecta                        | Eje          | Valores principales                          |
|-------------------|-------------------------------|--------------|----------------------------------------------|
| `justify-content` | Distribución de columnas      | Horizontal   | `start` `end` `center` `space-between` etc.  |
| `align-content`   | Distribución de filas         | Vertical     | `start` `end` `center` `space-between` etc.  |
| `justify-items`   | Items en celda                | Horizontal   | `stretch` `start` `end` `center`             |
| `align-items`     | Items en celda                | Vertical     | `stretch` `start` `end` `center` `baseline` |
| `place-items`     | Atajo items en celda          | Ambos        | un valor o dos                               |
| `justify-self`    | Item individual               | Horizontal   | `stretch` `start` `end` `center`             |
| `align-self`      | Item individual               | Vertical     | `stretch` `start` `end` `center`             |
| `place-self`      | Atajo item individual         | Ambos        | un valor o dos                               |
| `place-content`   | Atajo distribución cuadrícula | Ambos        | un valor o dos                               |

---
---

# Módulo 3 — Grid por áreas

---

## 1. ¿Qué es un área de Grid?

Un **área** es un grupo rectangular de celdas con un nombre. Con `grid-template-areas` se puede definir visualmente el layout escribiendo el nombre de las áreas como si fuera un mapa de la página.

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
}
```

```
┌─────────────────────────────┐
│           header            │  80px
├─────────────┬───────────────┤
│   sidebar   │     main      │  1fr
├─────────────┴───────────────┤
│           footer            │  60px
└─────────────────────────────┘
   200px           1fr
```

---

## 2. Asignar un item a un área: `grid-area`

Cada hijo usa `grid-area` con el nombre definido en el mapa.

```css
header  { grid-area: header; }
aside   { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }
```

**HTML correspondiente:**

```html
<div class="grid">
  <header>Header</header>
  <aside>Sidebar</aside>
  <main>Main</main>
  <footer>Footer</footer>
</div>
```

El orden en el HTML no importa: Grid coloca cada elemento en su área.

---

## 3. Reglas para `grid-template-areas`

- Cada fila se escribe entre comillas.
- Los nombres dentro de una fila se separan con espacios.
- Todas las filas deben tener el mismo número de celdas.
- Un área que abarca varias celdas debe ser **rectangular**: su nombre se repite en celdas consecutivas formando un rectángulo.
- Para dejar una celda vacía se usa un punto `.`.

```css
grid-template-areas:
  "header header header"
  "sidebar main   main"
  ".       footer footer";  /* primera celda de la última fila: vacía */
```

```
┌────────┬────────┬────────┐
│ header │ header │ header │
├────────┼────────┴────────┤
│sidebar │      main       │
├────────┼────────┬────────┤
│  vacía │ footer │ footer │
└────────┴────────┴────────┘
```

---

## 4. Layout clásico de página con áreas

```css
.pagina {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
}

.pagina > header  { grid-area: header; }
.pagina > aside   { grid-area: sidebar; }
.pagina > main    { grid-area: main; }
.pagina > footer  { grid-area: footer; }
```

```html
<div class="pagina">
  <header>Nav</header>
  <aside>Menú lateral</aside>
  <main>Contenido principal</main>
  <footer>Pie de página</footer>
</div>
```

---

## 5. Layout responsivo con áreas y media queries

Redefinir el mapa con media queries es todo lo que hace falta para reorganizar completamente el layout.

```css
.pagina {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
}

@media (min-width: 768px) {
  .pagina {
    grid-template-columns: 240px 1fr;
    grid-template-areas:
      "header  header"
      "sidebar main"
      "footer  footer";
  }
}
```

En mobile: todo apilado en una columna. En desktop: layout de dos columnas.

---

## 6. Mezclar áreas con líneas

`grid-area` también puede usarse con números de línea como atajo de `grid-column` + `grid-row`:

```css
/* Con nombre de área */
.item { grid-area: main; }

/* Con líneas (inicio-fila / inicio-col / fin-fila / fin-col) */
.item { grid-area: 1 / 2 / 3 / 4; }
```

> El módulo 4 cubre `grid-column` y `grid-row` en detalle.

---

## 7. `grid-template` — atajo completo

```css
/* grid-template: áreas con tamaños de fila / columnas */
.grid {
  grid-template:
    "header  header"  80px
    "sidebar main"    1fr
    "footer  footer"  60px
    / 200px  1fr;
}
/*
  Filas:    80px, 1fr, 60px
  Columnas: 200px, 1fr
*/
```

---

## 8. Resumen del Módulo 3

| Propiedad                | Uso                                                        |
|--------------------------|------------------------------------------------------------|
| `grid-template-areas`    | Define el mapa visual del layout con nombres               |
| `grid-area: nombre`      | Asigna un item a un área con nombre                        |
| `.` en el mapa           | Deja esa celda vacía                                       |
| `grid-template`          | Atajo: áreas + tamaños de filas + columnas                 |
| Media queries            | Redefinir el mapa para cambiar el layout responsivamente   |

---
---

# Módulo 4 — Celdas irregulares

---

## 1. Líneas de Grid

Cuando se crea una cuadrícula, CSS Grid genera líneas numeradas automáticamente. Las columnas crean líneas verticales y las filas crean líneas horizontales. La numeración empieza en 1 y también se puede contar desde el final con números negativos.

```
Cuadrícula de 3 columnas × 2 filas:

Líneas de columna:   1    2    3    4
                     ↓    ↓    ↓    ↓
                     ┌────┬────┬────┐  ← línea de fila 1
                     │    │    │    │
                     ├────┼────┼────┤  ← línea de fila 2
                     │    │    │    │
                     └────┴────┴────┘  ← línea de fila 3
                    (-4) (-3) (-2) (-1)   (numeración negativa)
```

---

## 2. `grid-column` y `grid-row` — posicionar con líneas

Permiten que un item ocupe varias celdas indicando entre qué líneas se extiende.

```css
/* Sintaxis: inicio / fin */
.item { grid-column: 1 / 3; }   /* de la línea 1 a la 3 → ocupa 2 columnas */
.item { grid-row: 1 / 3; }      /* de la línea 1 a la 3 → ocupa 2 filas */

/* Con span: en lugar de indicar el fin, se indica cuántas celdas ocupa */
.item { grid-column: 1 / span 2; }   /* empieza en 1, ocupa 2 columnas */
.item { grid-row: span 3; }          /* ocupa 3 filas desde donde esté */

/* Con líneas negativas para llegar hasta el final */
.item { grid-column: 1 / -1; }   /* de la primera a la última línea (ancho total) */
```

---

## 3. Ejemplos visuales de `span`

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 0.5rem;
}
```

```
Cuadrícula de 4×3:

       col 1   col 2   col 3   col 4
fila 1 ┌───────────────┬───────┬───────┐
       │     A         │   B   │   C   │
       │ col 1/span 2  │       │       │
fila 2 ├───────┬───────┴───────┼───────┤
       │   D   │       E       │   F   │
       │       │  col 2/span 2 │       │
fila 3 ├───────┼───────┬───────┴───────┤
       │   G   │   H   │       I       │
       │       │       │  col 3/span 2 │
       └───────┴───────┴───────────────┘
```

```css
.A { grid-column: 1 / span 2; }
.E { grid-column: 2 / span 2; }
.I { grid-column: 3 / span 2; }
```

---

## 4. Items que ocupan múltiples filas y columnas

```css
.destacado {
  grid-column: 1 / span 2;   /* 2 columnas de ancho */
  grid-row: 1 / span 2;      /* 2 filas de alto */
}
```

```
       col 1         col 2     col 3
fila 1 ┌─────────────────────┬────────┐
       │                     │   B    │
fila 2 │      destacado      ├────────┤
       │   2 cols × 2 filas  │   C    │
fila 3 ├──────────┬──────────┴────────┤
       │    D     │         E         │
       └──────────┴───────────────────┘
```

---

## 5. Posicionamiento absoluto con líneas

```css
/* Posicionar de forma explícita usando todas las propiedades */
.banner {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}

/* Equivalente con atajos */
.banner {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}
```

---

## 6. Flujo automático: `grid-auto-flow`

Controla cómo Grid coloca los items que no tienen posición explícita.

```css
.grid { grid-auto-flow: row; }    /* llena fila a fila (por defecto) */
.grid { grid-auto-flow: column; } /* llena columna a columna */
.grid { grid-auto-flow: dense; }  /* intenta rellenar huecos con items más pequeños */
```

### El valor `dense`

Cuando hay items de diferentes tamaños, quedan huecos en la cuadrícula. `dense` reordena los items automáticamente para rellenar esos huecos (el orden visual puede diferir del orden del HTML).

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px;
  grid-auto-flow: dense;
  gap: 1rem;
}

.galeria .grande {
  grid-column: span 2;
  grid-row: span 2;
}
```

```
Sin dense:                  Con dense:
┌───┬───┬───┬───┐           ┌───────┬───┬───┐
│ 1 │   2   │ 3 │           │       │ 3 │ 4 │
├───┤ 2×2   ├───┤           │  1    ├───┼───┤
│   │       │   │           │ 2×2   │ 5 │ 6 │
├───┴───┬───┴───┤           ├───┬───┴───┬───┤
│ vacío │  4    │           │ 7 │   8   │ 9 │
└───────┴───────┘           └───┴───────┴───┘
   huecos sin llenar            sin huecos
```

---

## 7. Nombrar líneas de Grid

Se puede dar nombre a las líneas para referenciarlas por nombre en vez de número.

```css
.grid {
  grid-template-columns:
    [inicio] 200px [contenido-inicio] 1fr [contenido-fin] 200px [fin];
  grid-template-rows:
    [header-inicio] 80px [header-fin content-inicio] 1fr [content-fin footer-inicio] 60px [footer-fin];
}

.sidebar { grid-column: inicio / contenido-inicio; }
.main    { grid-column: contenido-inicio / contenido-fin; }
.aside   { grid-column: contenido-fin / fin; }
```

---

## 8. Layout de revista / masonry manual

```css
.revista {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 150px);
  gap: 1rem;
}

/* Artículo principal: ocupa la mitad izquierda */
.principal {
  grid-column: 1 / 3;  /* 2 columnas */
  grid-row: 1 / 3;     /* 2 filas */
}

/* Nota destacada: columna completa */
.destacado {
  grid-column: 1 / -1;  /* toda la fila */
  grid-row: 4 / 5;
}

/* Item en esquina superior derecha */
.lateral-arriba {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
}
```

```
       col 1    col 2    col 3    col 4
fila 1 ┌─────────────────┬────────┬────────┐
       │                 │   B    │ lateral│
fila 2 │   principal     ├────────┤ arriba │
       │   2col × 2fila  │   C    │        │
fila 3 ├────────┬────────┴────────┴────────┤
       │   D    │           E              │
fila 4 ├────────┴──────────────────────────┤
       │              destacado            │
       └───────────────────────────────────┘
```

---

## 9. Resumen del Módulo 4

| Propiedad / valor       | Descripción                                                        |
|-------------------------|--------------------------------------------------------------------|
| `grid-column: a / b`    | El item ocupa de la línea a a la b (columnas)                      |
| `grid-row: a / b`       | El item ocupa de la línea a a la b (filas)                         |
| `span n`                | El item se extiende n celdas desde donde está                      |
| `1 / -1`                | De la primera a la última línea (ancho o alto completo)            |
| `grid-column-start/end` | Propiedades individuales de inicio y fin de columna                |
| `grid-row-start/end`    | Propiedades individuales de inicio y fin de fila                   |
| `grid-auto-flow: dense` | Rellena huecos automáticamente reordenando items                   |
| Líneas con nombre       | `[nombre]` en `grid-template-*` para referenciar por nombre        |

---

## 10. Resumen general — cuándo usar qué

| Necesidad                                    | Herramienta recomendada                           |
|----------------------------------------------|---------------------------------------------------|
| Layout de página (header, sidebar, main…)    | `grid-template-areas`                             |
| Cuadrícula de cards sin tamaños fijos        | `repeat(auto-fit, minmax(…, 1fr))`                |
| Centrar un elemento en pantalla completa     | `display: grid; place-items: center`              |
| Cards de distintos tamaños en cuadrícula     | `grid-column/row: span n` + `grid-auto-flow: dense` |
| Layout responsivo sin media queries          | `auto-fit` / `auto-fill` + `minmax()`             |
| Elementos que deben quedar en celdas exactas | `grid-column: a / b` y `grid-row: a / b`          |
| Un componente interno con items en fila      | Flexbox (no Grid)                                 |

---
