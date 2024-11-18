const fs = require("fs");

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
  const data = fs.readFileSync("citas.json", "utf8");
  const citas = JSON.parse(data);

  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  citas.push(nuevaCita);

  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2), "utf8");
  console.log("Cita registrada:", nuevaCita);
}

// Función para leer todas las citas
function leer() {
  try {
    const data = fs.readFileSync("citas.json", "utf8");
    const citas = JSON.parse(data);
    return citas; // Devolver las citas en lugar de mostrarlas
  } catch (error) {
    console.error("Error al leer el archivo citas.json:", error.message);
    return [];
  }
}

// Función separada para mostrar las citas en formato tabla
function mostrarTabla(citas) {
  console.table(citas); // Mostrar los datos como tabla
}

module.exports = { registrar, leer, mostrarTabla };
