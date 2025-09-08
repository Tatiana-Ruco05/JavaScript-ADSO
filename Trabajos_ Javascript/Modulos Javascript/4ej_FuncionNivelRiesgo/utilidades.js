export function nivelRiesgo(edad, tieneEnfermedades) {
  if (edad > 60 || tieneEnfermedades) {
    return "Alto riesgo";
  } else if (edad >= 40 && edad <= 60 && tieneEnfermedades) {
    return "Riesgo moderado";
  } else {
    return "Bajo riesgo";
  }
}