const prompt = require('prompt-sync')();

let inicio = parseInt(prompt("Ingrese el primer número: "));
let fin = parseInt(prompt("Ingrese el segundo número: "));

console.log(`Múltiplos de 3 entre ${inicio} y ${fin}:`);
for (let i = inicio; i <= fin; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}