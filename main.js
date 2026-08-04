/*---Animação dos Elementos---*/
const elementos = document.querySelectorAll(".animar");

const observador = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add("apareceu");
        }
    });
});

elementos.forEach(function(elemento){
    observador.observe(elemento);
});


/*---Adiciona itens ao carrinho---*/
const botoes = document.querySelectorAll(".adicionar");
const listaCarrinho = document.querySelector("#lista-carrinho");
const textoTotal = document.querySelector("#total");
let total = 0;

botoes.forEach(function(botao){

    botao.addEventListener("click", function(){

        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);

        total += preco;
        textoTotal.textContent =
            `Total: R$${total.toFixed(2).replace(".", ",")}`;

        const item = document.createElement("div");

        item.innerHTML = `
            <span>${nome} - R$${preco.toFixed(2).replace(".", ",")}</span>
            <button class="remover">X</button>
        `;

        listaCarrinho.appendChild(item);

        const remover = item.querySelector(".remover");

        remover.addEventListener("click", function(){

            total -= preco;

            textoTotal.textContent =
                `Total: R$${total.toFixed(2).replace(".", ",")}`;

            item.remove();

        });

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

/*Abre a lista do carrinho*/

const carrinho = document.querySelector(".carrinho");
const lateral = document.querySelector(".carrinho-lateral");

carrinho.addEventListener("click", () => {
    lateral.classList.toggle("aberto");
});