const botoes = document.querySelectorAll(".adicionar");
const listaCarrinho = document.querySelector("#lista-carrinho");

botoes.forEach(function(botao){
    botao.addEventListener("click", function(){

        const nome = botao.dataset.nome;
        const preco = botao.dataset.preco;
        const item = document.createElement("p");

        item.textContent = nome + " - R$" + preco
        listaCarrinho.appendChild(item)
    });
});


/*Diminui o Menu ao rolar para baixo do banner*/
const menu = document.querySelector(".menu");
const banner = document.querySelector(".banner");
const tamanho_banner = banner.offsetHeight;

window.addEventListener("scroll", function(){
    if(window.scrollY > tamanho_banner - 100){

        menu.classList.add("pequeno");

    }else{

        menu.classList.remove("pequeno");

    }

});