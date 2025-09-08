import Contacto from './contacto.js';

let agenda = [];  

// Agregar contacto
function agregarContacto() {
  const id = document.getElementById('identificacion').value;
  if (agenda.some(c => c.identificacion === id)) {
    alert('Ya existe un contacto con esa identificación');
    return;
  }
  const contacto = new Contacto(
    id,
    document.getElementById('nombre').value,
    document.getElementById('apellido').value,
    document.getElementById('correo').value,
    document.getElementById('celular').value
  );
  agenda.push(contacto);
  actualizarTabla();
  limpiarFormulario();
}

// Consultar por ID
function consultarContacto() {
  const id = document.getElementById('identificacion').value;
  const contacto = agenda.find(c => c.identificacion === id);
  if (contacto) {
    document.getElementById('nombre').value = contacto.nombre;
    document.getElementById('apellido').value = contacto.apellido;
    document.getElementById('correo').value = contacto.correo;
    document.getElementById('celular').value = contacto.celular;
  } else {
    alert('Contacto no encontrado');
  }
}

// Actualizar contacto
function actualizarContacto() {
  const id = document.getElementById('identificacion').value;
  const index = agenda.findIndex(c => c.identificacion === id);
  if (index !== -1) {
    agenda[index].nombre = document.getElementById('nombre').value;
    agenda[index].apellido = document.getElementById('apellido').value;
    agenda[index].correo = document.getElementById('correo').value;
    agenda[index].celular = document.getElementById('celular').value;
    actualizarTabla();
    limpiarFormulario();
  } else {
    alert('Contacto no encontrado');
  }
}

// Eliminar contacto
function eliminarContacto() {
  const id = document.getElementById('identificacion').value;
  agenda = agenda.filter(c => c.identificacion !== id);
  actualizarTabla();
  limpiarFormulario();
}


function actualizarTabla() {
  const tabla = document.getElementById('tablaContactos').getElementsByTagName('tbody')[0];
  tabla.innerHTML = '';
  agenda.forEach(contacto => {
    const fila = tabla.insertRow();
    fila.insertCell(0).innerText = contacto.identificacion;
    fila.insertCell(1).innerText = contacto.nombre;
    fila.insertCell(2).innerText = contacto.apellido;
    fila.insertCell(3).innerText = contacto.correo;
    fila.insertCell(4).innerText = contacto.celular;
  });
}


function limpiarFormulario() {
  document.getElementById('identificacion').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('celular').value = '';
}

// Lista
document.getElementById('agregar').addEventListener('click', agregarContacto);
document.getElementById('consultar').addEventListener('click', consultarContacto);
document.getElementById('actualizar').addEventListener('click', actualizarContacto);
document.getElementById('eliminar').addEventListener('click', eliminarContacto);