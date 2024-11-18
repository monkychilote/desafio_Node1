const { registrar, leer, mostrarTabla } = require("./operaciones");

// Obtener los argumentos de la línea de comandos
const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
  const citas = leer(); // Obtener las citas
  console.log("Citas registradas:");
  console.log(citas); // Mostrar como console.log
} else if (operacion === "datostabla") {
  const citas = leer(); // Obtener las citas
  console.log("Citas registradas en formato tabla:");
  mostrarTabla(citas); // Mostrar en formato tabla
} else {
  console.log('Operación no válida. Usa "registrar", "leer" o "datostabla".');
}
