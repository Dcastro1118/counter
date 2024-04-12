var contador = document.querySelector(".numero")
var botonIncrease = document.querySelector(".increase");
var botonDecrease = document.querySelector(".decrease");
var botonReset = document.querySelector(".reset");
var incrementador = 0;

botonIncrease.addEventListener("click", increase);
botonDecrease.addEventListener("click", decrease);
botonReset.addEventListener("click", reset);



function increase(){
    incrementador++;
    contador.textContent = incrementador;
    contador.style.fontSize = "150px"
    contador.style.margin = "50px auto"
} 
function decrease(){

    incrementador--;
    contador.textContent = incrementador;
    contador.style.fontSize = "150px"
    contador.style.margin = "50px auto"
} 

function reset(){

    incrementador = 0;
    contador.textContent = incrementador;
    contador.style.fontSize = "150px"
    contador.style.margin = "50px auto"
} 

