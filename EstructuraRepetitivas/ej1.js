/*mostrar en pantalla los multimos de 3 
entre dos numeros ingresados por teclado*/

let prompt = require('prompt-sync')()

const numero1 = prompt("ingrese número entero inferior")
const numero2 = prompt("ingrese número entero inferior")


    let mayor=0
    let menor=0
if (numero1>numero2){
    mayor=numero1
    menor=numero2
}else{
    menor=numero2
    mayor=numero1
}

for(let valor=menor;valor<=mayor;valor++){
    if(valor%3===0){
        console.log(valor)
    }
}