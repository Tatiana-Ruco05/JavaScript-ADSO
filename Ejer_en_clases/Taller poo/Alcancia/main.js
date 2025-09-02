import Alcancia from "./Alcancia.js"

let miAlcancia = null

const crearAlcancia = () =>{
    miAlcancia = new Alcancia()
}

const actualizarDatosInterfaz = () =>{
    document.querySelector("#txtMonedas200").value=miAlcancia.moneda200
    document.querySelector("#txtMonedas500").value=miAlcancia.moneda500
    document.querySelector("#txtMonedas1000").value=miAlcancia.moneda1000
    document.querySelector("#txtTotalAlcancia").value=miAlcancia.calcularTotalMonedas()
}

document.querySelector("#img200").addEventListener("click",()=>{
    miAlcancia.agregarMoneda200()
    actualizarDatosInterfaz()
})

document.querySelector("#img500").addEventListener("click",()=>{
    miAlcancia.agregarMoneda500()
    actualizarDatosInterfaz()
})
document.querySelector("#img1000").addEventListener("click",()=>{
    miAlcancia.agregarMoneda1000()
    actualizarDatosInterfaz()
})

document.querySelector("#btnRomper").addEventListener("click", () => {
    crearAlcancia()
    actualizarDatosInterfaz()

    
    alert("¡Has roto la alcancía! Ahora está vacía.")
})


const inicializarAlcancia=()=>{
    crearAlcancia()
    actualizarDatosInterfaz()
}

inicializarAlcancia()
