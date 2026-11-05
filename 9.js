// Predicción: índice 1 y, si ninguno cumple, -1.

const productos = [
    { nombre: "Lápiz", precio: 50 },
    { nombre: "Cuaderno", precio: 120 },
    { nombre: "Libro", precio: 200 }
];

const indice = productos.findIndex(p => p.precio > 100);
const ninguno = productos.findIndex(p => p.precio > 300);

console.log(indice);  // 1
console.log(ninguno); // -1

// Análisis: find() devolvería el objeto del primer producto
// que cumpla la condición, no su índice.