class Estudiante {
  constructor(nombre, materias) {
    this.nombre = nombre;
    this.materias = materias;
  }

  listarMaterias() {
    console.log(`${this.nombre} está inscrito en: ${this.materias.join(', ')}`);
  }
}


const miEstudiante = new Estudiante('Juan', ['Matemáticas', 'Historia', 'Programación']);
miEstudiante.listarMaterias();  