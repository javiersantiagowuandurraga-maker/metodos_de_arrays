// Predicción: [3, 7, 2, 10, 5]
// Suma: 27

const a = [3, 7, 2];
const b = [10, 5];

const combinado = a.concat(b);
const suma = combinado.reduce((acumulador, n) => acumulador + n, 0);

console.log(combinado);
console.log(suma);

// Análisis: concat() no modificó los arrays originales.