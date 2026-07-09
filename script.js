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


    botao.addEventListener("click",()=>{

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

1:`
<h2>🌍 Novo mapa</h2>

<p>
O novo mapa do Horizon traz um mundo aberto enorme,
com cidades, estradas e novos desafios.
</p>
`,

2:`
<h2>🚗 Novos carros</h2>

<p>
A temporada apresenta novos veículos,
supercarros e clássicos.
</p>
`,

3:`
<h2>🏁 Festival Horizon</h2>

<p>
Grandes eventos, corridas e campeonatos esperam
pelos melhores pilotos.
</p>
`

};



const modal = document.querySelector(".modal");
const conteudoModal = document.querySelector(".conteudo-modal");


document.querySelectorAll(".btn-ler").forEach(botao=>{

    botao.addEventListener("click",()=>{

        const id =
        botao.closest(".card").dataset.id;


        conteudoModal.innerHTML =
        noticias[id];


        modal.style.display="flex";

    });

});



document.querySelector(".fechar").onclick=()=>{

    modal.style.display="none";

};







// ========================
// CARROS
// ========================


const carros = {


ferrari:`

<h2>🏎️ Ferrari SF90 Stradale</h2>

<img class="img-carro"
src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900">


<p>
Supercarro italiano híbrido com tecnologia
inspirada na Fórmula 1.
</p>


<div class="status">

🔥 Potência: 986 cv<br>
⚡ Velocidade: 10/10<br>
🎯 Controle: 9/10<br>
🌍 Itália

</div>

`,



lamborghini:`

<h2>🏎️ Lamborghini</h2>

<img class="img-carro"
src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=900">


<p>
Design agressivo e desempenho extremo.
</p>


<div class="status">

🔥 Potência: 1001 cv<br>
⚡ Velocidade: 10/10<br>
🎯 Controle: 8/10<br>
🌍 Itália

</div>

`,



porsche:`

<h2>🏎️ Porsche 911 GT3 RS</h2>

<img class="img-carro"
src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900">


<p>
Um dos melhores carros para pistas,
com equilíbrio perfeito.
</p>


<div class="status">

🔥 Potência: 525 cv<br>
⚡ Velocidade: 9/10<br>
🎯 Controle: 10/10<br>
🌍 Alemanha

</div>

`,



nissan:`

<h2>🏎️ Nissan GT-R</h2>

<img class="img-carro"
src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=900">


<p>
O famoso Godzilla japonês,
perfeito para tunagem.
</p>


<div class="status">

🔥 Potência: 565 cv<br>
⚡ Velocidade: 9/10<br>
🎯 Controle: 9/10<br>
🌍 Japão

</div>

`

};






const modalCarro =
document.querySelector(".modal-carro");


const conteudoCarro =
document.querySelector(".conteudo-carro");



document.querySelectorAll(".carro").forEach(carro=>{


    carro.addEventListener("click",()=>{


        const nome =
        carro.dataset.carro;


        conteudoCarro.innerHTML =
        carros[nome];


        modalCarro.style.display="flex";


    });


});





document.querySelector(".fechar-carro").onclick=()=>{

    modalCarro.style.display="none";

};





window.onclick=(evento)=>{


if(evento.target === modal){

modal.style.display="none";

}


if(evento.target === modalCarro){

modalCarro.style.display="none";

}


};