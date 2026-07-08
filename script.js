const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 20px rgba(255,0,0,.5)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});