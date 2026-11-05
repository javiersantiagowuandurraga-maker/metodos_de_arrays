// Predicción: promedio 120 y resultado [80, 60, 90].

const precios = [120, 80, 250, 60, 90];

const promedio = precios.length > 0
    ? precios.reduce((suma, p) => suma + p, 0) / precios.length
    : 0;

const resultado = promedio > 100
    ? precios.filter(p => p < promedio)
    : [];

console.log("Promedio:", promedio);
console.log(resultado);

// Análisis: Si el array está vacío se evita dividir entre cero
// verificando su longitud antes de calcular el promedio.