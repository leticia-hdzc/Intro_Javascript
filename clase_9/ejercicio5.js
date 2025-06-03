// Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let numero3 = parseFloat(prompt("Ingrese el tercer número: "));

if (numero1>=numero2 && numero1>=numero3){
    console.log(`${numero1} es el mayor de todos los números ingresados`);
}
else if (numero2>=numero1 && numero2>=numero3){
    console.log(`${numero2} es el mayor de todos los números ingresados`);
}
else if (numero3>=numero1 && numero3>=numero2){
    console.log(`${numero3} es el mayor de todos los números ingresados`);
}

