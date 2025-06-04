
//Tipo de datos 
// Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.

// Pasos a seguir:
// Declaración de Variables:

// • Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).

let verdadero = true 

// • Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).

let texto = "Hola, estoy aprendiendo javascript..."

// • Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).

let numero = parseInt(120);

// • Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

let nada = null

// Operaciones y Validaciones:
// • Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.

console.log(numero + 245);

// • Concatena el “string” de la variable texto con otro mensaje adicional.

console.log(texto,"en un curso de ADA.");

// • Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.

// if (verdadero != true){
//     console.log("La variable es false");
// } else {
//     console.log("La variable es true")
// }

//Ternario
console.log(verdadero != true ? "La variable es false" : "La variable es true");

// Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.

console.log(nada == null ? "Sin valor" : "Con valor");