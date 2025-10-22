document.addEventListener('DOMContentLoaded', function () {
    // Inicializar partículas
    initParticles('particles-hero', 30);
    initParticles('particles-sobre', 20);
    initParticles('particles-servicos', 25);
    initParticles('particles-cases', 20);
    initParticles('particles-depoimentos', 15);
    initParticles('particles-contato', 35);

    // Função para inicializar partículas
    function initParticles(containerId, count) {
        const container = document.getElementById(containerId);
        if (!container) return;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            particle.style.opacity = Math.random() * 0.5 + 0.1;

            const duration = Math.random() * 20 + 10;
            particle.style.animationDuration = `${duration}s`;

            particle.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(particle);
        }
    }

    // --- Header Menu Toggle Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-list a'); // Select all nav links

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            console.log('Menu toggle clicked');
            mainNav.classList.toggle('active');
        });

        // Close menu when a nav link is clicked (for mobile UX)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Nav link clicked');
                mainNav.classList.remove('active');
            });
        });
    }
});