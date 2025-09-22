const url = "https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/productos_ferreteria.json";

let listaProductos = [];
// creamos un let para un contador al añadir al carrito
let cantidadCarrito = 0;


fetch(url)
  .then(respuesta => respuesta.json())
  .then(productos => {
    console.log(productos);
    listaProductos = productos;
    mostrarProductos();
  })
  .catch(error => {
    console.error("Error:", error);
  });


function mostrarProductos() {
  let datos = "";

  for (let producto of listaProductos) {
    datos += `<div class="col-md-4 mb-4">`;
    datos += `<div class="card h-100 shadow-sm">`;
    datos += `<div class="card-header text-center fw-bold">`;
        datos += `${producto.nombre}`;
    datos += `</div>`;
    datos += `<div class="card-body text-center">`;
        datos += `<img src="${producto.foto}" class="img-fluid mb-2" style="max-height:150px; object-fit:cover;">`;
        datos += `<p class="fw-semibold text-success">Precio: $${producto.precio}</p>`;
    datos += `</div>`;
    datos += `<div class="card-footer text-center">`;
    datos += `<button class="btn btn-primary btn-sm" onclick="agregarCarrito()">Añadir </button>`;
    datos += `</div>`;
    datos += `</div>`;
    datos += `</div>`;
  }

  document.querySelector("#listaProductos").innerHTML = datos;
}

// Agregar al carrito
function agregarCarrito() {
  cantidadCarrito++;
  document.getElementById('txtCantidad').value = cantidadCarrito;


}
