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

        card.style.boxShadow =
        "none";

    });

});




// ========================
// SISTEMA DE LIKE
// ========================

const botoesLike =
document.querySelectorAll(".btn-like");


botoesLike.forEach(botao => {


    const card =
    botao.closest(".card");


    const id =
    card.dataset.id;


    const contador =
    card.querySelector(".likes");



    let quantidade =
    Number(localStorage.getItem("likes-"+id)) || 0;



    contador.textContent =
    quantidade + " curtidas";



    if(localStorage.getItem("curtiu-"+id)){


        botao.innerHTML =
        "❤️ Curtido";


        botao.classList.add("ativo");

    }





    botao.addEventListener("click",()=>{


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
        quantidade + " curtidas";



        botao.innerHTML =
        "❤️ Curtido";


        botao.classList.add("ativo");


    });



});






// ========================
// NOTÍCIAS COMPLETAS
// ========================


const noticias = {


1:`

<h2>🌍 Novo mapa</h2>


<p>
O Forza Horizon 6 apresenta um novo mundo aberto
feito para exploração, velocidade e aventura.
</p>


<br>


<p>
O mapa possui grandes cidades, estradas,
montanhas e áreas especiais para testar
todos os tipos de veículos.
</p>


<br>


<h3>🏔️ Exploração livre</h3>


<p>
Os jogadores podem descobrir novos lugares,
encontrar desafios escondidos e participar
de eventos espalhados pelo mapa.
</p>


<br>


<h3>🏁 Novos eventos</h3>


<p>
Corridas de rua, desafios de velocidade
e competições especiais fazem parte da nova
temporada Horizon.
</p>


`,





2:`

<h2>🚗 Novos carros</h2>


<p>
A nova temporada traz uma coleção de carros
lendários, supercarros modernos e veículos
preparados para competição.
</p>


<br>


<h3>🔧 Personalização</h3>


<p>
Cada carro pode receber novas pinturas,
melhorias de motor, ajustes de suspensão
e modificações de desempenho.
</p>


<br>


<h3>⚡ Desempenho</h3>


<p>
Os veículos possuem diferenças de aceleração,
velocidade máxima e controle, permitindo que
cada jogador escolha seu estilo de corrida.
</p>


<br>


<h3>🏎️ Colecione</h3>


<p>
Aumente sua garagem desbloqueando carros
exclusivos durante os eventos da temporada.
</p>


`,





3:`

<h2>🏁 Festival Horizon</h2>


<p>
O Festival Horizon é o centro das maiores
competições de corrida do jogo.
</p>


<br>


<h3>🏆 Campeonatos</h3>


<p>
Participe de torneios contra outros pilotos,
supere desafios e conquiste posições melhores.
</p>


<br>


<h3>🎁 Recompensas</h3>


<p>
Complete missões para liberar novos carros,
itens exclusivos e conteúdos especiais.
</p>


<br>


<h3>🔥 Evolução</h3>


<p>
Quanto mais você participa dos eventos,
mais sua coleção e sua reputação aumentam.
</p>


`

};





const modal =
document.querySelector(".modal");


const conteudoModal =
document.querySelector(".conteudo-modal");



document.querySelectorAll(".btn-ler")
.forEach(botao=>{


    botao.addEventListener("click",()=>{


        const id =
        botao.closest(".card").dataset.id;



        conteudoModal.innerHTML =
        noticias[id];



        modal.style.display =
        "flex";


    });


});



const fechar =
document.querySelector(".fechar");


if(fechar){

fechar.onclick=()=>{

modal.style.display="none";

};

}
// ========================
// CARROS EM DESTAQUE
// ========================


const carros = {


ferrari:`

<h2>🏎️ Ferrari SF90 Stradale</h2>


<img class="img-carro"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2020_Ferrari_SF90_Stradale.jpg/800px-2020_Ferrari_SF90_Stradale.jpg">


<p>
Um dos carros mais avançados da Ferrari.
Seu sistema híbrido combina motor a combustão
com motores elétricos para entregar desempenho extremo.
</p>


<br>


<div class="status">

🔥 Potência: 986 cv<br>
⚡ 0-100 km/h: 2,5 segundos<br>
🏎️ Velocidade máxima: 340 km/h<br>
🎯 Controle: 9/10<br>
🌍 País: Itália

</div>

`,





lamborghini:`

<h2>🏎️ Lamborghini Revuelto</h2>


<img class="img-carro"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lamborghini_Revuelto_IMG_01.jpg/800px-Lamborghini_Revuelto_IMG_01.jpg">


<p>
O novo V12 híbrido da Lamborghini mistura
força bruta, tecnologia e um design agressivo.
</p>


<br>


<div class="status">

🔥 Potência: 1001 cv<br>
⚡ 0-100 km/h: 2,5 segundos<br>
🏎️ Velocidade máxima: 350 km/h<br>
🎯 Controle: 8/10<br>
🌍 País: Itália

</div>

`,





porsche:`

<h2>🏎️ Porsche 911 GT3 RS</h2>


<img class="img-carro"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Porsche_911_GT3_RS_992.jpg/800px-Porsche_911_GT3_RS_992.jpg">


<p>
Criado para pistas, o Porsche 911 GT3 RS
é conhecido pelo equilíbrio perfeito entre
velocidade e controle.
</p>


<br>


<div class="status">

🔥 Potência: 525 cv<br>
⚡ 0-100 km/h: 3,2 segundos<br>
🏎️ Velocidade máxima: 296 km/h<br>
🎯 Controle: 10/10<br>
🌍 País: Alemanha

</div>

`,





nissan:`

<h2>🏎️ Nissan GT-R R35</h2>


<img class="img-carro"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nissan_GT-R_R35.jpg/800px-Nissan_GT-R_R35.jpg">


<p>
Conhecido como Godzilla, o Nissan GT-R
é famoso pela sua potência e capacidade
de receber modificações.
</p>


<br>


<div class="status">

🔥 Potência: 565 cv<br>
⚡ 0-100 km/h: 2,7 segundos<br>
🏎️ Velocidade máxima: 315 km/h<br>
🎯 Controle: 9/10<br>
🌍 País: Japão

</div>

`

};







const modalCarro =
document.querySelector(".modal-carro");


const conteudoCarro =
document.querySelector(".conteudo-carro");





document.querySelectorAll(".carro")
.forEach(carro=>{


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


    fecharCarro.onclick=()=>{


        modalCarro.style.display="none";


    };


}







// ========================
// FECHAR MODAIS
// ========================


window.onclick=(evento)=>{


    if(evento.target === modal){

        modal.style.display="none";

    }



    if(evento.target === modalCarro){

        modalCarro.style.display="none";

    }


};