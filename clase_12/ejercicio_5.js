// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo).

const prompt = require('prompt-sync')();

let nombres = []

for (let i = 0; i < 5; i++) {
    let nombre = prompt("Ingresa el nombre " + (i + 1) + ":");
    nombres[i] = nombre.toLowerCase();
}

let nom_busqueda = prompt("\nIngresa el nombre que estás buscando: ").toLowerCase();

if (nombres.includes(nom_busqueda)) {
  console.log("Nombre encontrado en la lista");
} else {
  console.log("Nombre encontrado en la lista");
}

//Ternario
// nombres.includes(nom_busqueda)
//   ? console.log("Nombre encontrado")
//   : console.log("Nombre no encontrado");