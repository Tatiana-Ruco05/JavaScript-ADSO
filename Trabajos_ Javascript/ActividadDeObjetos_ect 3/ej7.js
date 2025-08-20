function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];  // Set elimina duplicados automáticamente
}

// Ejemplo de uso
console.log(eliminarDuplicados([1, 2, 2, 3]));  // Salida: [1, 2, 3]