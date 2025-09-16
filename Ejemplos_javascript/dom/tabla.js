let productos = [];
const tbody = document.querySelector("tbody");

function agregarProductoTabla() {
    //crear un producto
    const producto = {
        codigo: 10,
        nombre: "Televisor",
        categoria: "Electrodomesticos",
        precio: 2500000 
    };

    const fila = document.createElement("tr");
    
    // crear la columna de codigo
    let td = document.createElement("td");
    td.textContent = producto.codigo;
    fila.appendChild(td);

    //columna nombre
    let tdnombre = document.createElement("td");
    tdnombre.textContent = producto.nombre;
    fila.appendChild(tdnombre);

    //columna categoria
    let tdcategoria = document.createElement("td");
    tdcategoria.textContent = producto.categoria;
    fila.appendChild(tdcategoria);

    //columna precio
    let tdprecio = document.createElement("td");
    tdprecio.textContent = producto.precio;
    fila.appendChild(tdprecio);

    //agregar al tbody la fila
    tbody.appendChild(fila);
}

agregarProductoTabla();

function agregarProductosDesdeArreglo() {
    let datos = "";
    productos.forEach(producto => {
        datos += "<tr>";
        datos += "<td>" + producto.codigo + "</td>";
        datos += "<td>" + producto.nombre + "</td>";
        datos += "<td>" + producto.categoria + "</td>";
        datos += "<td>" + producto.precio + "</td>";
        datos += "</tr>";
    });
    tbody.innerHTML = datos; 
}

//crear el pie de pagina
const footer = document.createElement("footer");
footer.textContent = "Elaborado por ADSO 3064975";
footer.classList.add("colorFondo", "colorTexto"); 

document.querySelector(".container").appendChild(footer); 

const btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", () => {
    let producto = {
        codigo: document.querySelector("#txtcodigo").value,
        nombre: document.querySelector("#txtnombre").value,
        categoria: document.querySelector("#txtcategoria").value,
        precio: document.querySelector("#txtprecio").value 
    };
    productos.push(producto);
    agregarProductosDesdeArreglo();
});

footer.addEventListener("mouseover", () => {
    footer.textContent = "Bienvenido";
});

footer.addEventListener("mouseout", () => {
    footer.textContent = "Elaborado por ADSO 3064975";
});


