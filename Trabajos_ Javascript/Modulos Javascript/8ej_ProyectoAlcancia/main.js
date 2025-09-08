import Alcancia from './alcancia.js';

const alcancia = new Alcancia();

// para pruebas iniciales
alcancia.agregarMoneda(200);
alcancia.agregarMoneda(500);
console.log(alcancia.contarMonedas());  
console.log(alcancia.totalAhorrado()); 
alcancia.romperAlcancia();
console.log(alcancia.totalAhorrado()); 


document.getElementById('agregar').addEventListener('click', () => {
  const denom = parseInt(document.getElementById('denominacion').value);
  alcancia.agregarMoneda(denom);
  actualizarDisplay();
});

document.getElementById('contar').addEventListener('click', () => {
  const conteo = alcancia.contarMonedas();
  document.getElementById('resultado').innerText = `200: ${conteo[200]}, 500: ${conteo[500]}, 1000: ${conteo[1000]}`;
});

document.getElementById('total').addEventListener('click', () => {
  document.getElementById('resultado').innerText = `Total: ${alcancia.totalAhorrado()}`;
});

document.getElementById('romper').addEventListener('click', () => {
  alcancia.romperAlcancia();
  actualizarDisplay();
});

document.getElementById('nueva').addEventListener('click', () => {
  alcancia.nuevaAlcancia();
  actualizarDisplay();
});

function actualizarDisplay() {
  document.getElementById('resultado').innerText = `Total: ${alcancia.totalAhorrado()}`;
}