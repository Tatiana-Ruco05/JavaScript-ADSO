const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin1234';

// ID único por usuario (simulación)
const userId = new Date().getTime().toString();

// Lista fija de candidatos con imágenes manuales
const candidates = [
    { id: 'juan', nombre: 'Juan Perez', programa: 'Ficha 287859 - Tecnólogo en Análisis y Desarrollo de Software', foto: 'img/juan.avif' },
    { id: 'monik', nombre: 'Monik Galindo', programa: 'Ficha 287860 - Tecnólogo en Multimedia', foto: 'img/imagen monik.avif' },
    { id: 'carlos', nombre: 'Carlos Martinez', programa: 'Ficha 287861 -Tecnólogo en Refrigeración', foto: 'img/carlos.avif' },
    { id: 'blanco', nombre: 'Voto en Blanco', programa: '', foto: 'img/en blanco.jpg' }
];

// codigo de la pagina principal
function adminLogin() {
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        document.getElementById('adminPanel').style.display = 'none';
        document.getElementById('adminActions').style.display = 'block';
        updateAdminActions();
    } else {
        alert('Credenciales incorrectas.');
    }
}

// este codigo es para 
function updateAdminActions() {
    const isOpen = localStorage.getItem('electionsOpen') === 'true';
    document.getElementById('startElectionsBtn').style.display = isOpen ? 'none' : 'inline-block';
}

function startElections() {
    localStorage.setItem('electionsOpen', 'true');
    localStorage.removeItem(`vote_${userId}`); // reiniciar voto para volver de cero
    alert('Elecciones iniciadas.');

    loadVotingInterface();
    document.getElementById('adminActions').style.display = 'none';
    document.getElementById('votingPanel').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';
}

function closeElections() {
    localStorage.setItem('electionsOpen', 'false');
    alert('Elecciones cerradas.');

    loadResults();
    document.getElementById('adminActions').style.display = 'none';
    document.getElementById('votingPanel').style.display = 'none';
    document.getElementById('resultsPanel').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';
}

function goBackToAdminActions() {
    document.getElementById('votingPanel').style.display = 'none';
    document.getElementById('resultsPanel').style.display = 'none';
    document.getElementById('adminActions').style.display = 'block';
    document.getElementById('backButton').style.display = 'none';
    updateAdminActions();
}

// forma de como funcionara las votaciones 
function loadVotingInterface() {
    if (localStorage.getItem('electionsOpen') !== 'true') {
        alert('Las elecciones no están abiertas.');
        return;
    }

    const container = document.getElementById('candidatesContainer');
    container.innerHTML = '';

    candidates.forEach(candidate => {
        const candDiv = document.createElement('div');
        candDiv.className = 'candidate';
        candDiv.innerHTML = `
            <h2>${candidate.nombre}</h2>
            ${candidate.programa ? `<p>${candidate.programa}</p>` : ''}
            <img src="${candidate.foto}" alt="Foto de ${candidate.nombre}" onclick="confirmVote('${candidate.id}')">
        `;
        container.appendChild(candDiv);
    });
}
// para guardar el id de el votante es decir que cuando vote por juan solo sea por el
function confirmVote(candidateId) {
    if (confirm(`¿Está seguro de votar por ${candidateId}?`)) {
        localStorage.setItem(`vote_${userId}`, candidateId); 
        alert('Voto registrado exitosamente.');
        loadVotingInterface();
    }
}

//aqui se ejecuta las respuestas de los votos 
function loadResults() {
    const votedId = localStorage.getItem(`vote_${userId}`);
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';

    let totalVotes = 0;

    candidates.forEach(candidate => {
        const resultP = document.createElement('p');
        const votos = (candidate.id === votedId) ? 1 : 0;
        resultP.textContent = `${candidate.nombre}${candidate ? ' ()' : ''}: ${votos} votos`;
        container.appendChild(resultP);
        totalVotes += votos;
    });

    const totalP = document.createElement('p');
    totalP.textContent = `Total de votos emitidos: ${totalVotes}`;
    container.appendChild(totalP);
}

//volver al inicio
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('adminPanel').style.display = 'block';
    updateAdminActions();
});
