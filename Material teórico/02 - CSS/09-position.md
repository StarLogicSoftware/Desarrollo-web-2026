# Apuntes CSS — Position

---

## 1. ¿Qué es `position`?

La propiedad `position` controla **cómo se ubica un elemento dentro del documento** y si participa o no del flujo normal de la página.

Se usa junto con las propiedades de desplazamiento: `top`, `right`, `bottom` y `left`.

```css
elemento {
  position: valor;
  top: 20px;
  left: 40px;
}
```

---

## 2. `position: static` (valor por defecto)

Todos los elementos tienen `position: static` por defecto.  
El elemento **sigue el flujo normal** del documento y las propiedades `top`, `right`, `bottom`, `left` y `z-index` **no tienen efecto**.

```css
div {
  position: static; /* comportamiento normal, no necesita declararse */
}
```

---

## 3. `position: relative`

El elemento **sigue en el flujo normal**, pero puede desplazarse **respecto a su posición original** usando `top`, `right`, `bottom` o `left`.

El espacio que ocupaba originalmente **se conserva** (no lo toman otros elementos).

```css
div {
  position: relative;
  top: 20px;   /* baja 20px desde donde estaría normalmente */
  left: 10px;  /* se mueve 10px a la derecha de su posición original */
}
```

```
[ elemento en posición normal ]
        ↓ baja 20px, mueve 10px a la derecha
   [ elemento desplazado ]
```

> `relative` también se usa como **contenedor de referencia** para elementos con `position: absolute`.

---

## 4. `position: absolute`

El elemento **se saca del flujo normal** (los demás elementos actúan como si no existiera) y se posiciona respecto al **ancestro posicionado más cercano** (es decir, el primer padre con `position` distinto de `static`).

Si no existe ningún ancestro posicionado, se ubica respecto al `<body>`.

```css
/* Contenedor de referencia */
.padre {
  position: relative;
}

/* Elemento posicionado dentro del padre */
.hijo {
  position: absolute;
  top: 0;
  right: 0;   /* esquina superior derecha del padre */
}
```

**Usos comunes:** tooltips, badges, menús desplegables, íconos superpuestos sobre una imagen.

```
┌─────────────────────────────┐
│ .padre (relative)           │
│                    [.hijo]  │ ← esquina superior derecha
└─────────────────────────────┘
```

---

## 5. `position: fixed`

El elemento **se saca del flujo normal** y se posiciona respecto a la **ventana del navegador** (viewport). No se mueve al hacer scroll.

```css
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;   /* barra de navegación fija en la parte superior */
}

.boton-volver-arriba {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

**Usos comunes:** barras de navegación fijas, botones flotantes, banners de cookies.

---

## 6. `position: sticky`

Híbrido entre `relative` y `fixed`: el elemento **fluye normalmente** hasta que el usuario hace scroll y alcanza el umbral definido, momento en que se **queda fijo** en esa posición.

```css
th {
  position: sticky;
  top: 0;   /* se pega al tope del scroll cuando llega ahí */
}

.seccion-titulo {
  position: sticky;
  top: 60px;  /* se queda fijo 60px desde arriba */
}
```

**Usos comunes:** encabezados de tabla, títulos de sección que acompañan el scroll.

> Para que `sticky` funcione, el elemento debe tener al menos una de las propiedades `top`, `right`, `bottom` o `left` definida, y no puede tener `overflow: hidden` en su contenedor padre.

---

## 7. Propiedades de desplazamiento

Una vez que el elemento tiene `position` distinto de `static`, se pueden usar:

| Propiedad | Descripción                                      |
|-----------|--------------------------------------------------|
| `top`     | Desplazamiento desde el borde superior           |
| `right`   | Desplazamiento desde el borde derecho            |
| `bottom`  | Desplazamiento desde el borde inferior           |
| `left`    | Desplazamiento desde el borde izquierdo          |

Admiten valores en `px`, `%`, `em`, `rem`, `vh`, `vw`, etc.

```css
.caja {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* truco clásico para centrar */
}
```

---

## 8. `z-index` — control de apilamiento

Cuando varios elementos posicionados se superponen, `z-index` determina cuál queda **encima**.

- Solo funciona en elementos con `position` distinto de `static`.
- El valor por defecto es `auto` (equivale a `0`, pero no crea un nuevo contexto de apilamiento).
- Valores más altos quedan por delante. Acepta números negativos.

```css
.modal {
  position: fixed;
  z-index: 1000;  /* por encima de casi todo */
}

.overlay {
  position: fixed;
  z-index: 999;   /* debajo del modal pero sobre el contenido */
}

.contenido {
  position: relative;
  z-index: 1;
}
```

```
z-index: 1000  →  .modal      (frente)
z-index: 999   →  .overlay
z-index: 1     →  .contenido  (fondo)
```

---

## 9. Resumen comparativo

| Valor      | ¿Saca del flujo? | Se posiciona respecto a…         | ¿Se mueve con scroll? |
|------------|-----------------|----------------------------------|-----------------------|
| `static`   | No              | —                                | Sí                    |
| `relative` | No              | Su posición original             | Sí                    |
| `absolute` | Sí              | Ancestro posicionado más cercano | Sí                    |
| `fixed`    | Sí              | Viewport (ventana)               | No                    |
| `sticky`   | No (hasta umbral)| Su posición original / viewport | Parcialmente          |
