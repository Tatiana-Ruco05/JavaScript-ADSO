function generarContraseña() {
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const digitos = '0123456789';
    const especiales = '@#$%&()=?¿*+[]{}';

    let contraseña = '';
    for (let i = 0; i < 2; i++) {
        contraseña += mayusculas.charAt(Math.floor(Math.random() * mayusculas.length));
        contraseña += minusculas.charAt(Math.floor(Math.random() * minusculas.length));
        contraseña += digitos.charAt(Math.floor(Math.random() * digitos.length));
        contraseña += especiales.charAt(Math.floor(Math.random() * especiales.length));
    }

    // Mezclar los caracteres para mayor aleatoriedad
    return contraseña.split('').sort(() => 0.5 - Math.random()).join('');
}

console.log(generarContraseña());  // Salida posible: "A#b2C@d3"