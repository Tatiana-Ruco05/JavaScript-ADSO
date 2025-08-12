/**
 * Convertir el número del mes en texto usando switch

switch(mes){
    case valor:
        break

    case otrovalor:
        break
    
    default:
        break}
*/

const prompt = require("prompt-sync")()

const numeroMes = parseInt(prompt("Digite el número del mes:"));

let mesTexto;
switch (numeroMes) {
    case 1:
        mesTexto = "Enero";
        break;
    case 2:
        mesTexto = "Febrero";
        break;
    case 3:
        mesTexto = "Marzo";
        break;
    case 4:
        mesTexto = "Abril";
        break;
    case 5:
        mesTexto = "Mayo";
        break;
    case 6:
        mesTexto = "Junio";
        break;
    case 7:
        mesTexto = "Julio";
        break;
    case 8:
        mesTexto = "Agosto";
        break;
    case 9:
        mesTexto = "Septiembre";
        break;
    case 10:
        mesTexto = "Octubre";
        break;
    case 11:
        mesTexto = "Noviembre";
        break;
    case 12:
        mesTexto = "Diciembre";
        break;
    default:
        mesTexto = "...ERROR...";
        break;
}
console.log("El mes es: " + mesTexto);