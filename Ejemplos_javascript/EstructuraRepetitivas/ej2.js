/*Hacer un script que lea un numero entero y como resultado
impropio en la pantalla la suma de sus digitos */

let prompt = require('prompt-sync')()

let numero = parseInt(prompt("Ingrese un número entero: "));
let suma = 0;
let guar = numero;

if (guar  < 0) {
    guar  = -guar ; // Convertir número negativo a positivo
}

while (guar > 0) {
    suma += guar  % 10; // Obtener el último dígito
    guar  = (guar  - (guar  % 10)) / 10; // Eliminar el último dígito
}

console.log("La suma de los dígitos es: " + suma);


/**
 * let suma = 0; se utiliza para declarar una variable
 * 
 */
