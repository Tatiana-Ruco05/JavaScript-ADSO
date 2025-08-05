let prompt = require('prompt-sync')()

let personas = parseInt(prompt("Ingrese el número de personas"))
let gramosPapa = personas * 200
let kilosPapa = gramosPapa / 1000
let huevos = kilosPapa * 5
let gramosCebolla = kilosPapa * 300
console.log("Para " + personas + " personas, se necesitan")
console.log("- " + gramosPapa + " gramos de papa")
console.log("- " + huevos + " huevos")
console.log("- " + gramosCebolla + " gramos de cebolla")