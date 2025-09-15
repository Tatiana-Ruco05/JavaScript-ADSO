class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Pedido {
  constructor(numero) {
    this.numero = numero;
    this.productos = [];  // Lista de Producto
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  mostrarProductos() {
    console.log(`Productos en pedido ${this.numero}:`);
    this.productos.forEach(prod => console.log(`- ${prod.nombre}: $${prod.precio}`));
  }
}


const prod1 = new Producto('Laptop', 1500000);
const prod2 = new Producto('Mouse', 50000);
const pedido = new Pedido('001');
pedido.agregarProducto(prod1);
pedido.agregarProducto(prod2);
pedido.mostrarProductos();
