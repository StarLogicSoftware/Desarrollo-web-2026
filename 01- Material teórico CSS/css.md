# Apuntes CSS

---

## 1. Unidades de medida

### `px` — píxeles

Unidad fija. Siempre mide lo mismo sin importar nada del entorno.

```css
font-size: 16px;
width: 300px;
margin: 10px;
```

**Cuándo usarla:** bordes, sombras, tamaños fijos que no deben cambiar.

---

### `rem` — relative to root element

Es relativa al `font-size` del elemento `<html>` (la raíz).  
Por defecto el navegador tiene `16px` en el `<html>`, entonces:

- `1rem` = 16px  
- `2rem` = 32px  
- `0.5rem` = 8px  

```css
html {
  font-size: 16px; /* base */
}

h1    { font-size: 2rem; }     /* 32px */
p     { font-size: 1rem; }     /* 16px */
small { font-size: 0.8rem; }   /* 12.8px */
```

**Cuándo usarla:** tipografía y espaciados. Si cambiás el `font-size` del `<html>`, todo escala junto.

---

### `em` — relative to parent element

Es relativa al `font-size` del **elemento padre** (o del propio elemento si se usa en `font-size`).

```css
/* Si el padre tiene font-size: 20px */
p {
  font-size: 1.5em; /* 30px */
  padding: 1em;     /* 30px (relativo al font-size del propio p) */
}
```

**Cuándo usarla:** padding y margin internos de componentes que deben escalar con su propio texto.  
**Cuidado:** se acumula si hay elementos anidados (el hijo hereda del padre, y su hijo del suyo, etc.).

---

### `%` — porcentaje

Es relativa al **elemento padre**.

```css
/* El hijo ocupa la mitad del ancho del padre */
div {
  width: 50%;
}

/* En font-size, es relativo al font-size del padre */
p {
  font-size: 120%; /* 120% del tamaño del padre */
}
```

**Cuándo usarla:** anchos fluidos, layouts que se adaptan al contenedor.

---

### `vw` — viewport width

`1vw` = 1% del **ancho total de la ventana del navegador**.

```css
/* El elemento ocupa el 100% del ancho de la ventana */
header {
  width: 100vw;
}

/* Tipografía que escala con la ventana */
h1 {
  font-size: 5vw;
}
```

**Cuándo usarla:** elementos que deben cubrir todo el ancho de pantalla, como banners o headers.

---

### `vh` — viewport height

`1vh` = 1% del **alto total de la ventana del navegador**.

```css
/* El elemento ocupa toda la pantalla de alto */
section {
  height: 100vh;
}

/* La mitad de la pantalla */
.hero {
  height: 50vh;
}
```

**Cuándo usarla:** secciones "pantalla completa", heroes, portadas.

---

### Resumen comparativo

| Unidad | Relativa a               | Ejemplo típico           |
|--------|--------------------------|--------------------------|
| px     | Nada (fija)              | Bordes, sombras          |
| rem    | `font-size` del `<html>` | Tipografía, espaciados   |
| em     | `font-size` del padre    | Padding interno          |
| %      | Dimensión del padre      | Anchos fluidos           |
| vw     | Ancho de la ventana      | Secciones full-width     |
| vh     | Alto de la ventana       | Secciones full-height    |

---

## 2. Colores

CSS permite expresar colores de varias formas.

---

### Colores por nombre

CSS tiene 140 nombres de colores predefinidos en inglés.

```css
color: red;
color: blue;
color: skyblue;
color: tomato;
color: transparent; /* completamente invisible */
```

**Cuándo usarlos:** pruebas rápidas o colores estándar muy conocidos. No son recomendables para producción porque no permiten ajuste fino.

---

### Hexadecimal (`#rrggbb`)

Es el formato más usado. Combina rojo, verde y azul en base 16.  
Cada par va de `00` (mínimo) a `ff` (máximo).

```css
color: #ff0000;  /* rojo puro */
color: #0000ff;  /* azul puro */
color: #0d3b6e;  /* azul marino */
color: #5bb8e8;  /* celeste */
color: #ffffff;  /* blanco */
color: #000000;  /* negro */
```

Versión corta: cuando cada par tiene dos letras iguales se puede escribir con tres caracteres.

```css
color: #f00;  /* equivale a #ff0000 */
color: #fff;  /* equivale a #ffffff */
color: #09c;  /* equivale a #0099cc */
```

Con canal alfa (transparencia), se agrega un cuarto par:

```css
color: #0d3b6e80; /* azul marino al 50% de opacidad */
```

---

### `rgb()` y `rgba()`

Define el color con valores numéricos del 0 al 255 para rojo, verde y azul.

```css
color: rgb(13, 59, 110);    /* azul marino */
color: rgb(91, 184, 232);   /* celeste */
color: rgb(255, 0, 0);      /* rojo puro */
```

`rgba()` agrega un cuarto valor para la **opacidad**, de `0` (invisible) a `1` (opaco).

```css
color: rgba(13, 59, 110, 1);     /* totalmente opaco */
color: rgba(13, 59, 110, 0.5);   /* 50% de opacidad */
color: rgba(13, 59, 110, 0.1);   /* casi transparente */
color: rgba(0, 0, 0, 0.3);       /* negro al 30%, útil para superposiciones */
```

---

### `hsl()` y `hsla()`

Define el color por **tono** (hue), **saturación** y **luminosidad**. Más intuitivo para ajustar colores.

- **H** (hue): ángulo en el círculo cromático, de `0` a `360`
  - 0° = rojo, 120° = verde, 240° = azul
- **S** (saturation): intensidad del color, de `0%` (gris) a `100%` (vivo)
- **L** (lightness): luminosidad, de `0%` (negro) a `100%` (blanco)

```css
color: hsl(210, 80%, 24%);   /* azul marino oscuro */
color: hsl(200, 75%, 63%);   /* celeste */
color: hsl(0, 0%, 100%);     /* blanco */
color: hsl(0, 0%, 0%);       /* negro */
```

`hsla()` agrega opacidad igual que `rgba()`.

```css
color: hsla(210, 80%, 24%, 0.5); /* azul marino al 50% */
```

**Ventaja de HSL:** para aclarar u oscurecer un color, solo se cambia el tercer valor (L) sin tocar los otros.

---

### Resumen de formatos

| Formato     | Ejemplo                       | Soporta transparencia |
|-------------|-------------------------------|-----------------------|
| Nombre      | `skyblue`                     | Solo `transparent`    |
| Hexadecimal | `#0d3b6e` / `#0d3b6e80`       | Con 8 caracteres      |
| rgb / rgba  | `rgb(13, 59, 110)`            | Con `rgba()`          |
| hsl / hsla  | `hsl(210, 80%, 24%)`          | Con `hsla()`          |

---

## 3. Sombras

CSS permite agregar sombras tanto a cajas (elementos) como a textos.

---

### `box-shadow` — sombra en elementos

Agrega una sombra alrededor de un elemento. Puede ir hacia afuera (por defecto) o hacia adentro.

**Sintaxis:**
```
box-shadow: offset-x  offset-y  blur  spread  color;
```

- **offset-x**: desplazamiento horizontal. Positivo = derecha, negativo = izquierda.
- **offset-y**: desplazamiento vertical. Positivo = abajo, negativo = arriba.
- **blur** *(opcional)*: difuminado. 0 = sombra nítida. Más valor = más difusa.
- **spread** *(opcional)*: expansión. Positivo = más grande que el elemento, negativo = más chica.
- **color**: color de la sombra (se recomienda rgba para controlar opacidad).

```css
/* Sombra básica */
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);

/* Sin desplazamiento, solo difuminado alrededor */
box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);

/* Sombra nítida sin blur */
box-shadow: 4px 4px 0 #0d3b6e;

/* Sombra expandida */
box-shadow: 0 4px 16px 4px rgba(13, 59, 110, 0.4);

/* Sombra negativa (hacia arriba e izquierda) */
box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.2);

/* Sombra interior con inset */
box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);

/* Varias sombras a la vez, separadas por coma */
box-shadow: 2px 2px 4px rgba(0,0,0,0.2), -2px -2px 4px rgba(255,255,255,0.5);
```

---

### `text-shadow` — sombra en texto

Funciona igual que `box-shadow` pero aplicado a las letras. No tiene `spread` ni `inset`.

**Sintaxis:**
```
text-shadow: offset-x  offset-y  blur  color;
```

```css
/* Sombra suave debajo del texto */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

/* Sombra sin blur (nítida) */
text-shadow: 3px 3px 0 #0d3b6e;

/* Efecto glow (brillo alrededor) */
text-shadow: 0 0 10px #5bb8e8, 0 0 20px #5bb8e8;

/* Varias sombras: efecto de relieve */
text-shadow: 1px 1px 0 #ffffff, -1px -1px 0 #0d3b6e;
```

---

### Diferencias clave

| Propiedad     | Aplica a        | Tiene `inset` | Tiene `spread` |
|---------------|-----------------|---------------|----------------|
| `box-shadow`  | Caja/elemento   | Sí            | Sí             |
| `text-shadow` | Texto           | No            | No             |

---

## 4. Degradados (`gradient`)

Un degradado es un fondo que transiciona de un color a otro. Se usa en `background` o `background-image`.

### `linear-gradient` — degradado lineal

Va de un punto a otro en línea recta.

```css
/* De arriba hacia abajo (por defecto, si no se indica dirección) */
background: linear-gradient(#0d3b6e, #5bb8e8);
```

---

### Dirección con grados (`deg`)

El primer parámetro puede ser un ángulo. Indica hacia dónde apunta el degradado, es decir, dónde termina el último color.

```
        0deg
         ↑
270deg ←   → 90deg
         ↓
        180deg
```

- `0deg` → el degradado va de abajo hacia arriba
- `90deg` → de izquierda a derecha
- `180deg` → de arriba hacia abajo (igual que el valor por defecto)
- `270deg` → de derecha a izquierda
- `45deg` → diagonal de abajo-izquierda hacia arriba-derecha
- `135deg` → diagonal de arriba-izquierda hacia abajo-derecha

```css
background: linear-gradient(0deg, #0d3b6e, #5bb8e8);   /* abajo → arriba */
background: linear-gradient(90deg, #0d3b6e, #5bb8e8);  /* izq → der */
background: linear-gradient(180deg, #0d3b6e, #5bb8e8); /* arriba → abajo */
background: linear-gradient(45deg, #0d3b6e, #5bb8e8);  /* diagonal ↗ */
background: linear-gradient(135deg, #0d3b6e, #5bb8e8); /* diagonal ↘ */
```

---

### Dirección con palabras (`to ...`)

En lugar de grados, se puede usar `to` seguido de una o dos palabras que indican el destino del degradado. Es más legible.

| Valor             | Equivalente en grados | Dirección             |
|-------------------|----------------------|-----------------------|
| `to bottom`       | `180deg`             | Arriba → abajo        |
| `to top`          | `0deg`               | Abajo → arriba        |
| `to right`        | `90deg`              | Izquierda → derecha   |
| `to left`         | `270deg`             | Derecha → izquierda   |
| `to bottom right` | ~`135deg`            | Diagonal ↘            |
| `to bottom left`  | ~`225deg`            | Diagonal ↙            |
| `to top right`    | ~`45deg`             | Diagonal ↗            |
| `to top left`     | ~`315deg`            | Diagonal ↖            |

```css
background: linear-gradient(to right, #0d3b6e, #5bb8e8);
background: linear-gradient(to bottom right, #0d3b6e, #5bb8e8);
background: linear-gradient(to top, #0d3b6e, #5bb8e8);
```

---

### Tres o más colores

Se pueden agregar tantos colores como se quiera, separados por coma. El navegador los distribuye de forma equitativa a lo largo del degradado.

```css
/* Tres colores: azul marino → azul medio → celeste */
background: linear-gradient(to right, #0d3b6e, #1a6ea8, #5bb8e8);

/* Cuatro colores */
background: linear-gradient(to right, #0d3b6e, #1a6ea8, #2a9fd6, #5bb8e8);
```

---

### Color stops — controlar dónde empieza cada color

Por defecto los colores se distribuyen de manera pareja. Con los **color stops** se puede indicar exactamente en qué punto del degradado aparece cada color, usando un porcentaje.

```css
/* Distribución pareja automática (sin stops) */
background: linear-gradient(to right, #0d3b6e, #1a6ea8, #5bb8e8);
/* equivale a:                         0%        50%       100%   */

/* Distribución manual: el azul medio aparece recién al 80% */
background: linear-gradient(to right, #0d3b6e 0%, #1a6ea8 80%, #5bb8e8 100%);
/* Resultado: el primer tramo (0-80%) es casi todo azul marino */

/* El azul medio aparece pronto, al 20% */
background: linear-gradient(to right, #0d3b6e 0%, #1a6ea8 20%, #5bb8e8 100%);
/* Resultado: cambia rápido al principio y el celeste ocupa la mayor parte */
```

Un color stop también puede usarse para crear un corte brusco (sin transición) poniendo dos colores en el mismo punto:

```css
/* Corte brusco a la mitad: mitad azul marino, mitad celeste sin mezcla */
background: linear-gradient(to right, #0d3b6e 50%, #5bb8e8 50%);
```

### `radial-gradient` — degradado radial

Parte desde un centro y se expande hacia afuera.

```css
background: radial-gradient(#5bb8e8, #0d3b6e);

/* Desde una posición específica */
background: radial-gradient(circle at top left, #5bb8e8, #0d3b6e);
```

---

## 5. Imágenes de fondo y sus propiedades

CSS tiene varias propiedades para controlar el fondo de un elemento.

---

### `background-color`

Define un color de fondo sólido.

```css
div {
  background-color: #1a6ea8;
  background-color: skyblue;
  background-color: rgba(26, 110, 168, 0.5); /* con transparencia */
}
```

Si también hay una imagen de fondo, el color queda **debajo** de la imagen y se ve en las zonas transparentes.

---

### `background-image`

Aplica una imagen como fondo. Acepta una URL o un degradado.

```css
/* Imagen desde archivo */
div {
  background-image: url("imagen.jpg");
}

/* Degradado (es una imagen para CSS) */
div {
  background-image: linear-gradient(to right, #0d3b6e, #5bb8e8);
}

/* Imagen encima de degradado (se apilan, primero lo que se declara primero) */
div {
  background-image: url("imagen.png"), linear-gradient(to right, #0d3b6e, #5bb8e8);
}
```

---

### `background-repeat`

Controla si la imagen se repite para cubrir el fondo.

| Valor       | Comportamiento                                     |
|-------------|----------------------------------------------------|
| `repeat`    | Se repite en X e Y (valor por defecto)             |
| `no-repeat` | No se repite, aparece una sola vez                 |
| `repeat-x`  | Solo se repite horizontalmente                     |
| `repeat-y`  | Solo se repite verticalmente                       |
| `space`     | Se repite sin recortarse, con espacio entre copias |
| `round`     | Se repite y escala para encajar sin espacios       |

```css
div {
  background-image: url("patron.png");
  background-repeat: no-repeat;
}
```

---

### `background-size`

Controla el tamaño de la imagen de fondo.

```css
/* Tamaño exacto en píxeles */
background-size: 200px 150px;

/* Tamaño en porcentaje (relativo al contenedor) */
background-size: 100% 100%;

/* cover: cubre todo el contenedor, puede recortar la imagen */
background-size: cover;

/* contain: muestra la imagen completa sin recortarla, puede dejar espacios */
background-size: contain;

/* Solo el ancho, el alto se calcula automáticamente */
background-size: 300px auto;
```

**`cover`** es el más usado para fondos de secciones: garantiza que no queden zonas sin cubrir.  
**`contain`** es útil para logos o imágenes que no deben cortarse.

---

### `background-position`

Define desde dónde se posiciona la imagen dentro del elemento.

```css
/* Con palabras clave */
background-position: center;         /* centrada en X e Y */
background-position: top right;      /* esquina superior derecha */
background-position: bottom center;  /* abajo al centro */

/* Con píxeles (X Y) */
background-position: 20px 40px;

/* Con porcentajes */
background-position: 50% 50%;  /* igual que center */
background-position: 0% 100%;  /* igual que bottom left */
```

---

### `background-attachment`

Controla si el fondo se mueve al hacer scroll o queda fijo.

```css
/* Se mueve con el contenido (valor por defecto) */
background-attachment: scroll;

/* Queda fijo aunque se haga scroll — efecto "parallax" sencillo */
background-attachment: fixed;

/* Se mueve con el contenido del propio elemento, no de la página */
background-attachment: local;
```

---

### `background-origin`

Define el área desde la cual se empieza a posicionar la imagen.

```css
background-origin: padding-box;  /* desde el borde del padding (por defecto) */
background-origin: border-box;   /* desde el borde exterior del elemento */
background-origin: content-box;  /* desde el borde del contenido */
```

---

### `background-clip`

Define hasta dónde se extiende el fondo visible.

```css
background-clip: border-box;   /* llega hasta el borde exterior (por defecto) */
background-clip: padding-box;  /* se corta antes del borde */
background-clip: content-box;  /* solo se ve en el área de contenido */

/* Truco: recortar el fondo con la forma del texto */
background-clip: text;
-webkit-background-clip: text;
color: transparent;
/* El degradado se ve a través de las letras */
```

---

### Resumen de propiedades

| Propiedad               | Qué controla                            | Valor por defecto |
|-------------------------|-----------------------------------------|-------------------|
| `background-color`      | Color sólido de fondo                   | `transparent`     |
| `background-image`      | Imagen o degradado de fondo             | `none`            |
| `background-repeat`     | Si la imagen se repite                  | `repeat`          |
| `background-size`       | Tamaño de la imagen                     | `auto`            |
| `background-position`   | Posición de la imagen                   | `0% 0%`           |
| `background-attachment` | Si el fondo se mueve con el scroll      | `scroll`          |
| `background-origin`     | Área de referencia para la posición     | `padding-box`     |
| `background-clip`       | Hasta dónde se recorta el fondo visible | `border-box`      |

---

## 6. Propiedad atajo: `background`

Se pueden declarar todas las propiedades en una sola línea. El orden recomendado es:

```
background: color image repeat attachment position / size
```

```css
div {
  background: #0d3b6e url("foto.jpg") no-repeat center / cover;
}

/* Con degradado */
header {
  background: linear-gradient(135deg, #0d3b6e 0%, #5bb8e8 100%) no-repeat center / cover;
}

/* Solo color */
section {
  background: #e8f4fc;
}
```

**Nota:** al usar el shorthand, las propiedades no declaradas se resetean a su valor por defecto. Es más seguro usar propiedades separadas si solo se quiere cambiar una.

---

## 7. Centrar con `margin`

### Centrado horizontal de un bloque

Para centrar un elemento de bloque (`display: block`) horizontalmente, se le da un ancho y se usa `margin: 0 auto`.

```css
div {
  width: 600px;       /* debe tener ancho definido */
  margin: 0 auto;     /* top/bottom: 0, left/right: automático */
}
```

`auto` hace que el navegador calcule el mismo espacio a izquierda y derecha, centrando el elemento.

También se puede escribir de forma explícita:

```css
div {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
```

---

### Centrado vertical con `margin` (truco de posición absoluta)

`margin: auto` puede centrar también verticalmente si el elemento tiene `position: absolute` y las cuatro posiciones en 0:

```css
.padre {
  position: relative;
  height: 300px;
}

.hijo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 200px;
  height: 100px;
  margin: auto;  /* centra en ambos ejes */
}
```

---

### Centrado vertical con `margin-top`

Una forma sencilla de separar un elemento del tope es usar `margin-top` en porcentaje o con un valor calculado:

```css
section {
  margin-top: 10%;
}
```

---

### Separar elementos entre sí

`margin` también se usa para dar espacio entre elementos:

```css
article {
  margin: 0 10px 20px 0; /* top right bottom left */
}

/* Todos los lados iguales */
p {
  margin: 16px;
}

/* Solo arriba y abajo */
h2 {
  margin: 24px 0;
}
```
