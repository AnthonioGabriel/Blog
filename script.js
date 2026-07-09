// ========================
// DETALHES DOS CARROS
// ========================


const carros = {


ferrari:`

<h2>🏎️ Ferrari</h2>

<p>
<strong>Modelo destaque:</strong> Ferrari SF90 Stradale
</p>

<p>
A Ferrari SF90 Stradale é um dos carros mais avançados
da marca italiana. Combina motor V8 com tecnologia híbrida
para entregar desempenho extremo.
</p>

<br>

<p>
🏁 Categoria: Supercarro<br>
🔥 Potência: 986 cv<br>
⚡ 0-100 km/h: 2,5 segundos<br>
🌍 País: Itália
</p>

<br>

<p>
No Festival Horizon, a Ferrari é perfeita para corridas
de alta velocidade e pistas com longas retas.
</p>

`,



lamborghini:`

<h2>🏎️ Lamborghini</h2>

<p>
<strong>Modelo destaque:</strong> Lamborghini Revuelto
</p>

<p>
A Lamborghini Revuelto representa a nova geração da
marca, trazendo design agressivo e uma combinação de
motor V12 com tecnologia híbrida.
</p>

<br>

<p>
🏁 Categoria: Hipercarro<br>
🔥 Potência: 1001 cv<br>
⚡ 0-100 km/h: 2,5 segundos<br>
🌍 País: Itália
</p>

<br>

<p>
Ideal para jogadores que gostam de aceleração forte
e presença nas corridas.
</p>

`,



porsche:`

<h2>🏎️ Porsche</h2>

<p>
<strong>Modelo destaque:</strong> Porsche 911 GT3 RS
</p>

<p>
O Porsche 911 GT3 RS é conhecido pelo equilíbrio
perfeito entre velocidade e controle.
</p>

<br>

<p>
🏁 Categoria: Corrida<br>
🔥 Potência: 525 cv<br>
⚡ 0-100 km/h: 3,2 segundos<br>
🌍 País: Alemanha
</p>

<br>

<p>
Um carro feito para dominar curvas e pistas técnicas.
</p>

`,



nissan:`

<h2>🏎️ Nissan</h2>

<p>
<strong>Modelo destaque:</strong> Nissan GT-R R35
</p>

<p>
O Nissan GT-R é um dos carros japoneses mais famosos
do mundo, conhecido como "Godzilla" pela sua força
nas pistas.
</p>

<br>

<p>
🏁 Categoria: Esportivo<br>
🔥 Potência: 565 cv<br>
⚡ 0-100 km/h: 2,7 segundos<br>
🌍 País: Japão
</p>

<br>

<p>
Excelente escolha para drift, tunagem e corridas de rua.
</p>

`

};





// Abrir detalhes dos carros

const cardsCarros =
document.querySelectorAll(".carro");


const modalCarro =
document.querySelector(".modal-carro");


const conteudoCarro =
document.querySelector(".conteudo-carro");



cardsCarros.forEach(carro => {


    carro.addEventListener("click",()=>{


        const nome =
        carro.dataset.carro;


        conteudoCarro.innerHTML =
        carros[nome];


        modalCarro.style.display="flex";


    });


});



document.querySelector(".fechar-carro")
.addEventListener("click",()=>{


    modalCarro.style.display="none";


});