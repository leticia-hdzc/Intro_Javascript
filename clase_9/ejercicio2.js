// Ejercicio 2:
// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
// valores numéricos de tu elección. Pide al usuario que ingrese un
// número y verifica si está dentro del rango definido por las constantes.

const prompt = require('prompt-sync')();

const rango_minimo = 1
const rango_maximo = 35

let numero_usuario = parseFloat(prompt("Ingrese un numero: "));

if (numero_usuario >= rango_minimo && numero_usuario <= rango_maximo){
    console.log("El número esta dentro del rango");
}
else{
    console.log("El número está fuera del rango");
}