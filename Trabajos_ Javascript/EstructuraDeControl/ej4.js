let prompt = require('prompt-sync')()

let dia = parseInt(prompt("Ingrese un número entre 1 y 7."))
let diaSemana;

switch (dia) {
    case 1: diaSemana = "Lunes"; break
    case 2: diaSemana = "Martes"; break
    case 3: diaSemana = "Miércoles"; break
    case 4: diaSemana = "Jueves"; break
    case 5: diaSemana = "Viernes"; break
    case 6: diaSemana = "Sábado"; break
    case 7: diaSemana = "Domingo"; break
    default: diaSemana = "Número fuera de rango"
}

console.log(diaSemana);