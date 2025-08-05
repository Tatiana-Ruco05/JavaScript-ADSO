//Uso if basico

const prompt = require('prompt-sync')();

let valor = parseInt(prompt("Ingrese un numero: "));
if (valor >= 10 && valor <= 99) {
    console.log("Tiene dos dígitos");
} else {
    console.log("No tiene dos dígitos");}
