// Predicción: ["rojo", "azul", "verde"]
// Combinado: ["rojo", "azul", "verde", "naranja", "violeta"]

const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];

const primeros = colores.slice(0, 3);
const combinados = primeros.concat(secundarios);

console.log(primeros);
console.log(combinados);
console.log(colores);

// Análisis: colores no cambió porque slice() y concat()
// crean nuevos arrays.