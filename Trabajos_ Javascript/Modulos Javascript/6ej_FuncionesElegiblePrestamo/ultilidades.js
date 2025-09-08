export function esElegibleParaPrestamo(salario, puntajeCredito) {
  if (salario > 3000000 && puntajeCredito > 650) {
    return "Elegible para préstamo";
  } else {
    return "No elegible para préstamo";
  }
}