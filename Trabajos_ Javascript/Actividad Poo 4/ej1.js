class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio ** 2;
  }
}

// Implementación de ejemplo
const miCirculo = new Circulo(5);
console.log(`Área del círculo: ${miCirculo.calcularArea()}`); 