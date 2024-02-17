
const btnavancar = document.getElementById("btn-avancar");
const btnvoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function escondercartaoselecionado(){
    const cartaselecionada = document.querySelector(".selecionado");
    cartaselecionada.classList.remove('selecionado');
}

function mostrarcartao(indicecartao){
    cartoes[indicecartao].classList.add('selecionado');
}

btnavancar.addEventListener("click",function(){

    if(cartaoAtual === cartoes.length -1) {cartaoAtual = -1};

    escondercartaoselecionado()

    cartaoAtual++;
    mostrarcartao(cartaoAtual);
});




btnvoltar.addEventListener("click",function(){

    if(cartaoAtual === 0) {cartaoAtual = cartoes.length};

    escondercartaoselecionado();

    cartaoAtual--;
    mostrarcartao(cartaoAtual);


})