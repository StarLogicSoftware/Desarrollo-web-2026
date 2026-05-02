# Apuntes CSS — Introducción y Sintaxis Básica

---

## 1. ¿Qué es CSS?

CSS (Cascading Style Sheets — Hojas de Estilo en Cascada) es el lenguaje que controla la **presentación visual** de un documento HTML.

Mientras HTML define la **estructura y el contenido** (qué es cada cosa), CSS define el **aspecto** (cómo se ve): colores, tipografías, tamaños, espaciados, layouts, animaciones, etc.

```
HTML → estructura y contenido
CSS  → diseño y presentación
JS   → comportamiento e interactividad
```

Sin CSS, una página web es texto plano con el estilo por defecto del navegador: fuente serif, links azules subrayados, sin colores, sin layout.

---

## 2. ¿Para qué se usa CSS?

- Definir colores, tipografías y tamaños de texto
- Controlar el espaciado entre elementos (márgenes, rellenos)
- Crear layouts de columnas, grillas, centrado
- Adaptar el diseño a distintos tamaños de pantalla (responsive design)
- Agregar efectos visuales: sombras, bordes, gradientes, opacidad
- Crear animaciones y transiciones
- Controlar qué se muestra y qué se oculta

---

## 3. Métodos para aplicar CSS

Hay tres formas de aplicar estilos a un documento HTML. Se pueden combinar, aunque **la mejor práctica es usar un archivo externo**.

---

### CSS en línea (`style` attribute)

Se escribe directamente en el atributo `style` de una etiqueta HTML.

```html
<p style="color: red; font-size: 18px;">Este párrafo es rojo y más grande.</p>
<h1 style="background-color: #0d3b6e; color: white; padding: 10px;">Título</h1>
```

**Ventajas:** inmediato, no requiere archivos adicionales.  
**Desventajas:**
- Mezcla contenido con presentación (difícil de mantener).
- No se puede reutilizar: hay que repetirlo en cada elemento.
- Tiene la **mayor especificidad** posible, lo que puede generar conflictos difíciles de resolver.
- No se puede usar pseudo-clases (`:hover`, `:focus`) ni media queries.

**Cuándo usarlo:** solo en casos muy específicos, como estilos generados dinámicamente por JavaScript, o emails HTML.

---

### CSS interno (etiqueta `<style>`)

Se escribe dentro de la etiqueta `<style>` en el `<head>` del documento.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi página</title>
    <style>
      body {
        font-family: sans-serif;
        background-color: #f5f5f5;
      }

      h1 {
        color: #0d3b6e;
      }

      p {
        font-size: 1rem;
        line-height: 1.6;
      }
    </style>
  </head>
  <body>
    <h1>Título</h1>
    <p>Contenido.</p>
  </body>
</html>
```

**Ventajas:** permite usar selectores, pseudo-clases y media queries. Todo el CSS está en un lugar.  
**Desventajas:**
- Los estilos solo aplican a esa página.
- Si hay varias páginas, hay que repetir o copiar el CSS.
- Aumenta el tamaño del HTML.

**Cuándo usarlo:** páginas únicas, prototipos rápidos, o cuando no es posible un archivo externo.

---

### CSS externo (archivo `.css` separado)

Es el método **recomendado**. Los estilos se escriben en un archivo `.css` aparte y se vinculan desde el HTML con `<link>`.

**archivo: `estilos.css`**
```css
body {
  font-family: sans-serif;
  background-color: #f5f5f5;
}

h1 {
  color: #0d3b6e;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}
```

**archivo: `index.html`**
```html
<head>
  <link rel="stylesheet" href="estilos.css" />
</head>
```

**Ventajas:**
- Separación total entre HTML y CSS.
- Un mismo archivo CSS puede aplicarse a todas las páginas del sitio.
- El navegador cachea el archivo CSS, lo que mejora la velocidad de carga.
- Fácil de mantener y escalar.

**Cuándo usarlo:** siempre, en cualquier proyecto real.

---

### Comparación de los tres métodos

| Método        | Dónde se escribe          | Reutilizable | Pseudo-clases | Recomendado |
|---------------|---------------------------|--------------|----------------|-------------|
| En línea      | Atributo `style` del HTML | No           | No             | Solo casos especiales |
| Interno       | `<style>` en el `<head>`  | En esa página| Sí             | Prototipos  |
| Externo       | Archivo `.css` separado   | En todo el sitio | Sí         | Siempre     |

---

## 4. Sintaxis de CSS

Una regla CSS tiene esta estructura:

```
selector {
  propiedad: valor;
  propiedad: valor;
}
```

```css
p {
  color: #333333;
  font-size: 1rem;
  line-height: 1.6;
}
```

- **Selector** — indica a qué elemento(s) HTML se aplican los estilos.
- **Bloque de declaraciones** — va entre llaves `{ }`.
- **Declaración** — un par `propiedad: valor` terminado en `;`.
- **Propiedad** — qué característica visual se modifica (`color`, `font-size`, `margin`, etc.).
- **Valor** — qué valor toma esa característica (`red`, `1rem`, `10px`, etc.).

---

### Declaraciones múltiples

Una regla puede tener tantas declaraciones como sean necesarias:

```css
h1 {
  font-family: Georgia, serif;
  font-size: 2rem;
  font-weight: bold;
  color: #0d3b6e;
  text-align: center;
  margin-bottom: 1rem;
}
```

---

### Múltiples selectores para una misma regla

Se pueden agrupar selectores separándolos con coma. Todos recibirán las mismas declaraciones:

```css
h1,
h2,
h3 {
  font-family: Georgia, serif;
  color: #0d3b6e;
}
```

---

### Reglas anidadas en el mismo archivo

Un archivo CSS es simplemente una lista de reglas, una debajo de la otra:

```css
/* Estilos globales */
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

/* Encabezados */
h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }

/* Párrafos */
p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}
```

---

## 5. Propiedades y valores

La **propiedad** define qué aspecto se modifica. El **valor** define cómo queda.

```css
selector {
  propiedad: valor;
}
```

### Ejemplos de propiedades frecuentes

```css
/* Texto */
color: #333;                    /* color del texto */
font-size: 1rem;                /* tamaño de fuente */
font-family: Arial, sans-serif; /* tipografía */
font-weight: bold;              /* grosor (bold, normal, 100-900) */
font-style: italic;             /* estilo (italic, normal) */
text-align: center;             /* alineación (left, center, right, justify) */
text-decoration: underline;     /* decoración (underline, none, line-through) */
line-height: 1.6;               /* interlineado */
letter-spacing: 0.05em;         /* espaciado entre letras */

/* Colores y fondos */
color: red;                     /* color del texto */
background-color: #f5f5f5;      /* color de fondo */
background-image: url("img.png"); /* imagen de fondo */
opacity: 0.8;                   /* opacidad del elemento (0 a 1) */

/* Dimensiones */
width: 300px;                   /* ancho */
height: 200px;                  /* alto */
max-width: 1200px;              /* ancho máximo */
min-height: 100vh;              /* alto mínimo */

/* Espaciado */
margin: 1rem;                   /* margen externo */
padding: 1rem;                  /* relleno interno */

/* Bordes */
border: 1px solid #ccc;         /* borde (grosor estilo color) */
border-radius: 8px;             /* esquinas redondeadas */

/* Display y posición */
display: flex;
position: relative;
```

---

## 6. Comentarios en CSS

Los comentarios en CSS van entre `/*` y `*/`. El navegador los ignora por completo.

```css
/* Esto es un comentario de una línea */

/*
  Esto es un comentario
  de varias líneas.
  Útil para separar secciones del archivo.
*/

/* ==============================
   SECCIÓN: Navegación principal
   ============================== */
nav {
  background-color: #0d3b6e;
}

h1 {
  color: red; /* temporal, cambiar antes de producción */
}
```

**Usos comunes de los comentarios:**
- Documentar por qué se tomó una decisión de estilo
- Separar visualmente secciones del archivo
- Desactivar temporalmente una declaración o regla durante el desarrollo

---

## 7. La cascada

El nombre "Cascading" (en cascada) viene de cómo CSS resuelve los conflictos cuando múltiples reglas intentan aplicar estilos al mismo elemento.

La cascada considera tres factores en orden de prioridad:

### 1. Origen del estilo

| Origen                  | Prioridad |
|-------------------------|-----------|
| Estilos del navegador   | Más baja  |
| Estilos del autor (nosotros) | Media |
| Estilos del usuario     | Alta      |
| `!important`            | Más alta  |

### 2. Especificidad

Cuanto más específico es el selector, más prioridad tiene su regla (ver archivo de selectores).

### 3. Orden en el código

Si dos reglas tienen el mismo origen y la misma especificidad, **gana la que aparece más abajo** en el archivo.

```css
p { color: red; }
p { color: blue; } /* esta gana — está más abajo */
```

---

## 8. Herencia

Algunas propiedades CSS se **heredan** del elemento padre a los hijos. Las tipográficas generalmente sí; las de caja generalmente no.

```css
body {
  font-family: Arial, sans-serif; /* los hijos lo heredan */
  color: #333;                    /* los hijos lo heredan */
}

/* No es necesario repetirlo en cada elemento */
p    { /* hereda font-family y color de body */ }
span { /* hereda font-family y color de body */ }
```

Propiedades que **sí se heredan** (entre otras): `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`.

Propiedades que **no se heredan** (entre otras): `margin`, `padding`, `border`, `width`, `height`, `background`.

Se puede forzar la herencia con el valor `inherit`:

```css
button {
  font-family: inherit; /* toma la fuente del padre, que button normalmente ignora */
}
```

---
