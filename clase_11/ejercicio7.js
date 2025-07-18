// Ejercicio 7: Calculadora simple
// Consigna:
// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.

const prompt = require("prompt-sync")({ sigint: true });

console.log("------CALCULADORA------");

let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número número: "));

let operacion = prompt("Elige el símbolo de la operación que quieres realizar: + (suma) , - (resta), x (multiplicación), / (división): ");

switch (operacion) {
    case "+":
        console.log("El resultado de la suma es =", num1 + num2);        
        break;
    case "-":
        console.log("El resultado de la resta es =", num1 - num2);   
        break;
    case "x":
        console.log("El resultado de la multiplicación es =", num1 * num2);   
        break;
    case "/":
        console.log("El resultado de la división es =", num1 / num2);   
        break;
    default:
        console.log("Error. Operación inválida."); 
        break;
}