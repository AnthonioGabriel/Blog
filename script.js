// ========================
// EFEITO DOS CARDS
// ========================

const cards = document.querySelectorAll(".card");


cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 20px rgba(255,0,0,.5)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});





// ========================
// SISTEMA DE LIKE
// ========================


const botoesLike = document.querySelectorAll(".btn-like");


botoesLike.forEach(botao => {


    const card = botao.closest(".card");

    const id = card.dataset.id;

    const contador = card.querySelector(".likes");



    let quantidade =
    Number(localStorage.getItem("likes-" + id)) || 0;



    contador.textContent =
    quantidade + " curtidas";



    // Verifica se já curtiu

    if(localStorage.getItem("curtiu-" + id)){


        botao.innerHTML = "❤️ Curtido";

        botao.classList.add("ativo");


    }



    botao.addEventListener("click", () => {


        // impede curtir novamente

        if(localStorage.getItem("curtiu-" + id)){

            return;

        }



        quantidade++;



        localStorage.setItem(
            "likes-" + id,
            quantidade
        );



        localStorage.setItem(
            "curtiu-" + id,
            "true"
        );



        contador.textContent =
        quantidade + " curtidas";



        botao.innerHTML =
        "❤️ Curtido";



        botao.classList.add("ativo");



    });



});








// ========================
// CONTEÚDO DAS NOTÍCIAS
// ========================


const noticias = {


    1: `

    <h2>🌍 Novo mapa</h2>

    <p>
    O Forza Horizon 6 apresenta um novo mundo aberto
    cheio de cidades, estradas, montanhas e locais
    para explorar.
    </p>

    <br>

    <p>
    Os jogadores poderão participar de corridas,
    desafios especiais e eventos espalhados pelo mapa.
    </p>

    `,



    2: `

    <h2>🚗 Novos carros</h2>

    <p>
    A nova edição traz diversos veículos,
    incluindo carros clássicos, esportivos e
    supercarros modernos.
    </p>

    <br>

    <p>
    Todos os carros podem receber melhorias,
    personalizações e ajustes de desempenho.
    </p>

    `,



    3: `

    <h2>🏁 Festival Horizon</h2>

    <p>
    O Festival Horizon reúne competidores em
    grandes eventos e campeonatos.
    </p>

    <br>

    <p>
    Complete desafios para desbloquear recompensas
    e aumentar sua coleção de veículos.
    </p>

    `


};







// ========================
// ABRIR NOTÍCIA
// ========================


const botoesLer =
document.querySelectorAll(".btn-ler");


const modal =
document.querySelector(".modal");


const conteudo =
document.querySelector(".conteudo-modal");



botoesLer.forEach(botao => {


    botao.addEventListener("click", () => {


        const id =
        botao.closest(".card").dataset.id;



        conteudo.innerHTML =
        noticias[id];



        modal.style.display =
        "flex";


    });


});






// ========================
// FECHAR MODAL
// ========================


const fechar =
document.querySelector(".fechar");



fechar.addEventListener("click", () => {


    modal.style.display =
    "none";


});





// Fechar clicando fora da caixa


modal.addEventListener("click", (evento) => {


    if(evento.target === modal){

        modal.style.display =
        "none";

    }


});