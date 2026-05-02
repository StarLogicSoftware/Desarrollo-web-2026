# Apuntes HTML — Formularios

---

## 1. ¿Qué es un formulario?

Un formulario HTML permite al usuario **ingresar datos** que luego se envían a un servidor (o se procesan con JavaScript). Login, registros, buscadores, checkouts de e-commerce, filtros, comentarios: todos usan formularios.

```html
<form action="/enviar" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />
  <button type="submit">Enviar</button>
</form>
```

---

## 2. `<form>` — el contenedor

Todo formulario empieza con `<form>`. Define **a dónde** y **cómo** se envían los datos.

```html
<form action="/procesar" method="POST" enctype="multipart/form-data">
  ...
</form>
```

### Atributos de `<form>`

| Atributo      | Descripción                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `action`      | URL a la que se envían los datos. Si se omite, envía a la misma página      |
| `method`      | Método HTTP: `GET` (datos en la URL) o `POST` (datos en el cuerpo)          |
| `enctype`     | Codificación del envío. Necesario con `multipart/form-data` para subir archivos |
| `novalidate`  | Desactiva la validación nativa del navegador                                |
| `autocomplete`| `on` / `off` — activa o desactiva el autocompletado del formulario completo |
| `target`      | Igual que en `<a>`: `_self`, `_blank`, etc.                                 |

### `GET` vs `POST`

| Característica | `GET`                              | `POST`                             |
|----------------|------------------------------------|------------------------------------|
| Datos en       | URL (`?nombre=Ana&edad=28`)        | Cuerpo de la solicitud HTTP        |
| Visible        | Sí, en la barra de direcciones     | No                                 |
| Longitud       | Limitada (~2000 caracteres)        | Sin límite práctico                |
| Cacheable      | Sí                                 | No                                 |
| Uso típico     | Búsquedas, filtros                 | Login, registro, subida de archivos |

---

## 3. `<input />` — el campo más versátil

El comportamiento de `<input>` cambia completamente según su `type`.

---

### Tipos de texto

#### `type="text"`
Campo de texto de una sola línea. El más genérico.

```html
<input type="text" name="usuario" placeholder="Ingresá tu usuario" />
```

#### `type="email"`
Valida que el valor tenga formato de correo electrónico.

```html
<input type="email" name="correo" placeholder="ejemplo@correo.com" />
```

#### `type="password"`
Oculta los caracteres mientras se escribe.

```html
<input type="password" name="clave" />
```

#### `type="tel"`
Para números de teléfono. No valida el formato (varía por país), pero activa el teclado numérico en móviles.

```html
<input type="tel" name="telefono" placeholder="+54 11 1234-5678" />
```

#### `type="url"`
Valida que el valor sea una URL válida.

```html
<input type="url" name="sitio" placeholder="https://ejemplo.com" />
```

#### `type="search"`
Igual que `text` pero con estilo y comportamiento de búsqueda (botón para limpiar en algunos navegadores).

```html
<input type="search" name="q" placeholder="Buscar..." />
```

---

### Tipos numéricos

#### `type="number"`
Acepta solo números. Muestra flechas para incrementar/decrementar.

```html
<input type="number" name="cantidad" min="1" max="99" step="1" value="1" />
```

#### `type="range"`
Slider deslizante para elegir un valor dentro de un rango.

```html
<input type="range" name="volumen" min="0" max="100" step="5" value="50" />
```

---

### Tipos de fecha y hora

#### `type="date"`
Selector de fecha (año-mes-día).

```html
<input type="date" name="nacimiento" min="1900-01-01" max="2026-12-31" />
```

#### `type="time"`
Selector de hora.

```html
<input type="time" name="hora_inicio" />
```

#### `type="datetime-local"`
Selector de fecha y hora local combinados.

```html
<input type="datetime-local" name="evento" />
```

#### `type="month"` y `type="week"`
Selectores de mes o semana del año.

```html
<input type="month" name="periodo" />
<input type="week"  name="semana" />
```

---

### Selección y opciones

#### `type="checkbox"`
Casilla de verificación. Puede seleccionarse de forma independiente.

```html
<label>
  <input type="checkbox" name="terminos" value="acepto" />
  Acepto los términos y condiciones
</label>
```

Para múltiples checkboxes del mismo grupo, todos comparten el mismo `name`:

```html
<p>Lenguajes que conocés:</p>
<label><input type="checkbox" name="lenguajes" value="html" /> HTML</label>
<label><input type="checkbox" name="lenguajes" value="css"  /> CSS</label>
<label><input type="checkbox" name="lenguajes" value="js"   /> JavaScript</label>
```

#### `type="radio"`
Botón de opción. Dentro de un grupo (mismo `name`), solo uno puede estar seleccionado.

```html
<p>Género:</p>
<label><input type="radio" name="genero" value="f" /> Femenino</label>
<label><input type="radio" name="genero" value="m" /> Masculino</label>
<label><input type="radio" name="genero" value="o" /> Otro</label>
```

---

### Archivos y colores

#### `type="file"`
Permite seleccionar uno o varios archivos para subir.

```html
<!-- Un archivo -->
<input type="file" name="documento" />

<!-- Múltiples archivos -->
<input type="file" name="fotos" multiple />

<!-- Solo ciertos tipos -->
<input type="file" name="imagen" accept="image/png, image/jpeg" />
<input type="file" name="pdf"    accept=".pdf" />
```

> Recordar: el `<form>` debe tener `enctype="multipart/form-data"` para enviar archivos.

#### `type="color"`
Selector de color visual (devuelve un valor hexadecimal).

```html
<input type="color" name="color_favorito" value="#0d3b6e" />
```

---

### Campos ocultos y de envío

#### `type="hidden"`
Campo no visible para el usuario, pero se envía con el formulario. Útil para pasar datos del servidor.

```html
<input type="hidden" name="token_csrf" value="abc123xyz" />
<input type="hidden" name="producto_id" value="42" />
```

#### `type="submit"`
Botón que envía el formulario.

```html
<input type="submit" value="Enviar formulario" />
```

#### `type="reset"`
Botón que restablece todos los campos a sus valores iniciales.

```html
<input type="reset" value="Limpiar" />
```

#### `type="button"`
Botón sin comportamiento predefinido. Se usa con JavaScript.

```html
<input type="button" value="Hacer algo" onclick="miFuncion()" />
```

#### `type="image"`
Botón de envío con una imagen en lugar de texto.

```html
<input type="image" src="boton-enviar.png" alt="Enviar" />
```

---

## 4. Atributos comunes de `<input>`

| Atributo       | Descripción                                                              |
|----------------|--------------------------------------------------------------------------|
| `name`         | Nombre del campo. Es la clave con la que se envía el dato (obligatorio para que se incluya en el envío) |
| `id`           | Identificador único. Se usa para asociarlo con un `<label>`              |
| `value`        | Valor inicial o por defecto del campo                                    |
| `placeholder`  | Texto gris de ayuda que desaparece al escribir                           |
| `required`     | El campo es obligatorio. El formulario no se envía si está vacío         |
| `disabled`     | Deshabilita el campo. No se envía con el formulario                      |
| `readonly`     | Solo lectura. El usuario no puede editar, pero el valor sí se envía      |
| `autofocus`    | El campo recibe el foco automáticamente al cargar la página              |
| `autocomplete` | `on` / `off` — controla el autocompletado de este campo en particular    |
| `min` / `max`  | Valores mínimo y máximo (para `number`, `range`, `date`, etc.)           |
| `step`         | Incremento permitido en campos numéricos o de fecha                      |
| `minlength` / `maxlength` | Longitud mínima y máxima del texto permitido                |
| `pattern`      | Expresión regular que debe cumplir el valor para ser válido              |
| `multiple`     | Permite seleccionar varios valores (en `file` y `email`)                 |
| `list`         | Asocia el input con un `<datalist>` para mostrar sugerencias             |

---

## 5. `<label>` — etiqueta de campo

Asocia un texto descriptivo a un campo. Esencial para la accesibilidad.

```html
<!-- Asociación explícita (recomendada) -->
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email" />

<!-- Asociación implícita (el input está dentro del label) -->
<label>
  Correo electrónico:
  <input type="email" name="email" />
</label>
```

**Ventajas de usar `<label>`:**
- Al hacer clic en el texto del label, el campo asociado recibe el foco.
- Los lectores de pantalla anuncian el texto del label antes de leer el campo.
- Aumenta el área clickeable (especialmente útil en checkboxes y radios).

---

## 6. `<textarea>` — texto de múltiples líneas

Para comentarios, mensajes, descripciones largas.

```html
<label for="mensaje">Mensaje:</label>
<textarea id="mensaje" name="mensaje" rows="6" cols="50" placeholder="Escribí tu mensaje aquí..."></textarea>
```

### Atributos de `<textarea>`

| Atributo      | Descripción                                                  |
|---------------|--------------------------------------------------------------|
| `rows`        | Número de filas visibles                                     |
| `cols`        | Número de columnas visibles                                  |
| `placeholder` | Texto de ayuda                                               |
| `maxlength`   | Cantidad máxima de caracteres                                |
| `minlength`   | Cantidad mínima de caracteres                                |
| `required`    | Campo obligatorio                                            |
| `disabled`    | Campo deshabilitado                                          |
| `readonly`    | Solo lectura                                                 |
| `resize`      | Se controla con CSS: `resize: none / vertical / horizontal / both` |

**Importante:** `<textarea>` no usa el atributo `value`. El contenido inicial se escribe entre las etiquetas.

```html
<textarea name="bio">Este texto aparece por defecto.</textarea>
```

---

## 7. `<select>` y `<option>` — lista desplegable

```html
<label for="pais">País:</label>
<select id="pais" name="pais">
  <option value="">-- Seleccioná un país --</option>
  <option value="ar">Argentina</option>
  <option value="mx">México</option>
  <option value="es" selected>España</option>
</select>
```

### Atributos de `<option>`

| Atributo   | Descripción                                          |
|------------|------------------------------------------------------|
| `value`    | Dato que se envía al servidor                        |
| `selected` | Opción seleccionada por defecto                      |
| `disabled` | Opción no seleccionable (usada para el placeholder)  |

### `multiple` — selección múltiple

```html
<select name="habilidades" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="git">Git</option>
</select>
```

Con `multiple`, el usuario puede seleccionar varias opciones manteniendo `Ctrl` (o `Cmd` en Mac).

### `<optgroup>` — grupos de opciones

```html
<select name="ciudad">
  <optgroup label="Argentina">
    <option value="bsas">Buenos Aires</option>
    <option value="cba">Córdoba</option>
  </optgroup>
  <optgroup label="España">
    <option value="mad">Madrid</option>
    <option value="bcn">Barcelona</option>
  </optgroup>
</select>
```

---

## 8. `<datalist>` — sugerencias de autocompletado

Combina la libertad de un `<input type="text">` con una lista de sugerencias.

```html
<label for="lenguaje">Lenguaje favorito:</label>
<input type="text" id="lenguaje" name="lenguaje" list="lenguajes" />

<datalist id="lenguajes">
  <option value="HTML" />
  <option value="CSS" />
  <option value="JavaScript" />
  <option value="Python" />
  <option value="TypeScript" />
</datalist>
```

El usuario puede elegir una sugerencia o escribir cualquier valor libremente.

---

## 9. `<button>` — botón

Más flexible que `<input type="submit">` porque puede contener HTML (iconos, imágenes, etc.).

```html
<button type="submit">Enviar formulario</button>
<button type="reset">Limpiar</button>
<button type="button">Acción con JS</button>
```

| Tipo       | Comportamiento                                |
|------------|-----------------------------------------------|
| `submit`   | Envía el formulario (comportamiento por defecto dentro de un `<form>`) |
| `reset`    | Restablece los campos al valor inicial        |
| `button`   | Sin comportamiento propio, se usa con JS      |

```html
<!-- Con ícono dentro -->
<button type="submit">
  <img src="icono-enviar.svg" alt="" aria-hidden="true" />
  Enviar
</button>
```

**Siempre especificar el `type`.** Sin él, dentro de un `<form>` el botón actúa como `submit` por defecto, lo que puede causar envíos accidentales.

---

## 10. `<fieldset>` y `<legend>` — agrupar campos

Agrupa campos relacionados y les da un título visible y accesible.

```html
<fieldset>
  <legend>Datos de contacto</legend>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="tel">Teléfono:</label>
  <input type="tel" id="tel" name="tel" />
</fieldset>

<fieldset>
  <legend>Preferencias</legend>

  <label><input type="checkbox" name="newsletter" /> Quiero recibir novedades</label>
  <label><input type="checkbox" name="ofertas" />    Quiero recibir ofertas</label>
</fieldset>
```

`<legend>` es el título del grupo y lo anuncian los lectores de pantalla antes de leer cada campo.

---

## 11. Validación nativa

HTML5 incluye validación del lado del cliente sin necesidad de JavaScript.

### Atributos de validación

```html
<!-- Campo obligatorio -->
<input type="text" name="nombre" required />

<!-- Longitud -->
<input type="text" name="usuario" minlength="3" maxlength="20" />

<!-- Rango numérico -->
<input type="number" name="edad" min="18" max="99" />

<!-- Patrón con expresión regular -->
<input type="text" name="codigo_postal" pattern="[0-9]{4,5}" title="Ingresá 4 o 5 dígitos" />

<!-- Email y URL (validación incorporada al type) -->
<input type="email" name="correo" required />
<input type="url"   name="sitio" />
```

### Pseudo-clases CSS para validación

Se pueden usar para dar feedback visual al usuario:

```css
input:valid   { border-color: green; }
input:invalid { border-color: red; }
input:required { background-color: #fffbe6; }
```

### Deshabilitar validación nativa

```html
<form action="/enviar" novalidate>
  ...
</form>
```

Se usa cuando se prefiere implementar validación personalizada con JavaScript.

---

## 12. Formulario completo de ejemplo

```html
<form action="/registro" method="POST">

  <fieldset>
    <legend>Datos personales</legend>

    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" required minlength="2" maxlength="80" placeholder="Ana García" />

    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required placeholder="ana@ejemplo.com" />

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required minlength="8"
           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
           title="Mínimo 8 caracteres, una mayúscula, una minúscula y un número" />

    <label for="nacimiento">Fecha de nacimiento:</label>
    <input type="date" id="nacimiento" name="nacimiento" max="2008-12-31" />
  </fieldset>

  <fieldset>
    <legend>Preferencias</legend>

    <label for="pais">País:</label>
    <select id="pais" name="pais" required>
      <option value="" disabled selected>-- Seleccioná --</option>
      <option value="ar">Argentina</option>
      <option value="mx">México</option>
      <option value="es">España</option>
    </select>

    <label for="bio">Sobre vos:</label>
    <textarea id="bio" name="bio" rows="4" maxlength="500" placeholder="Contanos algo sobre vos..."></textarea>

    <label><input type="checkbox" name="terminos" required /> Acepto los términos y condiciones</label>
    <label><input type="checkbox" name="newsletter" />         Quiero recibir novedades</label>
  </fieldset>

  <button type="submit">Crear cuenta</button>
  <button type="reset">Limpiar formulario</button>

</form>
```

---

## 13. Resumen de elementos de formulario

| Elemento         | Para qué sirve                                            |
|------------------|-----------------------------------------------------------|
| `<form>`         | Contenedor del formulario                                 |
| `<input>`        | Campo de entrada (el tipo varía con `type`)               |
| `<label>`        | Texto descriptivo asociado a un campo                     |
| `<textarea>`     | Área de texto de múltiples líneas                         |
| `<select>`       | Lista desplegable                                         |
| `<option>`       | Opción dentro de `<select>` o `<datalist>`                |
| `<optgroup>`     | Agrupa opciones dentro de `<select>`                      |
| `<datalist>`     | Lista de sugerencias para un `<input>`                    |
| `<button>`       | Botón (submit, reset o button)                            |
| `<fieldset>`     | Agrupa campos relacionados                                |
| `<legend>`       | Título de un `<fieldset>`                                 |

---
