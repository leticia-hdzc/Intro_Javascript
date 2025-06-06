// Ejercicio 10: Adivina el número
// Consigna:
// Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.

const prompt = require("prompt-sync")({ sigint: true });

// Generar número secreto entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinado = false;

console.log("¡Adivina el número secreto (entre 1 y 10)!");

// 3 intentos con for
for (let intento = 1; intento <= 3; intento++) {
    const respuesta = parseInt(prompt(`Intento ${intento}/3. Ingresa tu número:`));
    
    if (respuesta === numeroSecreto) {
        console.log(`¡Correcto! El número era ${numeroSecreto}. 🎉`);
        adivinado = true;
        break; // Termina el ciclo si acierta
    } else {
        console.log("Incorrecto. ❌");
    }
}

// Si no adivinó después de 3 intentos
if (!adivinado) {
    console.log(`¡Agotaste tus intentos! El número era ${numeroSecreto}.`);
}