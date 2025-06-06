// Ejercicio 9: Cuenta regresiva para el despegue
// Consigna:
// Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo for para realizar la cuenta regresiva.

console.log("¡Cuenta regresiva para el lanzamiento!");

for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Despegue!🚀");
    } else {
        console.log(`Contando...${i}`);    
    }
}


