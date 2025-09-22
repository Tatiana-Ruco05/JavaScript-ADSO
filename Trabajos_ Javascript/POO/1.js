class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }
}


const miCirculo = new Circulo(5);
console.log(`El área del círculo es: ${miCirculo.calcularArea()}`);  