// Predicción: "manzana, pera, uva"

const frutas = ["manzana", "kiwi", "pera", "uva"];

const filtradas = frutas.filter(f => f.includes("a"));
const resultado = filtradas.join(", ");

console.log(resultado);

// Análisis: No se puede hacer primero join() porque
// convierte el array en un string y filter() trabaja con arrays.