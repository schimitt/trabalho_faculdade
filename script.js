// Efeito de fade-in ao rolar a página
document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

// Configuração inicial
document.querySelectorAll(".fade-in").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
});
