//localStorage.setItem("nombre", "tatiana");
//localStorage.setItem("correo", "sena.tatiana05@gmail");

//console.log(localStorage.getItem("nombre"));

//localStorage.especialidad = "desarrollador web";
//console.log(localStorage.especialidad);

//for (let i = 0; i < localStorage.length; i++) {
//    const key = localStorage.key(i);
//    const value = localStorage.getItem(key);
//    console.log(${key}: ${value});

//}
const btncontador = document.querySelector("#btncontador");

if (localStorage.getItem("contador")===null) {
    localStorage.setItem("contador", 0);
}else{
    btncontador.textContent = localStorage.getItem("contador");
}

btncontador.addEventListener("click", () => {
    let conta = parseInt(localStorage.getItem("contador"));
    conta++;
    localStorage.setItem("contador", conta);
    btncontador.textContent = localStorage.getItem("contador");
})

localStorage.aprendiz = JSON.stringify({"Nombre": "Maria", 
    "ficha":3064975,
    "programa": "adso"});
let apr = JSON.parse(localStorage.aprendiz)
console.log(localStorage.aprendiz)
console.log(apr)