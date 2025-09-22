// Configuración de la API
const API_CONFIG = {
    baseURL: 'https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/',
    candidatosEndpoint: 'candidatos.json',
    votosEndpoint: 'votos.json' // Para guardar votos (simulado)
};

// Credenciales de administrador (cambiar en producción)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin2025'
};

// Estado global de la aplicación
let appState = {
    electionOpen: false,
    userVoted: false,
    userInfo: {
        nombre: '',
        ficha: '',
        grupo: 'GFPI-F-135 V04'
    },
    candidatos: [],
    votos: []
};

// Inicializar localStorage
function initLocalStorage() {
    // Cargar estado de elecciones
    const savedElectionState = localStorage.getItem('electionState');
    if (savedElectionState) {
        appState.electionOpen = JSON.parse(savedElectionState).electionOpen || false;
    }
    
    // Cargar votos
    const savedVotos = localStorage.getItem('votos');
    if (savedVotos) {
        appState.votos = JSON.parse(savedVotos);
    }
    
    // Cargar información del usuario
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
        appState.userInfo = { ...appState.userInfo, ...JSON.parse(savedUserInfo) };
    }
}

// Cargar candidatos desde la API
async function cargarCandidatos() {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.candidatosEndpoint}`);
        if (!response.ok) throw new Error('Error al cargar candidatos');
        
        const candidatos = await response.json();
        appState.candidatos = candidatos.map(candidato => ({
            ...candidato,
            votos: 0 // Inicializar contador de votos
        }));
        
        // Actualizar votos desde localStorage
        actualizarVotosLocalStorage();
        
        console.log('✅ Candidatos cargados:', appState.candidatos);
        return true;
    } catch (error) {
        console.error('❌ Error cargando candidatos:', error);
        
        // Datos de prueba si falla
        appState.candidatos = [
            {
                id: 1,
                nombre: "María González",
                programa: "Administración de Empresas",
                foto: "https://via.placeholder.com/200x200/3498db/ffffff?text=MG",
                descripcion: "Líder estudiantil con experiencia en organización de eventos"
            },
            {
                id: 2,
                nombre: "Carlos Ramírez",
                programa: "Ingeniería de Sistemas",
                foto: "https://via.placeholder.com/200x200/e74c3c/ffffff?text=CR",
                descripcion: "Desarrollador apasionado por la tecnología y la innovación"
            },
            {
                id: 3,
                nombre: "Ana López",
                programa: "Diseño Gráfico",
                foto: "https://via.placeholder.com/200x200/2ecc71/ffffff?text=AL",
                descripcion: "Creativa con visión artística y experiencia en diseño digital"
            },
            {
                id: 4,
                nombre: "Juan Pérez",
                programa: "Contaduría Pública",
                foto: "https://via.placeholder.com/200x200/f39c12/ffffff?text=JP",
                descripcion: "Experto en finanzas y gestión administrativa"
            }
        ];
        
        actualizarVotosLocalStorage();
        return true;
    }
}

// Actualizar votos desde localStorage
function actualizarVotosLocalStorage() {
    appState.votos.forEach(voto => {
        const candidato = appState.candidatos.find(c => c.id === voto.candidatoId);
        if (candidato) {
            candidato.votos = voto.votos || 1;
        }
    });
}

// Guardar voto en localStorage
function guardarVoto(candidatoId) {
    const votoExistente = appState.votos.find(v => v.candidatoId === candidatoId);
    const timestamp = new Date().toISOString();
    
    if (votoExistente) {
        votoExistente.votos++;
        votoExistente.ultimoVoto = timestamp;
    } else {
        appState.votos.push({
            candidatoId: candidatoId,
            votos: 1,
            primerVoto: timestamp,
            ultimoVoto: timestamp,
            votante: appState.userInfo.nombre || 'Anónimo'
        });
    }
    
    // Actualizar votos del candidato
    const candidato = appState.candidatos.find(c => c.id === candidatoId);
    if (candidato) {
        candidato.votos++;
    }
    
    // Guardar en localStorage
    localStorage.setItem('votos', JSON.stringify(appState.votos));
    
    // Marcar que el usuario ya votó
    appState.userVoted = true;
    localStorage.setItem('userVoted', 'true');
    
    console.log('✅ Voto guardado para candidato:', candidatoId);
}

// Guardar estado de elecciones
function guardarEstadoElecciones() {
    localStorage.setItem('electionState', JSON.stringify({
        electionOpen: appState.electionOpen,
        fechaApertura: appState.electionOpen ? new Date().toISOString() : null
    }));
}

// Obtener estado actual de elecciones
function obtenerEstadoElecciones() {
    return appState.electionOpen;
}

// Verificar credenciales de admin
function verificarAdmin(usuario, contrasena) {
    return usuario === ADMIN_CREDENTIALS.username && 
           contrasena === ADMIN_CREDENTIALS.password;
}