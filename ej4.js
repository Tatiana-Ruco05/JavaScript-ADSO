let prompt = require('prompt-sync')()

let num1 = parseInt(prompt("Ingrese el primer número entero"))
let num2 = parseInt(prompt("Ingrese el segundo número entero"))
let num3 = parseInt(prompt("Ingrese el tercer número entero"))
let media = (num1 + num2 + num3) / 3
console.log("La media de los tres números es" + media)