// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en la matriz.

let matriz = [
    [45, 50, 10, 17, 20],
    [22, 11, 33, 44, 55],
    [3, 65, 9, 42, 8], 
    [59, 13, 93, 45, 87],
    [31, 66, 8, 54, 85]
]

let suma = 0

for (let fila of matriz) { 
    for (let valor of fila) {
        suma += valor // suma = suma + valor / acumuladores
    }
}

console.log("La suma de los valores de la matriz es: ", suma);

//*OF* es una estructura de control para recorrer arrays, strings, sets, NodeLists *OF* PARA VALORES, Mientras que  *IN* es para índices