// Predicción: a true, pares [4, 10, 8]
// b false, pares [4, -2, 10]

const a = [4, 7, 10, 3, 8];
const b = [4, -2, 10];

const positivosA = a.every(n => n > 0);
const positivosB = b.every(n => n > 0);

const paresA = a.filter(n => n % 2 === 0);
const paresB = b.filter(n => n % 2 === 0);

console.log(positivosA, paresA);
console.log(positivosB, paresB);

// Análisis: every() verifica si todos son positivos
// y filter() selecciona los números pares.