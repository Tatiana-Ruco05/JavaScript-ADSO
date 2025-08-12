const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

let sumaPares = 0;
let sumaImpares = 0;
let conteoImpares = 0;

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
        conteoImpares++;
    }
}

console.log(`Suma de pares: ${sumaPares}`);
if (conteoImpares > 0) {
    console.log(`Promedio de impares: ${(sumaImpares / conteoImpares).toFixed(2)}`);
} else {
    console.log("No hay números impares en el rango.");
}

/**
 *  toFixed// en JavaScript sirve para formatear un número con un número fijo de decimales.
 * const// es una palabra reservada que se utiliza para declarar una variable cuyo valor no puede ser reasignado después de su inicialización.
 */