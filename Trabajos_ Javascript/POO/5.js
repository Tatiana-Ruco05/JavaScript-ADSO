class Usuario {
  #correo;

  constructor(nombre) {
    this.nombre = nombre;
  }

  get correo() {
    return this.#correo;
  }

  set correo(nuevoCorreo) {
    if (nuevoCorreo.includes('@') && nuevoCorreo.includes('.')) {
      this.#correo = nuevoCorreo;
      console.log(`Correo actualizado: ${this.#correo}`);
    } else {
      console.log('Formato de correo inválido.');
    }
  }
}

const usuario = new Usuario('Pedro');
usuario.correo = 'pedro@example.com';  
usuario.correo = 'invalido';           
console.log(usuario.correo);           