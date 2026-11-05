// Predicción: [40, 32, 21, 15, 8]
// Sin la más joven: [40, 32, 21, 15]
// Con la nueva: [40, 32, 21, 15, 19]

const edades = [15, 32, 8, 21, 40];

edades.sort((a, b) => b - a);
console.log("Ordenado:", edades);

edades.pop();
console.log("Sin la más joven:", edades);

edades.push(19);
console.log("Con la nueva:", edades);

// Análisis: Utilicé pop() porque elimina el último elemento,
// que después de ordenar es la edad más joven.