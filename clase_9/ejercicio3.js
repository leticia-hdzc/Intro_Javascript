// Declara dos variables booleanas condicion1 y condicion2. Pide al 
// usuario que ingrese dos valores booleanos (true o false) y muestra el 
// resultado de diversas combinaciones lógicas. */

const prompt = require('prompt-sync')();

// Pedimos dos valores booleanos al usuario
let input1 = prompt("Ingrese el primer valor booleano (true/false): ").toLowerCase();
let input2 = prompt("Ingrese el segundo valor booleano (true/false): ").toLowerCase();

// Convertimos los strings a booleanos reales
let condicion1 = (input1 === "true");
let condicion2 = (input2 === "true");

// Mostramos resultados de combinaciones lógicas

console.log("\nCOMBINACIONES LÓGICAS:\n");
console.log(`Condición 1: ${condicion1}, Condición 2: ${condicion2}\n`);
console.log(`Condicion1 AND condicion2: ${condicion1 && condicion2}`);
console.log(`Condicion1 OR condicion2:  ${condicion1 || condicion2}`);
console.log(`NOT condicion1: ${!condicion1}`);
console.log(`NOT condicion2: ${!condicion2}`);