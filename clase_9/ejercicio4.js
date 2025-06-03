// Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

let nombre_usuario = prompt("¿Cuál es tu nombre? ");

if (nombre_usuario == "Leticia"){
    console.log("¡Tenemos el mismo nombre!");
}
else{
    console.log("¡Qué nombre tan raro!");
}

