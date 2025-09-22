// Mostrar candidatos para votar (CORREGIDO - PUNTO 5)
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
                             data-candidato-id="${candidato.id}"
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
    
    // AGREGAR EVENT LISTENERS DESPUÉS DE GENERAR EL HTML
    document.querySelectorAll('.candidato-foto').forEach(img => {
        img.addEventListener('click', function() {
            const candidatoId = parseInt(this.getAttribute('data-candidato-id'));
            confirmarVoto(candidatoId);
        });
    });
    
    console.log('✅ Event listeners agregados a las fotos');
}