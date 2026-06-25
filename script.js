const dadosBlog = {
    titulo: "Forza Horizon 6",
    subtitulo:
        "Tudo sobre o próximo capítulo da franquia de corrida em mundo aberto da Xbox.",

    introducao:
        "Forza Horizon 6 é um dos jogos de corrida mais aguardados pelos fãs da franquia. A expectativa é que o novo título apresente gráficos ainda mais impressionantes, novos carros, eventos inéditos e um mapa gigantesco para exploração.",

    sobre:
        "Seguindo a tradição da série Horizon, o jogo deve combinar corridas, exploração em mundo aberto, personalização de veículos e eventos sazonais em um ambiente vibrante e cheio de atividades.",

    destaques: [
        {
            titulo: "Mapa Maior",
            descricao:
                "Expectativa de um dos maiores mapas já criados na franquia."
        },
        {
            titulo: "Clima Dinâmico",
            descricao:
                "Mudanças climáticas em tempo real que afetam a jogabilidade."
        },
        {
            titulo: "Novos Veículos",
            descricao:
                "Centenas de carros esportivos, clássicos e supermáquinas."
        },
        {
            titulo: "Modo Online Aprimorado",
            descricao:
                "Mais eventos colaborativos e competitivos para os jogadores."
        }
    ],

    gameplay: [
        {
            titulo: "Exploração Livre",
            descricao:
                "Dirija por cidades, rodovias, montanhas e paisagens incríveis."
        },
        {
            titulo: "Festival Horizon",
            descricao:
                "Participe de desafios, campeonatos e eventos especiais."
        },
        {
            titulo: "Personalização",
            descricao:
                "Modifique visualmente e mecanicamente seus veículos."
        }
    ],

    positivos: [
        "Gráficos de última geração",
        "Grande variedade de carros",
        "Mundo aberto expansivo",
        "Experiência online aprimorada"
    ],

    negativos: [
        "Poucas informações oficiais até o momento",
        "Possível exigência de hardware mais potente"
    ],

    valeAPena:
        "Se você gosta de jogos de corrida arcade com elementos de simulação, exploração e liberdade, Forza Horizon 6 tem tudo para ser um dos maiores lançamentos da franquia."
};

// Cabeçalho
document.getElementById("titulo-blog").textContent = dadosBlog.titulo;
document.getElementById("subtitulo-blog").textContent = dadosBlog.subtitulo;

// Textos principais
document.getElementById("introducao").textContent = dadosBlog.introducao;
document.getElementById("sobre-jogo").textContent = dadosBlog.sobre;

document.getElementById("graficos").textContent =
    "A expectativa é de gráficos ainda mais realistas, iluminação avançada, efeitos climáticos impressionantes e sons de motores extremamente detalhados.";

document.getElementById("vale-a-pena").textContent =
    dadosBlog.valeAPena;

// Destaques
const areaDestaques = document.getElementById("destaques");

dadosBlog.destaques.forEach(item => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
    `;

    areaDestaques.appendChild(card);
});

// Gameplay
const areaGameplay = document.getElementById("gameplay");

dadosBlog.gameplay.forEach(item => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
    `;

    areaGameplay.appendChild(card);
});

// Positivos
const listaPositivos = document.getElementById("positivos");

dadosBlog.positivos.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listaPositivos.appendChild(li);
});

// Negativos
const listaNegativos = document.getElementById("negativos");

dadosBlog.negativos.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listaNegativos.appendChild(li);
});
