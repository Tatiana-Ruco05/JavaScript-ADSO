const prompt = require('prompt-sync')();

function menu() {
    let opcion = 0;
    do {
        console.clear();
        console.log("MENÚ DE OPCIONES");
        console.log("1. Área del Círculo");
        console.log("2. Adivinar Número entre 1 y 100");
        console.log("3. Salir");
        console.log("");
        opcion = parseInt(prompt("Ingrese Opción: "));

        switch (opcion) {
            case 1:
                calcularAreaCirculo();
                break;
            case 2:
                adivinarNumero();
                break;
            case 3:
                console.log("Saliendo del programa. ¡Hasta luego!");
                break;
            default:
                console.log("Opción no válida. Por favor ingrese una opción del 1 al 3.");
        }
        if (opcion !== 3) {
            prompt("Presione enter para continuar");
        }
    } while (opcion !== 3);
}


function calcularAreaCirculo() {
    const radio = parseFloat(prompt("Ingrese el radio del círculo: "))
    if (isNaN(radio) || radio <= 0) {
        console.log("Por favor, ingrese un número válido mayor que cero.")
    } else {
        const area = Math.PI * radio * radio;
        console.log(`El área del círculo con radio ${radio} es ${area.toFixed(2)}`)
    }
}



function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1
    let intentos = 0
    let adivinanza

    console.log("¡Bienvenido al juego de adivinar el número!")
    console.log("He generado un número entre 1 y 100. ¡Intenta adivinarlo!")
    console.log("Tienes 5 intentos.")

    do {
        adivinanza = parseInt(prompt("Ingresa tu número. "))
        intentos++;

        if (isNaN(adivinanza)) {
            console.log("Por favor, ingresa un número válido.")
        } else if (adivinanza < 1 || adivinanza > 100) {
            console.log("El número debe estar entre 1 y 100.")
        } else if (adivinanza < numeroAleatorio) {
            console.log("¡Demasiado bajo! Intenta de nuevo.")
        } else if (adivinanza > numeroAleatorio) {
            console.log("¡Demasiado alto! Intenta de nuevo.")
        } else {
            console.log(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intento(s).`)
            break;
        }
    } while (intentos < 5)

    if (adivinanza !== numeroAleatorio) {
        console.log(`Lo siento, no adivinaste. El número era ${numeroAleatorio}. ¡Mejor suerte la próxima vez!`)
    }
}

// Iniciar el menú
menu();

