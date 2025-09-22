// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initLocalStorage();
    inicializarEventListeners();
    verificarEstadoInicial();
});

// Inicializar event listeners
function inicializarEventListeners() {
    // Botones de administración
    document.getElementById('startElectionBtn').addEventListener('click', mostrarModalAdmin);
    document.getElementById('closeElectionBtn').addEventListener('click', cerrarElecciones);
    
    // Modal admin
    document.getElementById('confirmAdminBtn').addEventListener('click', confirmarInicioElecciones);
    document.getElementById('cancelAdminBtn').addEventListener('click', cerrarModal);
    document.getElementById('closeModal').addEventListener('click', cerrarModal);
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('adminModal');
        if (event.target === modal) {
            cerrarModal();
        }
    });
}

// Verificar estado inicial de la aplicación
async function verificarEstadoInicial() {
    // Cargar candidatos
    const candidatosCargados = await cargarCandidatos();
    
    if (candidatosCargados) {
        // Verificar si el usuario ya votó
        const userVoted = localStorage.getItem('userVoted');
        if (userVoted) {
            appState.userVoted = true;
        }
        
        // Actualizar UI según el estado
        actualizarUI();
        
        // Mostrar formulario de usuario si no ha votado
        if (!appState.userVoted && !appState.electionOpen) {
            mostrarFormularioUsuario();
        }
    }
}

// Actualizar la interfaz de usuario
function actualizarUI() {
    // Actualizar estado de elecciones
    const statusElement = document.getElementById('electionStatus');
    const startBtn = document.getElementById('startElectionBtn');
    const closeBtn = document.getElementById('closeElectionBtn');
    const votingArea = document.getElementById('votingArea');
    const resultsSection = document.getElementById('resultsSection');
    
    if (appState.electionOpen) {
        statusElement.textContent = 'Elecciones abiertas';
        statusElement.classList.add('open');
        startBtn.disabled = true;
        closeBtn.disabled = false;
        
        if (appState.userVoted) {
            votingArea.innerHTML = `
                <div class="mensaje-voto-existente">
                    <div class="icon-voto">✅</div>
                    <h3>¡Ya has votado!</h3>
                    <p>Tu voto ha sido registrado exitosamente.</p>
                    <p><strong>Candidato seleccionado:</strong> ${obtenerCandidatoVotado()}</p>
                    <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
                </div>
            `;
            resultsSection.style.display = 'block';
            mostrarResultados();
        } else {
            mostrarCandidatosParaVotar();
        }
    } else {
        statusElement.textContent = 'Elecciones cerradas';
        statusElement.classList.remove('open');
        startBtn.disabled = false;
        closeBtn.disabled = true;
        
        if (appState.userVoted) {
            votingArea.innerHTML = `
                <div class="mensaje-voto-existente">
                    <div class="icon-voto">✅</div>
                    <h3>¡Tu voto ha sido registrado!</h3>
                    <p>Las elecciones están cerradas. Puedes ver los resultados.</p>
                </div>
            `;
            resultsSection.style.display = 'block';
            mostrarResultados();
        } else {
            mostrarFormularioUsuario();
        }
    }
    
    document.getElementById('loading').style.display = 'none';
}

// Mostrar formulario de información del usuario
function mostrarFormularioUsuario() {
    const votingArea = document.getElementById('votingArea');
    votingArea.innerHTML = `
        <div class="formulario-usuario">
            <h3>👤 Información del Aprendiz</h3>
            <p>Por favor completa tu información antes de votar:</p>
            
            <form id="userForm" class="user-form">
                <div class="form-group">
                    <label for="userName">Nombre completo:</label>
                    <input type="text" id="userName" required placeholder="Ej: Juan Pérez García">
                </div>
                
                <div class="form-group">
                    <label for="userFicha">Número de ficha:</label>
                    <input type="text" id="userFicha" required placeholder="Ej: 2456789">
                </div>
                
                <div class="form-group">
                    <label>Grupo: <span class="grupo-info">GFPI-F-135 V04</span></label>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Continuar</button>
                </div>
            </form>
        </div>
    `;
    
    // Event listener para el formulario
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarInformacionUsuario();
    });
}

// Guardar información del usuario
function guardarInformacionUsuario() {
    const nombre = document.getElementById('userName').value.trim();
    const ficha = document.getElementById('userFicha').value.trim();
    
    if (nombre && ficha) {
        appState.userInfo.nombre = nombre;
        appState.userInfo.ficha = ficha;
        
        // Guardar en localStorage
        localStorage.setItem('userInfo', JSON.stringify(appState.userInfo));
        
        // Mostrar mensaje de confirmación
        mostrarMensajeConfirmacionUsuario();
        
        // Esperar 2 segundos y mostrar candidatos si las elecciones están abiertas
        setTimeout(() => {
            if (appState.electionOpen && !appState.userVoted) {
                mostrarCandidatosParaVotar();
            }
        }, 2000);
    } else {
        alert('Por favor completa todos los campos');
    }
}

// Mostrar mensaje de confirmación del usuario
function mostrarMensajeConfirmacionUsuario() {
    const votingArea = document.getElementById('votingArea');
    votingArea.innerHTML = `
        <div class="mensaje-confirmacion">
            <div class="icon-check">✅</div>
            <h3>¡Información registrada!</h3>
            <div class="info-usuario">
                <p><strong>Aprendiz:</strong> ${appState.userInfo.nombre}</p>
                <p><strong>Ficha:</strong> ${appState.userInfo.ficha}</p>
                <p><strong>Grupo:</strong> ${appState.userInfo.grupo}</p>
            </div>
            <p class="mensaje-espera">Preparando la votación...</p>
        </div>
    `;
}

// Mostrar candidatos para votar (ESTRUCTURA DEL PUNTO 5)
function mostrarCandidatosParaVotar() {
    const votingArea = document.getElementById('votingArea');
    
    let html = `
        <div class="instrucciones-votacion">
            <h3>🗳️ Selecciona tu candidato</h3>
            <p>Haz clic en la foto del candidato de tu preferencia para votar.</p>
            <p class="advertencia">⚠️ Solo puedes votar una vez</p>
        </div>
    `;
    
    appState.candidatos.forEach(candidato => {
        html += `
            <div class="candidate-card" data-candidato-id="${candidato.id}">
                <div class="candidato-info">
                    <div class="candidato-header">
                        <h4 class="candidato-nombre">${candidato.nombre}</h4>
                        <p class="candidato-programa">${candidato.programa}</p>
                    </div>
                    
                    <div class="candidato-foto-container">
                        <img src="${candidato.foto}" 
                             alt="${candidato.nombre}" 
                             class="candidato-foto"
                             onclick="confirmarVoto(${candidato.id})"
                             title="Haz clic para votar por ${candidato.nombre}">
                        
                        <div class="foto-overlay">
                            <i class="bi bi-hand-thumbs-up"></i>
                            <span>Votar</span>
                        </div>
                    </div>
                    
                    <div class="candidato-descripcion">
                        <p>${candidato.descripcion}</p>
                    </div>
                    
                    <div class="info-votante">
                        <p class="aprendiz-info">Aprendiz: ${appState.userInfo.nombre}</p>
                        <p class="ficha-info">Ficha: ${appState.userInfo.ficha}</p>
                        <p class="grupo-info">GFPI-F-135 V04</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    votingArea.innerHTML = html;
}

// Confirmar voto (PUNTO 6)
function confirmarVoto(candidatoId) {
    if (!appState.electionOpen) {
        mostrarAlerta('Las elecciones están cerradas', 'warning');
        return;
    }
    
    if (appState.userVoted) {
        mostrarAlerta('Ya has votado en esta elección', 'info');
        return;
    }
    
    const candidato = appState.candidatos.find(c => c.id === candidatoId);
    if (!candidato) {
        mostrarAlerta('Candidato no encontrado', 'error');
        return;
    }
    
    // Crear modal de confirmación
    const modalHTML = `
        <div id="voteConfirmModal" class="modal active">
            <div class="modal-content vote-confirm-modal">
                <div class="modal-header">
                    <h2>🗳️ Confirmar tu voto</h2>
                    <span class="close" onclick="cerrarModalConfirmacion()">&times;</span>
                </div>
                <div class="modal-body text-center">
                    <div class="confirm-voto-icon">❓</div>
                    <h3>¿Estás seguro?</h3>
                    <p class="confirm-text">Vas a votar por:</p>
                    
                    <div class="candidato-seleccionado">
                        <img src="${candidato.foto}" alt="${candidato.nombre}" class="foto-confirmacion">
                        <div class="info-confirmacion">
                            <h4>${candidato.nombre}</h4>
                            <p class="programa-confirmacion">${candidato.programa}</p>
                        </div>
                    </div>
                    
                    <p class="advertencia-confirmacion">
                        <strong>⚠️ Este voto es definitivo</strong><br>
                        No podrás cambiar tu decisión una vez confirmado.
                    </p>
                    
                    <div class="info-votante-confirmacion">
                        <p><strong>Tu información:</strong></p>
                        <p>Aprendiz: ${appState.userInfo.nombre}</p>
                        <p>Ficha: ${appState.userInfo.ficha}</p>
                        <p>Grupo: GFPI-F-135 V04</p>
                    </div>
                    
                    <div class="form-actions">
                        <button id="cancelVoteBtn" class="btn btn-secondary" onclick="cerrarModalConfirmacion()">
                            ❌ Cancelar
                        </button>
                        <button id="confirmVoteBtn" class="btn btn-primary" onclick="registrarVoto(${candidatoId})">
                            ✅ Confirmar Voto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insertar modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Event listeners para el modal
    document.getElementById('cancelVoteBtn').addEventListener('click', cerrarModalConfirmacion);
    document.getElementById('confirmVoteBtn').addEventListener('click', () => registrarVoto(candidatoId));
}

// Registrar voto (PUNTO 6)
function registrarVoto(candidatoId) {
    guardarVoto(candidatoId);
    
    // Cerrar modal de confirmación
    cerrarModalConfirmacion();
    
    // Mostrar confirmación de voto
    mostrarConfirmacionVoto(candidatoId);
    
    // Actualizar UI
    appState.userVoted = true;
    localStorage.setItem('userVoted', 'true');
    actualizarUI();
}

// Mostrar confirmación de voto
function mostrarConfirmacionVoto(candidatoId) {
    const candidato = appState.candidatos.find(c => c.id === candidatoId);
    
    const confirmacionHTML = `
        <div id="voteConfirmation" class="vote-confirmed show">
            <div class="icon-voto-confirmado">🎉</div>
            <h3>¡Voto registrado exitosamente!</h3>
            <p>Tu voto por <strong>${candidato.nombre}</strong> ha sido contabilizado.</p>
            <div class="info-voto-confirmado">
                <p><strong>Aprendiz:</strong> ${appState.userInfo.nombre}</p>
                <p><strong>Ficha:</strong> ${appState.userInfo.ficha}</p>
                <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p class="mensaje-final">¡Gracias por participar en las elecciones!</p>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', confirmacionHTML);
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        const confirmacion = document.getElementById('voteConfirmation');
        if (confirmacion) {
            confirmacion.remove();
        }
    }, 5000);
}

// Obtener nombre del candidato votado
function obtenerCandidatoVotado() {
    // Buscar el último voto del usuario
    const ultimoVoto = appState.votos
        .filter(voto => voto.votante === appState.userInfo.nombre)
        .sort((a, b) => new Date(b.ultimoVoto) - new Date(a.ultimoVoto))[0];
    
    if (ultimoVoto) {
        const candidato = appState.candidatos.find(c => c.id === ultimoVoto.candidatoId);
        return candidato ? candidato.nombre : 'Candidato desconocido';
    }
    return 'No disponible';
}

// Mostrar resultados (PUNTO 8)
function mostrarResultados() {
    const resultadosContainer = document.getElementById('results');
    
    // Ordenar candidatos por votos (mayor a menor)
    const candidatosOrdenados = [...appState.candidatos].sort((a, b) => b.votos - a.votos);
    const totalVotos = appState.votos.reduce((sum, voto) => sum + voto.votos, 0);
    
    let html = `
        <div class="resultados-header">
            <h3>Total de votos: ${totalVotos}</h3>
            <p>Última actualización: ${new Date().toLocaleString()}</p>
        </div>
    `;
    
    candidatosOrdenados.forEach((candidato, index) => {
        const porcentaje = totalVotos > 0 ? ((candidato.votos / totalVotos) * 100).toFixed(1) : 0;
        html += `
            <div class="result-card">
                <div class="result-rank">${index + 1}</div>
                <img src="${candidato.foto}" alt="${candidato.nombre}" class="result-photo">
                <h4 class="result-name">${candidato.nombre}</h4>
                <p class="result-programa">${candidato.programa}</p>
                <div class="result-votos">
                    <span class="votos-numero">${candidato.votos}</span>
                    <span class="votos-porcentaje">${porcentaje}%</span>
                </div>
                <div class="barra-votos" style="width: ${Math.max(porcentaje, 10)}%">
                    <span>${porcentaje}%</span>
                </div>
            </div>
        `;
    });
    
    resultadosContainer.innerHTML = html;
}

// Funciones de administración
function mostrarModalAdmin() {
    document.getElementById('adminModal').classList.add('active');
    document.getElementById('modalTitle').textContent = 'Iniciar Elecciones';
    document.getElementById('adminForm').style.display = 'block';
    
    // Limpiar campos
    document.getElementById('adminUser').value = '';
    document.getElementById('adminPass').value = '';
}

function confirmarInicioElecciones() {
    const usuario = document.getElementById('adminUser').value;
    const contrasena = document.getElementById('adminPass').value;
    
    if (verificarAdmin(usuario, contrasena)) {
        appState.electionOpen = true;
        guardarEstadoElecciones();
        cerrarModal();
        actualizarUI();
        
        mostrarAlerta('Elecciones iniciadas exitosamente', 'success');
    } else {
        mostrarAlerta('Credenciales incorrectas', 'error');
    }
}

function cerrarElecciones() {
    if (confirm('¿Estás seguro de que quieres cerrar las elecciones? Esta acción no se puede deshacer.')) {
        appState.electionOpen = false;
        guardarEstadoElecciones();
        actualizarUI();
        
        mostrarAlerta('Elecciones cerradas exitosamente', 'success');
    }
}

function cerrarModal() {
    document.getElementById('adminModal').classList.remove('active');
}

function cerrarModalConfirmacion() {
    const modal = document.getElementById('voteConfirmModal');
    if (modal) {
        modal.remove();
    }
}

// Funciones de alerta
function mostrarAlerta(mensaje, tipo = 'info') {
    // Crear toast notification
    const toast = document.createElement('div');
    toast.className = `alert-toast alert-${tipo}`;
    toast.innerHTML = `
        <i class="bi ${tipo === 'success' ? 'bi-check-circle' : tipo === 'error' ? 'bi-x-circle' : 'bi-info-circle'}"></i>
        <span>${mensaje}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Animación
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}