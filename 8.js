// Predecimos que el mayor de a será 9 y todos sus números serán positivos.

const a = [4, 9, 2, 7];

const mayorA = a.reduce((acumulador, numero) => {
    return numero > acumulador ? numero : acumulador;
});

const positivosA = a.every(numero => numero > 0);

console.log("Mayor de a:", mayorA);
console.log("¿Todos son positivos?:", positivosA);


// Predecimos que el mayor de b será 4, pero no todos serán positivos.

const b = [4, -1, 2];

const mayorB = b.reduce((acumulador, numero) => {
    return numero > acumulador ? numero : acumulador;
});

const positivosB = b.every(numero => numero > 0);

console.log("Mayor de b:", mayorB);
console.log("¿Todos son positivos?:", positivosB);