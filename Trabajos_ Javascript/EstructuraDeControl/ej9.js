prompt = require('prompt-sync')()

for (let tabla = 2; tabla <= 9; tabla++) {
    console.log("Tabla del " + tabla + ":")
    for (let i = 1; i <= 10; i++) {
        console.log(tabla + " x " + i + " = " + (tabla * i))
    }
    console.log("");
}