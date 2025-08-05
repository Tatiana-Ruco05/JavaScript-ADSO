let prompt = require('prompt-sync')()

let precio = parseFloat(prompt("Ingrese el precio del producto"))
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA"))
let total = precio + (precio * iva / 100)
console.log("El precio total es: " + total)


/**
 * parseFloat-- Convierte una cadena de texto en un número decimal (con parte fraccionaria). Por ejemplo, parseFloat("3.14") devuelve 3.14
 
 * parseInt-- Convierte una cadena de texto en un número entero. Por ejemplo, parseInt("42") devuelve 42
 
 * let--
 
 * prompt--  Muestra un cuadro de diálogo en el navegador para que el usuario ingrese un valor, que se devuelve como una cadena. 
   Por ejemplo, let nombre = prompt("¿Cuál es tu nombre?"); pide al usuario un nombre y lo almacena en nombre

 * console.log-- Imprime un mensaje o valor en la consola del navegador o del entorno de ejecución (como Node.js). 
   Es útil para depurar o mostrar información. Por ejemplo, console.log("Hola", 42) imprime Hola 42 en la consola.
*/

