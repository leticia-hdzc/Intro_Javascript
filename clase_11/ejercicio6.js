// Ejercicio 6: La tabla de multiplicar
// Consigna:
// Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.

const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("\nIngresa un número para generar su tabla de multiplicar: "));

console.log(`\nTabla de multiplicar del ${num}:\n`);

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);    
}