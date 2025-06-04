//Ejercicio2
// Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y
// luego muestre un mensaje personalizado que incluya toda esta información.

const prompt = require('prompt-sync')();

// Pide al usuario que ingrese su nombre.

let nombre = prompt("¿Cómo te llamas? ");

// Pide al usuario que ingrese su edad.

let edad = prompt("¿Cuántos años tienes? ");

// Pide al usuario que ingrese su peso.

let peso = prompt("¿Cuánto pesas (kg)? ");

// Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del
// usuario.

console.log(`¡Hola ${nombre}, tienes ${edad} años y pesas ${peso}kg.`);

