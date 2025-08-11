let prompt = require('prompt-sync')()

let a = prompt("Ingrese el valor de la primera variable")
let b = prompt("Ingrese el valor de la segunda variable")
let temp = a
a = b
b = temp
console.log("Después del intercambio")
console.log("Primera variable: " + a)
console.log("Segunda variable: " + b)