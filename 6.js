// Predecimos que Sara será reemplazada por Camila.

const nombresFill = ["Ana", "Luis", "Sara", "Pedro"];

let indice = nombresFill.indexOf("Sara");

if (indice !== -1) {
    nombresFill.fill("Camila", indice, indice + 1);
}

console.log("Con fill:", nombresFill);


// Ahora usamos splice() para hacer el mismo reemplazo.

const nombresSplice = ["Ana", "Luis", "Sara", "Pedro"];

indice = nombresSplice.indexOf("Sara");

if (indice !== -1) {
    nombresSplice.splice(indice, 1, "Camila");
}

console.log("Con splice:", nombresSplice);


// Buscamos un nombre que no existe.

indice = nombresSplice.indexOf("Juan");

if (indice !== -1) {
    nombresSplice.splice(indice, 1, "Carlos");
}

console.log("Buscando a Juan:", nombresSplice);