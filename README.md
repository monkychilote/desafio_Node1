
# Veterinaria JS


Este proyecto es una implementación en Node.js para registrar y consultar citas veterinarias, utilizando argumentos de línea de comandos para interactuar con la aplicación.

## Veterinaria JS
**Archivos involucrados**

1.`index.js` - Archivo principal de la aplicación.

2.`operaciones.js` - Archivo que contiene las funciones que manejan el registro y consulta de las citas.

3.`citas.json` Archivo que almacena los datos de las citas.

&nbsp;
***
&nbsp;

**Requerimientos Resueltos**

1.   **Ejecutar scripts con Node.js desde la terminal**
La aplicación se ejecuta directamente desde la terminal con comandos como:

```
node index.js registrar Benito "2 años" perro blanco otitis
node index.js leer
node index.js datostabla

```

2.   **Crear archivos con el módulo File System**
En el archivo `operaciones.js`, si el archivo `citas.json` no existe, se crea automáticamente con un arreglo vacío utilizando el módulo `fs`.

3.   **Leer archivos con el módulo File System**
El archivo `operaciones.js` incluye una función `leer` que utiliza el módulo `fs` para leer el contenido de `citas.json`.

4.   **Importar y exportar módulos en Node.js**
Las funciones definidas en `operaciones.js` se exportan con `module.exports` y se importan en `index.js` utilizando `require`.

5.   **Utilizar argumentos escritos por línea de comandos**
Los argumentos pasados al ejecutar `node index.js` son capturados con `process.argv` y permiten ejecutar diferentes funciones como `registrar`, `leer` y `datostabla`.

6.   **Implementación adicional**
Se agregó una función `datostabla` para mostrar los datos en formato de tabla utilizando `console.table`, lo que facilita la visualización de los datos. Aunque no estaba solicitado, esto mejora la experiencia del usuario.

&nbsp;
***
&nbsp;

**Explicación de cada archivo**

**1. `index.js`**

Archivo principal que permite interactuar con la aplicación a través de comandos de línea de comandos.

* **Funciones principales:**
    * Recibe argumentos desde la terminal (`process.argv`).
    * Según el argumento (`registrar`, `leer`, `datostabla`), llama a la función correspondiente desde `operaciones.js`.
* Código:
```
const { registrar, leer, mostrarTabla } = require('./operaciones');

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar') {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
  const citas = leer();
  console.log('Citas registradas:');
  console.log(citas);
} else if (operacion === 'datostabla') {
  const citas = leer();
  console.log('Citas registradas en formato tabla:');
  mostrarTabla(citas);
} else {
  console.log('Operación no válida. Usa "registrar", "leer" o "datostabla".');
}

```

&nbsp;
***
&nbsp;

**2. `operaciones.js`**

Archivo que contiene la lógica principal para registrar y leer las citas.

* **Funciones principales:**

A.`registrar`

    Agrega una nueva cita al archivo `citas.json`.

* Lee los datos existentes
* Crea un nuevo objeto con los datos proporcionados.
* Agrega el nuevo objeto al arreglo de citas.
* Escribe el arreglo actualizado en `citas.json`.

```
function registrar(nombre, edad, animal, color, enfermedad) {
  const data = fs.readFileSync('citas.json', 'utf8');
  const citas = JSON.parse(data);

  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  citas.push(nuevaCita);

  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf8');
  console.log('Cita registrada:', nuevaCita);
}

```

B.`leer`

    Lee el contenido de `citas.json` y devuelve las citas registradas.

```
function leer() {
  try {
    const data = fs.readFileSync('citas.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al leer el archivo citas.json:", error.message);
    return [];
  }
}

```

C.`mostrarTabla`

    Muestra las citas en formato de tabla utilizando `console.table`. 
    Esta función permite visualizar los datos de una manera más clara y legible.

```
function mostrarTabla(citas) {
  console.table(citas);
}

```

* **Exportación de funciones:** Las funciones se exportan para ser utilizadas en index.js:

```
module.exports = { registrar, leer, mostrarTabla };

```

&nbsp;
***
&nbsp;

**3. `citas.json`**
Archivo que almacena las citas en formato JSON. Es iniciado como un arreglo vacío:

```
[]

```

Al registrar nuevas citas, se agregan como objetos al arreglo, por ejemplo:

```
[
  {
    "nombre": "Benito",
    "edad": "2 años",
    "animal": "perro",
    "color": "blanco",
    "enfermedad": "otitis"
  },
  {
    "nombre": "Julieta",
    "edad": "6 años",
    "animal": "perro",
    "color": "amarillo",
    "enfermedad": "moquillo"
  }
]

```

&nbsp;
***
&nbsp;

## Comandos disponibles

1. **Registrar una cita:**

```
node index.js registrar [nombre] [edad] [animal] [color] [enfermedad]

```
Ejemplo
```
node index.js registrar Benito "2 años" perro blanco otitis

```

2. **Leer las citas (JSON):**

```
node index.js leer

```

3. **Leer las citas (tabla):**

```
node index.js datostabla

```

&nbsp;
***
&nbsp;

## Consideraciones

* La opción `datostabla` fue añadida para mejorar la experiencia del usuario al mostrar los datos de forma visual y organizada en la consola.

* Aunque no estaba en los requerimientos originales, esta funcionalidad adicional hace que la aplicación sea más amigable y práctica.
