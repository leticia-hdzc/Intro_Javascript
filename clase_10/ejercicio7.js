// Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

//Temporal

// let a = 5;
// let b = 10;

// console.log("Antes del intercambio:");
// console.log("a =", a, ", b =", b);

// let temp = a;
// a = b;
// b = temp;

// console.log("Después del intercambio:");
// console.log("a =", a, ", b =", b);

//Aritmética (solo funciona bien con números y puede ser menos legible)

// let a = 5;
// let b = 10;

// console.log("Antes del intercambio:");
// console.log("a =", a, ", b =", b);

// a = a + b; // a = 15
// b = a - b; // b = 15 - 10 = 5 (ahora b tiene el valor original de a)
// a = a - b; // a = 15 - 5 = 10 (ahora a tiene el valor original de b)

// console.log("Después del intercambio:");
// console.log("a =", a, ", b =", b);

// Asignación simultanea o destructuring

let a = 5;
let b = 10;

console.log("Antes del intercambio:");
console.log("a =", a, ", b =", b);

[a, b] = [b, a]; // Intercambio de valores

console.log("Después del intercambio:");
console.log("a =", a, ", b =", b);