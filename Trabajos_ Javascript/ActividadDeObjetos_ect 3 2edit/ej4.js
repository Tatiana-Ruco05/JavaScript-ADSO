function sumaYPromedio(arreglo) {
    let suma = 0;
    for (let num of arreglo) {
        suma += num;
    }
    const promedio = suma / arreglo.length;
    return { suma, promedio };
}


console.log(sumaYPromedio([1, 2, 3, 4]));  