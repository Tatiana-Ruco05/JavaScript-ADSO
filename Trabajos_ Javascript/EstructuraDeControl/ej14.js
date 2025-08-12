prompt = require('prompt-sync')()

let altura = 5
for (let i = 1; i <= altura; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "* "
    }
    console.log(linea)
}