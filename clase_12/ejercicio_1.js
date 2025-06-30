// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

let suma = 0;
let numero = parseFloat(prompt("Ingresa un número (negativo para salir):"));

while (numero >= 0) {
  suma += numero;
  numero = parseFloat(prompt("Ingresa otro número (negativo para salir):"));
}

console.log("La suma total es: " + suma);

