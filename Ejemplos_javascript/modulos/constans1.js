// Exportaciones directas
export let number = 42;                 // Exporta la variable number
export const hello = () => "Hello!";    // Exporta la función hello
export class CodeBlock { }              // Exporta la clase CodeBlock

// Declaraciones internas
const goodbye = () => "¡Adiós!";        // Función local

// Exportaciones agrupadas
export { goodbye as bye };

