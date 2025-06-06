// Ejercicio 2: Semáforo inteligente
// Consigna:
// Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
//     • Rojo: "Alto, no puedes avanzar."
//     • Amarillo: "Precaución, prepárate para avanzar."
//     • Verde: "Avanza con seguridad."
// Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
// Utiliza un switch para resolver este ejercicio.

const prompt = require('prompt-sync')();

console.log("-------Semáforo-------");

let color_usuario = prompt("Ingresa un color 🚦 (Rojo / Amarillo / Verde):  ");

switch (color_usuario) {
    case "Rojo":
        console.log("Alto, no puedes avanzar.");
        break;
     case "Amarillo":
        console.log("Precaución, prepárate para avanzar.");
        break;
     case "Verde":
        console.log("Avanza con seguridad.");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
        break;
}