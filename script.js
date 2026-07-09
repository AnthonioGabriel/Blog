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
// LIKE
// ========================

const botoesLike = document.querySelectorAll(".btn-like");


botoesLike.forEach(botao => {

    const card = botao.closest(".card");

    const id = card.dataset.id;

    const contador = card.querySelector(".likes");


    let quantidade =
    Number(localStorage.getItem("likes-"+id)) || 0;


    contador.textContent =
    quantidade+" curtidas";


    if(localStorage.getItem("curtiu-"+id)){

        botao.innerHTML="❤️ Curtido";
        botao.classList.add("ativo");

    }



    botao.onclick=()=>{


        if(localStorage.getItem("curtiu-"+id)){
            return;
        }


        quantidade++;


        localStorage.setItem(
            "likes-"+id,
            quantidade
        );


        localStorage.setItem(
            "curtiu-"+id,
            "true"
        );


        contador.textContent =
        quantidade+" curtidas";


        botao.innerHTML="❤️ Curtido";

        botao.classList.add("ativo");


    };


});








// ========================
// NOTÍCIAS
// ========================


const noticias={


1:`
<h2>🌍 Novo mapa</h2>

<p>
O novo mapa do Forza Horizon traz novas cidades,
estradas, montanhas e desafios.
</p>
`,



2:`
<h2>🚗 Novos carros</h2>

<p>
A temporada adiciona novos veículos,
melhorias e carros especiais.
</p>
`,



3:`
<h2>🏁 Festival Horizon</h2>

<p>
Participe de corridas, campeonatos e eventos
para ganhar recompensas.
</p>

`

};




const modal=document.querySelector(".modal");

const conteudoModal=document.querySelector(".conteudo-modal");


document.querySelectorAll(".btn-ler").forEach(botao=>{


botao.onclick=()=>{


let id =
botao.closest(".card").dataset.id;


conteudoModal.innerHTML =
noticias[id];


modal.style.display="flex";


};


});



document.querySelector(".fechar").onclick=()=>{

modal.style.display="none";

};








// ========================
// CARROS
// ========================


const carros={


ferrari:`

<h2>🏎️ Ferrari SF90 Stradale</h2>

<img class="img-carro"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2020_Ferrari_SF90_Stradale.jpg/800px-2020_Ferrari_SF90_Stradale.jpg">


<p>
Superesportivo italiano híbrido.
</p>


<div class="status">

🔥 Potência: 986 cv<br>
⚡ Velocidade: 10/10<br>
🎯 Controle: 9/10<br>
🌍 Itália

</div>

`,




lamborghini:`

<h2>🏎️ Lamborghini Revuelto</h2>

<img class="img-carro"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lamborghini_Revuelto_IMG_01.jpg/800px-Lamborghini_Revuelto_IMG_01.jpg">


<p>
V12 híbrido com desempenho extremo.
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
src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Porsche_911_GT3_RS_992.jpg/800px-Porsche_911_GT3_RS_992.jpg">


<p>
Carro focado em pista,
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

<h2>🏎️ Nissan GT-R R35</h2>


<img class="img-carro"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nissan_GT-R_R35.jpg/800px-Nissan_GT-R_R35.jpg">


<p>
O famoso Godzilla japonês.
</p>


<div class="status">

🔥 Potência: 565 cv<br>
⚡ Velocidade: 9/10<br>
🎯 Controle: 9/10<br>
🌍 Japão

</div>

`

};







const modalCarro=document.querySelector(".modal-carro");

const conteudoCarro=document.querySelector(".conteudo-carro");



document.querySelectorAll(".carro").forEach(carro=>{


carro.onclick=()=>{


let nome =
carro.dataset.carro;


conteudoCarro.innerHTML =
carros[nome];


modalCarro.style.display="flex";


};


});




document.querySelector(".fechar-carro").onclick=()=>{

modalCarro.style.display="none";

};




window.onclick=(e)=>{


if(e.target==modal){

modal.style.display="none";

}


if(e.target==modalCarro){

modalCarro.style.display="none";

}


};