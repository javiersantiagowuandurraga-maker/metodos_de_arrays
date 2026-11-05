// Predicción: a true, b false.

const a = [4, 10, 7, 12];
const b = [4, 9];

const mitadA = a.map(n => n / 2);
const mitadB = b.map(n => n / 2);

console.log(mitadA, mitadA.includes(5));
console.log(mitadB, mitadB.includes(5));

// Análisis: Utilizaría some() para verificar una condición.