// Predicción: invertido ["estrella", "mar", "luna", "sol"]
// find: "estrella"

const palabras = ["sol", "luna", "mar", "estrella"];

palabras.reverse();
const encontrada = palabras.find(p => p.length > 3);

console.log(palabras);
console.log(encontrada);

// Análisis: Sin reverse() encontraría "luna".
// reverse() modificó el array original.