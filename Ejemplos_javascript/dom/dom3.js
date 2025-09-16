 const divAgregarTexto = document.querySelector("#texto");
divAgregarTexto.textContent = "Texto Agregado desde Javascript";
divAgregarTexto.style.backgroundColor = "#44C7FF";


 // consultar todos los elementos de etiqueta li
 const lipaises=document.querySelectorAll("li")
 console.log(lipaises)

 lipaises.forEach(pais => {
    alert(pais.textContent)
 
 });

 //agregar un pais
 const nuevoLi = document.createElement("li")
 nuevoLi.textContent="Bolivia"

const ulpaises = document.querySelector("ul")
// agregar un li
 ulpaises.appendChild(nuevoLi)
 ulpaises,ap

/** innerHTML
 *reemplaza todo el contenido HTML interior del elemento objetivo. 
 *Si antes tenía otras etiquetas o nodos, se pierden y quedan solamente los nuevos.
  */ 
