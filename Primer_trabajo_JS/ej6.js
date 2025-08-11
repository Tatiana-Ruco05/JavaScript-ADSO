let prompt = require('prompt-sync')()

let horas = parseInt(prompt("Ingrese el número de horas"))
let minutos = parseInt(prompt("Ingrese el número de minutos"))
let horasEnSegundos = horas * 60 * 60
let minutosEnSegundos = minutos * 60
let totalSegundos = horasEnSegundos + minutosEnSegundos
console.log("El total en segundos es" + totalSegundos)