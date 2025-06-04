// Vimos cómo declarar una variable y asignarle un valor, y probablemente surgió la siguiente pregunta: ¿para qué sirve almacenar datos en variables? Las variables nos permiten reutilizar el dato asignado en la misma con solo invocar su nombre.
// También, algo muy importante, así como podemos hacer operaciones matemáticas como sumar (+) o restar (-) números, podemos hacer lo mismo con las variables que las referencian.
// 
// Pasos a seguir:
// Declaración y Asignación de Variables:
// • Declara y asigna un valor numérico a dos variables: primerNumero y segundoNumero.

let primerNumero = 130;

let segundoNumero = 47;
// Operaciones Matemáticas:
// • Declara las siguientes variables: resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision.
// • Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de las variables primerNumero y segundoNumero.

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero/segundoNumero;

// Mostrar Resultados:
// • Utiliza console.log(nombreDeLaVariable) para imprimir cada uno de los resultados y ver cómo se ven los mismos.
// Pista 1: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual vamos a hacer referencia.
// Pista 2: Para asignar el valor a una variable utilizamos el operador "=" seguido del valor que queremos asignarle.

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);
