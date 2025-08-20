function contarPares(arreglo) {
    let contador = 0;
    for (let num of arreglo) {
        if (num % 2 === 0) {
            contador++;
        }
    }
    return contador;
}


console.log(contarPares([1, 2, 3, 4, 5])); 