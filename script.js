document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.querySelector(".no-btn");

    noBtn.addEventListener("mouseover", function() {
        // Déplace le bouton aléatoirement sur l'écran
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});