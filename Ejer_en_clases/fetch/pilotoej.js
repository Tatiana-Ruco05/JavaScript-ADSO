const url = 'https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/pilotos_formula1.json';
let listado = [];
fetch(url)
    .then(response => response.json())
    .then(pilotos => {
        console.log(pilotos)
        listado = pilotos;
        mostrarPilotos();
    })
    .catch(error => {console.error('Error:', error)});

function mostrarPilotos() {
    //let fila = document.getElementById('listaPilotos');
    let data = '';
    listado.forEach(piloto => {
        data += "<div class= 'card'>"
            data += "<div class='card-header'>"
                data += `${piloto.nombre} ${piloto.apellido}`
            data += "</div>"
            data += "<div class='card-body'>"
                data += `<img src='${piloto.foto}' width='200'/>`
            data += "</div>"
            data += "<div class='card-footer'>"
                data += `Equipo: ${piloto.equipos[0]}`
            data += "</div>"
        data += "</div>"
    })
    document.querySelector('#listaPilotos').innerHTML = data;
}
