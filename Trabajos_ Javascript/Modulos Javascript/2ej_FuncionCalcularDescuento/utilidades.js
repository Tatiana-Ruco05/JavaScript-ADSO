export function calcularDescuento(precio) {
  let descuento = 0;
  if (precio > 1000) {
    descuento = 0.20;
  } else if (precio >= 500 && precio <= 1000) {
    descuento = 0.10;
  }
  return precio * (1 - descuento);
}