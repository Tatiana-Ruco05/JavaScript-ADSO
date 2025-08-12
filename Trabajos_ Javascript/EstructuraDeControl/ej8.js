prompt = require('prompt-sync')()

let numero = parseInt(prompt("Ingrese un número entero:"));
let esPrimo = true;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

console.log(esPrimo ? "El número es primo." : "El número no es primo.");