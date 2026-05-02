# Apuntes CSS — Layout: Flexbox

---

## 1. ¿Qué es Flexbox?

Flexbox (Flexible Box Layout) es un modelo de layout de CSS diseñado para **distribuir espacio y alinear elementos en una dimensión**: ya sea en fila (horizontal) o en columna (vertical).

Antes de Flexbox, lograr cosas simples como centrar un elemento, crear columnas de igual altura o distribuir espacio entre items requería hacks con `float`, `display: table`, márgenes negativos o posicionamiento absoluto. Flexbox vino a **reemplazar esas técnicas** con un sistema limpio, predecible y flexible.

### Lo que Flexbox reemplazó

| Tarea antigua                         | Técnica vieja              | Con Flexbox        |
|---------------------------------------|----------------------------|--------------------|
| Centrar vertical y horizontalmente    | `position: absolute` + transforms | `justify-content: center` + `align-items: center` |
| Columnas de igual altura              | `display: table-cell`      | `align-items: stretch` |
| Distribución de espacio entre items   | Márgenes calculados a mano | `justify-content: space-between` |
| Elemento al fondo del contenedor      | `position: absolute; bottom: 0` | `margin-top: auto` |
| Columnas con `float`                  | `float: left` + clearfix   | `display: flex`    |

---

## 2. Cómo funciona: contenedor y elementos hijos

Flexbox opera en **dos niveles**:

- **Flex container** — el elemento al que se le aplica `display: flex`. Define el contexto flex.
- **Flex items** — los **hijos directos** del flex container. Son los que se distribuyen y alinean.

```html
<div class="contenedor">   <!-- flex container -->
  <div class="item">A</div>  <!-- flex item -->
  <div class="item">B</div>  <!-- flex item -->
  <div class="item">C</div>  <!-- flex item -->
</div>
```

```css
.contenedor {
  display: flex; /* activa el contexto flex */
}
```

> Solo los **hijos directos** se convierten en flex items. Los nietos y demás descendientes no se ven afectados, a menos que también sean flex containers.

---

## 3. Los dos ejes

Flexbox trabaja con dos ejes perpendiculares:

```
  eje principal (main axis) →→→→→→→→→→→→→→→
  ┌────────────────────────────────────────┐
  │  [item A]   [item B]   [item C]        │  ↕ eje cruzado
  └────────────────────────────────────────┘     (cross axis)
```

- **Eje principal (main axis):** la dirección en la que se colocan los items. Definida por `flex-direction`.
- **Eje cruzado (cross axis):** perpendicular al eje principal.

El eje principal puede ser horizontal o vertical, y en cualquier sentido. Todo en Flexbox se define en función de estos ejes, no de izquierda/derecha/arriba/abajo.

---

## 4. Activar Flexbox

```css
.contenedor {
  display: flex;         /* bloque flex (ocupa todo el ancho disponible) */
}

.contenedor {
  display: inline-flex;  /* flex en línea (ocupa solo el espacio de su contenido) */
}
```

---

## 5. Propiedades del contenedor (`flex container`)

---

### `flex-direction` — dirección del eje principal

Define la dirección en la que se colocan los flex items.

```css
.contenedor { flex-direction: row; }             /* → izquierda a derecha (por defecto) */
.contenedor { flex-direction: row-reverse; }     /* ← derecha a izquierda */
.contenedor { flex-direction: column; }          /* ↓ arriba hacia abajo */
.contenedor { flex-direction: column-reverse; }  /* ↑ abajo hacia arriba */
```

```
row:             [A] [B] [C]   →
row-reverse:     [C] [B] [A]   ←
column:          [A]
                 [B]
                 [C]
column-reverse:  [C]
                 [B]
                 [A]
```

---

### `flex-wrap` — salto de línea

Por defecto todos los items intentan caber en una sola línea. `flex-wrap` controla si pueden saltar a la siguiente.

```css
.contenedor { flex-wrap: nowrap; }         /* todos en una línea, se comprimen (por defecto) */
.contenedor { flex-wrap: wrap; }           /* saltan a la siguiente línea si no entran */
.contenedor { flex-wrap: wrap-reverse; }   /* saltan hacia arriba (o al inicio del eje cruzado) */
```

---

### `flex-flow` — atajo de `flex-direction` + `flex-wrap`

```css
.contenedor { flex-flow: row wrap; }
.contenedor { flex-flow: column nowrap; }
.contenedor { flex-flow: row-reverse wrap; }
```

---

### `justify-content` — alineación en el eje principal

Distribuye el **espacio sobrante** a lo largo del eje principal.

```css
.contenedor { justify-content: flex-start; }     /* items al inicio (por defecto) */
.contenedor { justify-content: flex-end; }       /* items al final */
.contenedor { justify-content: center; }         /* items centrados */
.contenedor { justify-content: space-between; }  /* espacio igual entre items (sin bordes) */
.contenedor { justify-content: space-around; }   /* espacio igual alrededor de cada item */
.contenedor { justify-content: space-evenly; }   /* espacio igual entre items y bordes */
```

```
flex-start:    [A][B][C]_ _ _ _ _
flex-end:      _ _ _ _ _[A][B][C]
center:        _ _ [A][B][C] _ _
space-between: [A] _ _ _ [B] _ _ _ [C]
space-around:  _[A]_ _ _[B]_ _ _[C]_
space-evenly:  _ _[A]_ _ _[B]_ _ _[C]_ _
```

---

### `align-items` — alineación en el eje cruzado (una línea)

Alinea los items a lo largo del eje cruzado cuando hay **una sola línea**.

```css
.contenedor { align-items: stretch; }      /* estira los items para llenar el alto (por defecto) */
.contenedor { align-items: flex-start; }   /* items al inicio del eje cruzado */
.contenedor { align-items: flex-end; }     /* items al final del eje cruzado */
.contenedor { align-items: center; }       /* items centrados en el eje cruzado */
.contenedor { align-items: baseline; }     /* items alineados por su línea base de texto */
```

```
stretch:     ┌──┐ ┌────┐ ┌───┐   (todos llenan el alto)
             └──┘ └────┘ └───┘

flex-start:  ┌──┐ ┌────┐ ┌───┐
                                   (espacio abajo)

center:           ┌──┐ ┌────┐ ┌───┐    (centrados)

flex-end:                  ┌──┐ ┌────┐ ┌───┐   (pegados abajo)
```

---

### `align-content` — alineación en el eje cruzado (múltiples líneas)

Solo aplica cuando hay **más de una línea** (con `flex-wrap: wrap`). Distribuye el espacio entre las líneas.

```css
.contenedor { align-content: stretch; }       /* líneas se estiran para llenar (por defecto) */
.contenedor { align-content: flex-start; }    /* líneas al inicio */
.contenedor { align-content: flex-end; }      /* líneas al final */
.contenedor { align-content: center; }        /* líneas centradas */
.contenedor { align-content: space-between; } /* espacio igual entre líneas */
.contenedor { align-content: space-around; }  /* espacio igual alrededor de cada línea */
.contenedor { align-content: space-evenly; }  /* espacio completamente uniforme */
```

---

### `gap` — espacio entre items

Reemplaza el uso de márgenes para separar flex items. Limpio y no afecta los bordes exteriores.

```css
.contenedor { gap: 1rem; }              /* igual entre filas y columnas */
.contenedor { gap: 1rem 2rem; }         /* row-gap | column-gap */
.contenedor { row-gap: 1rem; }
.contenedor { column-gap: 2rem; }
```

---

### Centrado perfecto con Flexbox

El caso de uso más famoso: centrar un elemento vertical y horizontalmente.

```css
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

---

## 6. Propiedades de los items (`flex items`)

---

### `flex-grow` — crecer para llenar espacio

Define qué fracción del espacio sobrante del contenedor toma el item. El valor es un número sin unidad (factor de crecimiento).

```css
.item { flex-grow: 0; }   /* no crece (por defecto) */
.item { flex-grow: 1; }   /* crece para llenar el espacio disponible */
.item { flex-grow: 2; }   /* crece el doble que un item con flex-grow: 1 */
```

```css
/* Item A: flex-grow 1, Item B: flex-grow 2, Item C: flex-grow 1 */
/* El espacio sobrante se reparte: 1/4 - 2/4 - 1/4 */
.a { flex-grow: 1; }
.b { flex-grow: 2; }
.c { flex-grow: 1; }
```

---

### `flex-shrink` — encogerse cuando no hay espacio

Define cuánto puede encogerse un item si el espacio es insuficiente.

```css
.item { flex-shrink: 1; }   /* puede encogerse proporcionalmente (por defecto) */
.item { flex-shrink: 0; }   /* no se encoge nunca (mantiene su tamaño base) */
.item { flex-shrink: 2; }   /* se encoge el doble que uno con flex-shrink: 1 */
```

---

### `flex-basis` — tamaño base del item

Define el tamaño **inicial** del item antes de que se apliquen `flex-grow` y `flex-shrink`. Es como un `width` (en `row`) o `height` (en `column`) que actúa como punto de partida.

```css
.item { flex-basis: auto; }     /* tamaño según su contenido o width/height (por defecto) */
.item { flex-basis: 0; }        /* comienza desde cero (el crecimiento parte de nada) */
.item { flex-basis: 200px; }    /* tamaño base fijo */
.item { flex-basis: 30%; }      /* porcentaje del contenedor */
```

---

### `flex` — atajo de `flex-grow`, `flex-shrink` y `flex-basis`

Es la forma recomendada de escribir las tres propiedades juntas.

```css
/* flex: grow shrink basis */
.item { flex: 0 1 auto; }    /* valor por defecto */
.item { flex: 1 1 0; }       /* crece, se encoge, comienza desde cero */
.item { flex: 1; }           /* equivale a flex: 1 1 0 */
.item { flex: 2; }           /* crece el doble que flex: 1 */
.item { flex: none; }        /* equivale a flex: 0 0 auto — tamaño fijo */
.item { flex: auto; }        /* equivale a flex: 1 1 auto */
```

#### Patrones comunes

```css
/* Todos los items del mismo tamaño, llenando el contenedor */
.item { flex: 1; }

/* Un item ocupa el doble que los demás */
.item-destacado { flex: 2; }
.item           { flex: 1; }

/* Item de tamaño fijo que no crece ni se encoge */
.sidebar { flex: 0 0 260px; }

/* El contenido principal toma todo el espacio restante */
.main { flex: 1; }
```

---

### `align-self` — alineación individual en el eje cruzado

Sobreescribe `align-items` para un item específico.

```css
.item { align-self: auto; }        /* hereda del contenedor (por defecto) */
.item { align-self: stretch; }
.item { align-self: flex-start; }
.item { align-self: flex-end; }
.item { align-self: center; }
.item { align-self: baseline; }
```

```css
/* Todos centrados, excepto uno que va al fondo */
.contenedor {
  align-items: center;
  height: 200px;
}

.item-especial {
  align-self: flex-end;
}
```

---

### `order` — orden de aparición

Por defecto los items aparecen en el orden del HTML. `order` permite cambiar ese orden visualmente sin tocar el HTML.

```css
.item { order: 0; }    /* valor por defecto para todos */
.item { order: 1; }    /* aparece después de los de order: 0 */
.item { order: -1; }   /* aparece antes de los de order: 0 */
```

```css
/* Mover el footer al principio visualmente (útil para accesibilidad o responsive) */
.header  { order: 1; }
.main    { order: 2; }
.sidebar { order: 3; }
.footer  { order: 4; }

/* En mobile, reordenar: */
@media (max-width: 600px) {
  .sidebar { order: 3; }
  .footer  { order: 5; }
}
```

> `order` cambia el orden visual pero **no el orden del DOM**. Los lectores de pantalla y la navegación por teclado siguen el orden del HTML.

---

## 7. Técnicas y patrones comunes

---

### Navbar con logo a la izquierda y links a la derecha

```css
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 60px;
}
```

---

### Barra lateral fija + contenido principal flexible

```css
.layout {
  display: flex;
  gap: 2rem;
}

.sidebar {
  flex: 0 0 260px;  /* ancho fijo, no crece ni se encoge */
}

.main {
  flex: 1;           /* toma todo el espacio restante */
}
```

---

### Footer pegado al fondo de la página

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;   /* empuja el footer hacia abajo */
}
```

---

### Tarjetas de igual alto en una fila

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.tarjeta {
  flex: 1 1 280px;   /* crece, se encoge, base de 280px */
  display: flex;
  flex-direction: column;
}

.tarjeta .cuerpo {
  flex: 1;   /* empuja el footer de la tarjeta hacia abajo */
}
```

---

### Centrar con `margin: auto`

Dentro de un flex container, `margin: auto` absorbe todo el espacio disponible en esa dirección.

```css
nav {
  display: flex;
  align-items: center;
}

.logo   { margin-right: auto; }  /* empuja todo lo demás a la derecha */
.link   { }
.boton  { margin-left: 1rem; }
```

```css
/* Centrar un solo item dentro del contenedor */
.contenedor {
  display: flex;
}

.item-centrado {
  margin: auto;  /* auto en todos los lados: centra vertical y horizontal */
}
```

---

## 8. Resumen de propiedades

### Propiedades del contenedor

| Propiedad         | Valores principales                                              |
|-------------------|------------------------------------------------------------------|
| `display`         | `flex` / `inline-flex`                                           |
| `flex-direction`  | `row` / `row-reverse` / `column` / `column-reverse`             |
| `flex-wrap`       | `nowrap` / `wrap` / `wrap-reverse`                               |
| `flex-flow`       | Atajo: `flex-direction` + `flex-wrap`                            |
| `justify-content` | `flex-start` / `flex-end` / `center` / `space-between` / `space-around` / `space-evenly` |
| `align-items`     | `stretch` / `flex-start` / `flex-end` / `center` / `baseline`   |
| `align-content`   | `stretch` / `flex-start` / `flex-end` / `center` / `space-between` / `space-around` |
| `gap`             | `<longitud>` / `<longitud> <longitud>` (row-gap column-gap)      |

### Propiedades de los items

| Propiedad      | Valores principales                                              |
|----------------|------------------------------------------------------------------|
| `flex-grow`    | Número sin unidad (`0`, `1`, `2`...)                             |
| `flex-shrink`  | Número sin unidad (`0`, `1`, `2`...)                             |
| `flex-basis`   | `auto` / `0` / longitud / porcentaje                             |
| `flex`         | Atajo: `flex-grow flex-shrink flex-basis` / `auto` / `none` / número |
| `align-self`   | `auto` / `stretch` / `flex-start` / `flex-end` / `center` / `baseline` |
| `order`        | Número entero (positivo, negativo o cero)                        |

---
