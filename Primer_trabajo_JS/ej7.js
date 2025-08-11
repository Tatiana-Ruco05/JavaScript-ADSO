let prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número de dos dígitos:"));
let decenas = parseInt(numero / 10);
let unidades = numero % 10;
console.log("Decenas: " + decenas);
console.log("Unidades: " + unidades);