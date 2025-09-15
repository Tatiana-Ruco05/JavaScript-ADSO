class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return 'Sonido genérico de animal';
  }
}

class Perro extends Animal {
  hacerSonido() {
    return 'Guau guau!';
  }
}

class Gato extends Animal {

    hacerSonido() {
    return 'Miau miau!';
  }
}


const perro = new Perro('Firulais');
console.log(`${perro.nombre} dice: ${perro.hacerSonido()}`); 

const gato = new Gato('Misu');
console.log(`${gato.nombre} dice: ${gato.hacerSonido()}`); 

// preguntar un poco mas de this