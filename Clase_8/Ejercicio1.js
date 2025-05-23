/* Ejercicio 1: Calcula el doble de un número

1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.

Requisitos:
• Utiliza la función prompt() para solicitar el dato al usuario.
• Almacena el número ingresado en una variable.
• Utiliza un operador aritmético para calcular el doble del número.*/

const prompt = require("prompt-sync")({ sigint: true });

//Saludo
console.log ("¡Hola!");

//1. Solicite al usuario que ingrese un número cualquiera.
let numero = parseFloat(prompt("Ingresa un número: " ));

//2. Calcule el doble de ese número.
let doblenumero = numero * 2;

//3. Muestre el resultado en la consola.
console.log ("El doble del número ingresado es:", doblenumero);



