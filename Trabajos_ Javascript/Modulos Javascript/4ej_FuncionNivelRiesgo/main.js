import { nivelRiesgo } from './utilidades.js';

console.log(nivelRiesgo(65, false));  // un Alto riesgo
console.log(nivelRiesgo(50, true));   // un Riesgo moderado
console.log(nivelRiesgo(30, false));  // un Bajo riesgo