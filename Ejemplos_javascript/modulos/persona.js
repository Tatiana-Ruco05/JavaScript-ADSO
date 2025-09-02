class persona {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y mi correo es ${this.correo}`);
    }
}
