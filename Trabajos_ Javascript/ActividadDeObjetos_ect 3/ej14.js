
const votos = { Uno: 0, Dos: 0, Tres: 0, Blanco: 0 };
let votantes = 0;
const maxVotantes = 50;
const claveCierre = "cerrar";  

function registrarVoto(opcion) {
    if (votantes >= maxVotantes || opcion === claveCierre) {
        console.log("Elecciones cerradas.");
        console.log("Personas que votaron:", votantes);
        console.log("Votos:", votos);
        return;
    }
    if (opcion in votos) {
        votos[opcion]++;
        votantes++;
    } else {
        console.log("Opción inválida.");
    }
}

registrarVoto("Uno");
registrarVoto("Blanco");
registrarVoto("cerrar");  