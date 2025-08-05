let prompt = require('prompt-sync')()

let kilometros = parseFloat(prompt("Ingrese el número de kilómetros recorridos"))
let litros = parseFloat(prompt("Ingrese el número de litros consumidos"))
let consumoPorKilometro = litros / kilometros
console.log("El consumo de combustible es" + consumoPorKilometro + " litros por kilómetro") 