/*Ejercicio 3: Suma de dos números ingresados por el usuario

Enunciado:
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores aritméticos. Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.

Requisitos:
• Utiliza prompt() para recibir los números.
• Utiliza parseFloat() para convertir las entradas a números.
• Almacena los resultados en variables adecuadas y muestra el resultado.*/

const prompt = require("prompt-sync")({ sigint: true });

// 1. Pida al usuario que ingrese dos números.
let numeroA = parseFloat(prompt("Ingresa un número: "));
let numeroB = parseFloat(prompt("Ingresa otro número: "));

// 2. Sume ambos números.
let suma = numeroA + numeroB;

// 3. Muestre el resultado de la suma.

console.log(`La suma de los números ingresados es: ${suma}`)


