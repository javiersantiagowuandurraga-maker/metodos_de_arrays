// Predicción: some true
// Ordenado: Pedro, Luis, Ana, Sara
// find: Ana

const personas = [
    { nombre: "Sara", edad: 31 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 15 }
];

const menor = personas.some(p => p.edad < 18);
personas.sort((a, b) => a.edad - b.edad);
const mayor = personas.find(p => p.edad >= 18);

console.log(menor);
console.log(personas);
console.log(mayor);

// Análisis: Sin ordenar encontraría a Sara.
// El orden cambia porque find() devuelve el primero que cumple.