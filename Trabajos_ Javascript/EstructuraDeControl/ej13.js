prompt = require('prompt-sync')()

let decimal = parseInt(prompt("Ingrese un número decimal. "))
let binario = "";

while (decimal > 0) {
    binario = (decimal % 2) + binario
    decimal = Math.floor(decimal / 2)
}

console.log("El número en binario es: " + (binario || "0"))