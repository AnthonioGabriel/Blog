// Mensagem ao carregar a página
window.addEventListener("load", () => {
    console.log("Bem-vindo ao Horizon Hub!");
});

// Efeito nos botões "Leia mais"
const botoes = document.querySelectorAll(".card button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Em breve teremos mais notícias sobre Forza Horizon 6!");
    });
});

// Animação ao aparecer na tela
const cards = document.querySelectorAll(".card");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";
    observador.observe(card);
});