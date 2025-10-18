// Criar partículas animadas
const particlesBg = document.getElementById('particlesBg');
const particleCount = window.innerWidth < 768 ? 15 : 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesBg.appendChild(particle);
}

// Efeito parallax suave
let ticking = false;

window.addEventListener('mousemove', (e) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const cards = document.querySelectorAll('.floating-card');
            const orb = document.querySelector('.central-orb');

            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;

            cards.forEach((card, index) => {
                const speed = (index + 1) * 0.5;
                card.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });

            if (orb && window.innerWidth > 768) {
                orb.style.transform = `translate(calc(-50% + ${moveX * 2}px), calc(-50% + ${moveY * 2}px))`;
            }

            ticking = false;
        });

        ticking = true;
    }
});

// Animação de contagem nos stats
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Observer para iniciar animações
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach((stat, index) => {
                const text = stat.textContent;
                if (text.includes('+')) {
                    stat.dataset.suffix = '+';
                    animateValue(stat, 0, parseInt(text), 2000 + (index * 200));
                } else if (text.includes('%')) {
                    stat.dataset.suffix = '%';
                    animateValue(stat, 0, parseInt(text), 2000 + (index * 200));
                }
            });
        }
    });
});

observer.observe(document.querySelector('.hero-stats'));

// Efeito de clique na badge
document.querySelector('.hero-badge').addEventListener('click', function () {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = '';
    }, 10);
});