// Predicción: nombres en mayúsculas y "VALENTINA".

const nombres = ["ana", "luis", "valentina", "sara", "sebastian"];

const mayusculas = nombres.map(n => n.toUpperCase());
const encontrada = mayusculas.find(n => n.length > 6);

console.log(mayusculas);
console.log(encontrada);

// Análisis: map() transforma los nombres y find()
// encuentra el primero que tiene más de 6 caracteres.