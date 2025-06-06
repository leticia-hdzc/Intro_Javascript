// Ejercicio 4: ¿Es par o impar?
// Consigna:
// Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Ingresa un número entero: "));

let mensaje = num % 2 == 0 ? "El número es par " : "El número es impar";

console.log(mensaje);
