// Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require('prompt-sync')();


let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triangulo: "))
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triangulo: "))
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triangulo: "))

if (lado1 === lado2 && lado2 === lado3){
    console.log("Es un triángulo equilatero.");
}
else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log("Es un triángulo isósceles.")
} else {
    console.log("Es un triángulo escaleno.")
}
