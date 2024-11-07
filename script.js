let contador = document.querySelector(".contador");
const bt = document.querySelector("#bt");
const btDiminuir = document.querySelector("#btDiminuir");
const btReset = document.querySelector("#btReset");

let valorContador = 0;

bt.addEventListener("click", function() {
    
    valorContador++;

    contador.textContent = valorContador.toString().padStart(2,"0");
});

btDiminuir.addEventListener("click", function(){
    
    valorContador--;

    contador.textContent = valorContador.toString().padStart(2,"0");
} );

btReset.addEventListener("click", function(){

    valorContador = 0;

    contador.textContent = valorContador.toString().padStart(2,"0");
});
