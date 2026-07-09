// Efeito dos cards
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



    // verifica se já curtiu

    if(localStorage.getItem("curtiu-" + id)){


        botao.innerHTML =
        "❤️ Curtido";


        botao.classList.add("ativo");


    }




    botao.addEventListener("click", () => {



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
    O novo mapa do Forza Horizon 6 traz um mundo aberto
    ainda maior, com cidades, estradas, montanhas e
    regiões completamente exploráveis.
    </p>


    <br>


    <p>
    Os jogadores poderão participar de corridas,
    eventos especiais e desafios espalhados pelo mapa.
    </p>


    `,




    2: `

    <h2>🚗 Novos carros</h2>


    <p>
    A nova geração traz diversos veículos,
    incluindo carros clássicos, esportivos e
    supermáquinas modernas.
    </p>


    <br>


    <p>
    Cada carro pode receber melhorias,
    pinturas personalizadas e ajustes de desempenho.
    </p>


    `,





    3: `

    <h2>🏁 Festival Horizon</h2>


    <p>
    O Festival Horizon reúne pilotos do mundo inteiro
    em desafios, campeonatos e eventos especiais.
    </p>


    <br>


    <p>
    Complete missões para desbloquear recompensas
    e aumentar sua coleção de carros.
    </p>


    `



};








// ========================
// MODAL DE NOTÍCIAS
// ========================


const modal =
document.querySelector(".modal");

const conteudo =
document.querySelector(".conteudo-modal");



const botoesLer =
document.querySelectorAll(".btn-ler");



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







// Fechar modal


const fechar =
document.querySelector(".fechar");



fechar.addEventListener("click", () => {


    modal.style.display =
    "none";


});






// fechar clicando fora


modal.addEventListener("click", (evento)=>{


    if(evento.target === modal){

        modal.style.display="none";

    }


});