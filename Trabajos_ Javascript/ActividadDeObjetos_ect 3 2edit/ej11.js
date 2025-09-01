function obtenerCapital(pais) {
    const capitales = new Map([
        ['Colombia', 'Bogotá'],
        ['España', 'Madrid'],
        ['Francia', 'París'],
        ['México', 'Ciudad de México'],
        ['Argentina', 'Buenos Aires'],
        ['Brasil', 'Brasilia'],
        ['Italia', 'Roma'],
        ['Alemania', 'Berlín'],
        ['Japón', 'Tokio'],
        ['Canadá', 'Ottawa']
    ]);
    return capitales.get(pais) || 'Capital no encontrada';
}


console.log(obtenerCapital('Colombia'));  