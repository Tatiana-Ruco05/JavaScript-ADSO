class Empleado {
  #sueldo;

  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.#sueldo = sueldo;
  }

  aplicarAumento(porcentaje) {
    if (porcentaje > 0) {
      this.#sueldo += this.#sueldo * (porcentaje / 100);
      console.log(`Aumento aplicado. Nuevo sueldo: ${this.#sueldo}`);
    } else {
      console.log('El porcentaje debe ser positivo.');
    }
  }

  obtenerSueldo() {
    return this.#sueldo;
  }
}


const empleado = new Empleado('Ana', 1000000);
empleado.aplicarAumento(10);  
console.log(empleado.obtenerSueldo());  
