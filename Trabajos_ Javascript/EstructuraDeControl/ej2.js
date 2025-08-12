const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número entero: "));
numero = Math.abs(numero);
let suma = 0;

while (numero > 0) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
}

console.log(`La suma de los dígitos es: ${suma}`);

/**Math.floor-- sirve para redondear un número decimal hacia abajo al entero más cercano.
  Es decir, siempre devuelve el entero menor o igual al número dado.
  
   * Math.abs-- math. abs() se utiliza para devolver el valor absoluto en JavaScript.
  Niega el signo nativo de un número y devuelve el valor positivo correspondiente.
   * 
  */

