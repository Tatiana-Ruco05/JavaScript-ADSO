
const productosUnicos = new Set();
const precios = new Map();
const historial = [];

function agregarProducto(nombre, precio) {
    productosUnicos.add(nombre);
    precios.set(nombre, precio);
    historial.push(nombre);
}


agregarProducto("Arroz", 3500);
agregarProducto("Leche", 2430);
agregarProducto("Arroz", 3500);  
agregarProducto("Huevos", 18000);

// Mostrar resultados DE GHY
console.log("Productos únicos:", productosUnicos);  
console.log("Precios:", precios); 
console.log("Historial:", historial); 