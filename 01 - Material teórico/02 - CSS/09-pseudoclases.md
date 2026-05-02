# Apuntes CSS — Pseudo-clases

---

## 1. ¿Qué es una pseudo-clase?

Una pseudo-clase es una palabra clave que se agrega a un selector para indicar un **estado especial** del elemento. Se escribe con dos puntos `:` antes del nombre.

```css
selector:pseudo-clase {
  propiedad: valor;
}
```

```css
a:hover   { color: red; }       /* cuando el mouse está encima */
input:focus { outline: 2px solid blue; } /* cuando el campo tiene el foco */
```

---

## 2. Pseudo-clases de interacción del usuario

Son las más usadas. Responden a acciones del usuario sobre el elemento.

---

### `:hover`

Se activa cuando el **cursor del mouse está sobre el elemento**. Aplica a casi cualquier elemento.

```css
a:hover       { color: #e63946; text-decoration: underline; }
button:hover  { background-color: #1a5276; }
.tarjeta:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
img:hover     { opacity: 0.85; }
```

---

### `:focus`

Se activa cuando el elemento **recibe el foco**: por click, por teclado (Tab) o programáticamente.

```css
input:focus  { border-color: #0d3b6e; outline: 2px solid rgba(13,59,110,0.4); }
button:focus { outline: 3px solid #5bb8e8; outline-offset: 2px; }
a:focus      { outline: 2px dashed #0d3b6e; }
```

> Nunca eliminar el estilo de `:focus` sin reemplazarlo por otro indicador visual. Es fundamental para la accesibilidad con teclado.

---

### `:active`

Se activa **mientras el usuario presiona** el elemento (entre el click down y el click up).

```css
button:active { transform: scale(0.97); }
a:active      { color: #c0392b; }
.boton:active { box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); }
```

---

### `:focus-visible`

Similar a `:focus`, pero **solo se activa cuando el foco proviene del teclado** (no del mouse). Permite estilos de foco visibles solo cuando son necesarios.

```css
/* El indicador de foco solo aparece con navegación por teclado */
button:focus-visible {
  outline: 3px solid #0d3b6e;
  outline-offset: 2px;
}

/* Quitar el outline del click, pero mantenerlo para teclado */
button:focus:not(:focus-visible) {
  outline: none;
}
```

---

### `:focus-within`

Se activa en un elemento cuando **cualquiera de sus descendientes tiene el foco**.

```css
/* El formulario se resalta cuando algún campo está activo */
form:focus-within {
  box-shadow: 0 0 0 3px rgba(13,59,110,0.2);
}

/* El label se destaca cuando su input asociado está enfocado */
.campo:focus-within label {
  color: #0d3b6e;
  font-weight: bold;
}
```

---

## 3. Pseudo-clases de enlaces

Son específicas de los elementos `<a>` con `href`.

```css
a:link    { color: #0d3b6e; }         /* enlace no visitado */
a:visited { color: #6c3483; }         /* enlace ya visitado */
a:hover   { color: #e63946; }         /* mouse encima */
a:active  { color: #c0392b; }         /* mientras se hace click */
```

> **Orden recomendado** para no tener conflictos de especificidad: `:link` → `:visited` → `:hover` → `:active`. Mnemotécnica: **L**o**V**e **HA**te.

---

## 4. Pseudo-clases de formularios

Reflejan el **estado** de los campos de formulario.

---

### `:checked`

Aplica a `<input type="checkbox">` y `<input type="radio">` cuando están **marcados**, y a `<option>` cuando está **seleccionado**.

```css
input[type="checkbox"]:checked { accent-color: #0d3b6e; }

/* Estilizar el label del checkbox marcado */
input[type="checkbox"]:checked + label {
  font-weight: bold;
  color: #0d3b6e;
}
```

---

### `:disabled` y `:enabled`

```css
input:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: not-allowed;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input:enabled { background-color: white; }
```

---

### `:required` y `:optional`

```css
input:required {
  border-left: 3px solid #e63946;
}

input:optional {
  border-left: 3px solid #ccc;
}
```

---

### `:valid` e `:invalid`

Se activan según si el valor del campo **cumple o no** las restricciones de validación (`required`, `pattern`, `min`, `max`, `type`, etc.).

```css
input:valid {
  border-color: #2a9d8f;
}

input:invalid {
  border-color: #e63946;
}

/* Evitar el :invalid antes de que el usuario haya tocado el campo */
input:not(:placeholder-shown):invalid {
  border-color: #e63946;
}
```

---

### `:placeholder-shown`

Se activa cuando el **placeholder del campo es visible** (es decir, el campo está vacío).

```css
/* El campo tiene un estilo diferente mientras no tiene contenido */
input:placeholder-shown {
  font-style: italic;
  background-color: #fafafa;
}
```

---

### `:read-only` y `:read-write`

```css
input:read-only  { background-color: #f5f5f5; color: #666; }
input:read-write { background-color: white; }
```

---

## 5. Pseudo-clases de posición estructural

Seleccionan elementos según su **posición** en el árbol HTML.

---

### `:first-child` y `:last-child`

Seleccionan el elemento que es el **primer o último hijo** de su padre.

```css
li:first-child { font-weight: bold; }
li:last-child  { border-bottom: none; }

p:first-child  { margin-top: 0; }
p:last-child   { margin-bottom: 0; }
```

---

### `:nth-child()`

Selecciona hijos según una **fórmula**. Acepta número, palabras clave o expresión `An+B`.

```css
/* Por posición exacta */
li:nth-child(1)  { color: red; }    /* el primero */
li:nth-child(3)  { color: blue; }   /* el tercero */

/* Palabras clave */
li:nth-child(odd)  { background: #f5f5f5; }   /* 1, 3, 5... (impares) */
li:nth-child(even) { background: white; }      /* 2, 4, 6... (pares) */

/* Fórmula An+B */
li:nth-child(3n)     { color: red; }    /* cada 3: 3, 6, 9... */
li:nth-child(3n+1)   { color: blue; }   /* 1, 4, 7, 10... */
li:nth-child(-n+3)   { font-weight: bold; } /* los primeros 3 */
```

---

### `:nth-last-child()`

Igual que `:nth-child()` pero **contando desde el final**.

```css
li:nth-last-child(1)  { /* el último */ }
li:nth-last-child(2)  { /* el penúltimo */ }
li:nth-last-child(-n+2) { color: gray; }  /* los últimos 2 */
```

---

### `:only-child`

Selecciona el elemento que es el **único hijo** de su padre.

```css
p:only-child { text-align: center; }
li:only-child { list-style: none; }
```

---

## 6. Pseudo-clases de tipo

Similares a las de posición, pero cuentan solo entre elementos del **mismo tipo de etiqueta**.

---

### `:first-of-type` y `:last-of-type`

```css
p:first-of-type { font-size: 1.2rem; font-weight: bold; }
p:last-of-type  { margin-bottom: 0; }
img:first-of-type { margin-top: 0; }
```

---

### `:nth-of-type()`

```css
p:nth-of-type(odd)  { background: #f9f9f9; }
p:nth-of-type(2)    { color: #555; }
img:nth-of-type(3n) { border: 2px solid #0d3b6e; }
```

---

### `:only-of-type`

El único elemento de ese tipo dentro de su padre.

```css
img:only-of-type { display: block; margin: 0 auto; }
```

---

## 7. `:not()` — negación

Selecciona elementos que **no cumplen** el selector dentro de los paréntesis.

```css
/* Todos los <li> menos el último */
li:not(:last-child) { border-bottom: 1px solid #eee; }

/* Todos los inputs menos los de envío */
input:not([type="submit"]):not([type="reset"]) {
  border: 1px solid #ccc;
  padding: 0.5rem;
}

/* Párrafos que no tienen la clase .especial */
p:not(.especial) { color: #333; }

/* Links que no están en el nav */
a:not(nav a) { text-decoration: underline; }
```

---

## 8. `:is()` y `:where()` — agrupación de selectores

Permiten agrupar múltiples selectores dentro de la pseudo-clase, simplificando el CSS.

```css
/* Sin :is() */
h1 a, h2 a, h3 a { color: inherit; }

/* Con :is() */
:is(h1, h2, h3) a { color: inherit; }

/* Con múltiples contextos */
:is(header, main, footer) p {
  line-height: 1.6;
}
```

**Diferencia entre `:is()` y `:where()`:** ambos funcionan igual pero `:where()` tiene **especificidad cero**, lo que lo hace ideal para resets y estilos base fácilmente sobreescribibles.

```css
/* Especificidad normal (hereda del selector más específico del grupo) */
:is(#cabecera, .seccion) p { margin: 0; }

/* Especificidad cero — fácil de sobreescribir */
:where(#cabecera, .seccion) p { margin: 0; }
```

---

## 9. `:target`

Se activa en el elemento cuyo `id` coincide con el **fragmento de URL** (lo que hay después de `#`).

```css
/* Resaltar la sección a la que se saltó */
section:target {
  background-color: #fffbe6;
  outline: 2px solid #f4a261;
}

/* Animación al llegar */
:target {
  scroll-margin-top: 80px; /* deja espacio para un header fijo */
}
```

---

## 10. `:empty`

Selecciona elementos que **no tienen hijos ni texto**.

```css
/* Ocultar celdas vacías de una tabla */
td:empty { background-color: #f5f5f5; }

/* Ocultar un contenedor si no tiene contenido */
.mensaje:empty { display: none; }
```

---

## 11. Resumen de pseudo-clases

| Pseudo-clase           | Se activa cuando...                                           |
|------------------------|---------------------------------------------------------------|
| `:hover`               | El cursor está encima del elemento                            |
| `:focus`               | El elemento tiene el foco                                     |
| `:focus-visible`       | El foco proviene del teclado                                  |
| `:focus-within`        | Un descendiente tiene el foco                                 |
| `:active`              | El elemento está siendo presionado                            |
| `:link`                | El enlace no fue visitado                                     |
| `:visited`             | El enlace ya fue visitado                                     |
| `:checked`             | El checkbox o radio está marcado                              |
| `:disabled`            | El campo está deshabilitado                                   |
| `:enabled`             | El campo está habilitado                                      |
| `:required`            | El campo tiene el atributo `required`                         |
| `:optional`            | El campo no tiene `required`                                  |
| `:valid`               | El valor del campo es válido                                  |
| `:invalid`             | El valor del campo no es válido                               |
| `:placeholder-shown`   | El placeholder es visible (campo vacío)                       |
| `:read-only`           | El campo tiene `readonly`                                     |
| `:first-child`         | Es el primer hijo de su padre                                 |
| `:last-child`          | Es el último hijo de su padre                                 |
| `:nth-child(n)`        | Ocupa la posición n entre los hijos de su padre               |
| `:nth-last-child(n)`   | Ocupa la posición n contando desde el final                   |
| `:only-child`          | Es el único hijo de su padre                                  |
| `:first-of-type`       | Es el primer elemento de su tipo entre sus hermanos           |
| `:last-of-type`        | Es el último elemento de su tipo entre sus hermanos           |
| `:nth-of-type(n)`      | Ocupa la posición n entre los de su mismo tipo                |
| `:only-of-type`        | Es el único elemento de su tipo entre sus hermanos            |
| `:not(selector)`       | No cumple el selector indicado                                |
| `:is(selector)`        | Agrupa selectores (con especificidad normal)                  |
| `:where(selector)`     | Agrupa selectores (con especificidad cero)                    |
| `:target`              | Su `id` coincide con el fragmento `#` de la URL              |
| `:empty`               | No tiene hijos ni texto                                       |

---
