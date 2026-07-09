// ========================
// EFEITO DOS CARDS
// ========================

const cards = document.querySelectorAll(".card");


cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 20px rgba(255,0,0,.5)";
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



    if(localStorage.getItem("curtiu-" + id)){

        botao.innerHTML = "❤️ Curtido";

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
// NOTÍCIAS
// ========================


const noticias = {


    1: `
    <h2>🌍 Novo mapa</h2>

    <p>
    O novo mapa do Horizon traz um mundo aberto
    gigantesco com cidades, estradas, montanhas
    e novos lugares para explorar.
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
    A temporada apresenta novos veículos,
    supercarros e clássicos que podem ser
    personalizados.
    </p>

    <br>

    <p>
    Cada carro possui características diferentes
    para velocidade, controle e aceleração.
    </p>
    `,



    3: `
    <h2>🏁 Festival Horizon</h2>

    <p>
    O Festival Horizon reúne pilotos em eventos,
    campeonatos e desafios.
    </p>

    <br>

    <p>
    Complete missões e desbloqueie recompensas
    exclusivas.
    </p>
    `


};




const botoesLer =
document.querySelectorAll(".btn-ler");


const modal =
document.querySelector(".modal");


const conteudoModal =
document.querySelector(".conteudo-modal");



botoesLer.forEach(botao => {


    botao.addEventListener("click", () => {


        const id =
        botao.closest(".card").dataset.id;



        conteudoModal.innerHTML =
        noticias[id];



        modal.style.display = "flex";


    });


});





const fecharModal =
document.querySelector(".fechar");



if(fecharModal){

    fecharModal.addEventListener("click",()=>{

        modal.style.display="none";

    });

}




// ========================
// CARROS EM DESTAQUE
// ========================


const carros = {


    ferrari:`

    <h2>🏎️ Ferrari</h2>

    <p>
    Modelo: Ferrari SF90 Stradale
    </p>

    <p>
    Uma máquina italiana híbrida focada em
    velocidade extrema e desempenho.
    </p>

    <br>

    <p>
    🔥 Potência: 986 cv<br>
    ⚡ 0-100 km/h: 2,5 segundos<br>
    🌍 País: Itália
    </p>

    `,



    lamborghini:`

    <h2>🏎️ Lamborghini</h2>

    <p>
    Modelo: Lamborghini Revuelto
    </p>

    <p>
    Um supercarro com motor V12 e design
    agressivo.
    </p>

    <br>

    <p>
    🔥 Potência: 1001 cv<br>
    ⚡ 0-100 km/h: 2,5 segundos<br>
    🌍 País: Itália
    </p>

    `,



    porsche:`

    <h2>🏎️ Porsche</h2>

    <p>
    Modelo: Porsche 911 GT3 RS
    </p>

    <p>
    Conhecido pelo equilíbrio perfeito entre
    velocidade e controle.
    </p>

    <br>

    <p>
    🔥 Potência: 525 cv<br>
    ⚡ 0-100 km/h: 3,2 segundos<br>
    🌍 País: Alemanha
    </p>

    `,



    nissan:`

    <h2>🏎️ Nissan</h2>

    <p>
    Modelo: Nissan GT-R R35
    </p>

    <p>
    O famoso Godzilla japonês, perfeito para
    tunagem e corridas de rua.
    </p>

    <br>

    <p>
    🔥 Potência: 565 cv<br>
    ⚡ 0-100 km/h: 2,7 segundos<br>
    🌍 País: Japão
    </p>

    `


};





const carrosCards =
document.querySelectorAll(".carro");


const modalCarro =
document.querySelector(".modal-carro");


const conteudoCarro =
document.querySelector(".conteudo-carro");



carrosCards.forEach(carro => {


    carro.addEventListener("click",()=>{


        const nome =
        carro.dataset.carro;



        conteudoCarro.innerHTML =
        carros[nome];



        modalCarro.style.display =
        "flex";


    });


});





const fecharCarro =
document.querySelector(".fechar-carro");



if(fecharCarro){

    fecharCarro.addEventListener("click",()=>{

        modalCarro.style.display="none";

    });

}






// Fechar clicando fora das janelas

window.addEventListener("click",(evento)=>{


    if(evento.target === modal){

        modal.style.display="none";

    }



    if(evento.target === modalCarro){

        modalCarro.style.display="none";

    }


});