class Estudiante {
  constructor(nombre, materias) {
    this.nombre = nombre;
    this.materias = materias; 
  }

  listarMaterias() {
    console.log(`Materias de ${this.nombre}:`);
    this.materias.forEach(materia => console.log(`- ${materia}`));
  }
}


const miEstudiante = new Estudiante('Juan', ['Matemáticas', 'Historia', 'Programación']);
miEstudiante.listarMaterias();
