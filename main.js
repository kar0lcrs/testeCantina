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

        // Procura se esse produto já está no carrinho
        const itens = listaCarrinho.querySelectorAll(".item-carrinho");

        let itemExistente = null;

        itens.forEach(function(item){

            if(item.dataset.nome === nome){
                itemExistente = item;
            }

        });

        // Se o produto já existe
        if(itemExistente){

            const quantidade = itemExistente.querySelector(".quantidade");

            quantidade.textContent =
                Number(quantidade.textContent) + 1;

        }

        // Se o produto ainda não existe
        else{

            const item = document.createElement("div");

            item.classList.add("item-carrinho");

            item.dataset.nome = nome;
            item.dataset.preco = preco;

            item.innerHTML = `
                <div class="info-item">
                    <span>${nome}</span>
                    <small>R$${preco.toFixed(2).replace(".", ",")} cada</small>
                </div>

                <div class="controle-quantidade">
                    <button class="diminuir">−</button>

                    <span class="quantidade">1</span>

                    <button class="aumentar">+</button>
                </div>
            `;

            listaCarrinho.appendChild(item);

            const aumentar = item.querySelector(".aumentar");
            const diminuir = item.querySelector(".diminuir");
            const quantidade = item.querySelector(".quantidade");

            aumentar.addEventListener("click", function(){

                quantidade.textContent =
                    Number(quantidade.textContent) + 1;

                atualizarTotal();

            });

            diminuir.addEventListener("click", function(){

                let valor = Number(quantidade.textContent);

                valor = valor - 1;

                if(valor <= 0){

                    item.remove();

                }else{

                    quantidade.textContent = valor;

                }

                atualizarTotal();

            });

        }

        atualizarTotal();

    });

});


function atualizarTotal(){

    total = 0;

    const itens = listaCarrinho.querySelectorAll(".item-carrinho");

    itens.forEach(function(item){

        const preco = Number(item.dataset.preco);
        const quantidade = Number(
            item.querySelector(".quantidade").textContent
        );

        total += preco * quantidade;

    });

    textoTotal.textContent =
        `Total: R$${total.toFixed(2).replace(".", ",")}`;

}


/*Diminui o Menu ao rolar para baixo do banner*/
const menu = document.querySelector(".menu");
const banner = document.querySelector(".banner");
const tamanho_banner = banner.offsetHeight;

window.addEventListener("scroll", () => {
    if(window.scrollY > tamanho_banner - 100){

        menu.classList.add("pequeno");

    }else{

        menu.classList.remove("pequeno");

    }

});

/*Abre e fecha a lista do carrinho*/

const carrinho = document.querySelector(".carrinho");
const lateral = document.querySelector(".carrinho-lateral");
const fechar = document.querySelector(".fechar-carrinho");

carrinho.addEventListener("click", () => {
    lateral.classList.toggle("aberto");
});

fechar.addEventListener("click", () => {
    lateral.classList.remove("aberto");
});

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        lateral.classList.remove("aberto");

    }

});