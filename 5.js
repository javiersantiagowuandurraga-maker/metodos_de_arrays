// Predicción: shift 10, unshift 4, push 5

const numeros = [10, 20, 30, 40];

const eliminado = numeros.shift();
const inicio = numeros.unshift(5);
const final = numeros.push(50);

console.log(eliminado);
console.log(inicio);
console.log(final);
console.log(numeros);

// Análisis: unshift() y push() devuelven la nueva longitud,
// no devuelven el array.