prompt = require('prompt-sync')()

let edad = parseInt(prompt("Ingrese la edad del cliente."))
let precio;

if (edad < 5) {
    precio = "gratis";
} else if (edad >= 5 && edad <= 18) {
    precio = "5 mil pesos";
} else {
    precio = "10 mil pesos";
}

console.log("El precio de la entrada es. " + precio);