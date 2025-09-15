class Persona {
  constructor(identificacion, nombre, correo) {
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.correo = correo;
  }

  info() {
    return `ID: ${this.identificacion}, Nombre: ${this.nombre}, Correo: ${this.correo}`;
  }
}

class Aprendiz extends Persona {
  constructor(identificacion, nombre, correo, puntajeIcfes) {
    super(identificacion, nombre, correo);
    this.puntajeIcfes = puntajeIcfes;
  }

  info() {
    return `${super.info()}, Puntaje ICFES: ${this.puntajeIcfes}`;
  }
}

class Instructor extends Persona {
  constructor(identificacion, nombre, correo, especialidad) {
    super(identificacion, nombre, correo);
    this.especialidad = especialidad;
  }

  info() {
    return `${super.info()}, Especialidad: ${this.especialidad}`;
  }
}

const aprendiz = new Aprendiz('12345', 'Maria', 'maria@example.com', 350);
console.log(aprendiz.info());

const instructor = new Instructor('67890', 'Carlos', 'carlos@example.com', 'Programación');
console.log(instructor.info()); 