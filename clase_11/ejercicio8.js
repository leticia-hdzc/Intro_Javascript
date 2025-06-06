// Ejercicio 8: Encuentra los múltiplos de un número
// Consigna:
// Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.

const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Ingresa un número entero positivo: "));

console.log(`Múltiplos de ${num} entre 1 y 100:`);

for (let i = 1; i <= 100; i++) {
    if (i % num === 0) {  //Se usa módulo % para identificar múltiplos (cuando el residuo es 0).
        console.log(i);
    }
}