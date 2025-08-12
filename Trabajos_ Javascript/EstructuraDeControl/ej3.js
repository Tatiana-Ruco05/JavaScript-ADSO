let prompt = require('prompt-sync')()

let edad = parseInt(prompt("Ingrese su edad:"));
let tieneCedula = prompt("¿Tiene cédula? (si/no):");
let cedulaInscrita = prompt("¿Tiene la cédula inscrita? (si/no):");

if (edad >= 18 && 
    (tieneCedula === "si" || tieneCedula === "SÍ" || tieneCedula === "Si") && 
    (cedulaInscrita === "si" || cedulaInscrita === "SÍ" || cedulaInscrita === "Si")) {
    console.log("Puede votar.");
} else {
    console.log("No puede votar no cumple con los requisitos pedidos.");
}