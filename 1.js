// Predicción: [15, 24]

const numeros = [2, 5, 3, 8, 1];

const multiplicados = numeros.map(n => n * 3);
const resultado = multiplicados.filter(n => n > 10);

console.log(resultado); // [15, 24]

// Análisis: No cambió numeros porque map() y filter()
// crean nuevos arrays.
console.log(numeros);