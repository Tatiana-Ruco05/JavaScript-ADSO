class Autor {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Editorial {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Libro {
    constructor(titulo, autor, editorial) {
        this.titulo = titulo;
        this.autor = autor;      // Objeto Autor
        this.editorial = editorial;  // Objeto Editorial
    }

    info() {
        return `Libro: ${this.titulo}, Autor: ${this.autor.nombre}, Editorial: ${this.editorial.nombre}`;
    }
}

// Implementación de ejemplo
const autor = new Autor('Gabriel García Márquez');
const editorial = new Editorial('Penguin Books');
const libro = new Libro('Cien Años de Soledad', autor, editorial);
console.log(libro.info());  // Output: Libro: Cien Años de Soledad, Autor: Gabriel García Márquez, Editorial: Penguin Books