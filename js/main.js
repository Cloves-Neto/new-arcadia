document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.getElementById('slidesContainer');
    const menuItems = document.querySelectorAll('.menu-item');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = 6;
    let currentSlide = 0;

    // Inicializar partículas
    initParticles('particles-hero', 30);
    initParticles('particles-sobre', 20);
    initParticles('particles-servicos', 25);
    initParticles('particles-cases', 20);
    initParticles('particles-depoimentos', 15);
    initParticles('particles-contato', 35);

    // Função para navegar para um slide específico
    function goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= totalSlides) return;

        currentSlide = slideIndex;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;

        // Atualizar menu e dots ativos
        updateActiveNavigation();
    }

    // Atualizar navegação ativa
    function updateActiveNavigation() {
        menuItems.forEach((item, index) => {
            if (index === currentSlide) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Event listeners para menu
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetIndex = parseInt(this.getAttribute('data-target'));
            goToSlide(targetIndex);
        });
    });

    // Event listeners para dots
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            const targetIndex = parseInt(this.getAttribute('data-target'));
            goToSlide(targetIndex);
        });
    });

    // Navegação por teclado
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        }
    });

    // Navegação por scroll horizontal (touch e mouse)
    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    slidesContainer.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startX = e.pageX - slidesContainer.offsetLeft;
        scrollLeft = currentSlide * window.innerWidth;
    });

    slidesContainer.addEventListener('mouseleave', () => {
        isScrolling = false;
    });

    slidesContainer.addEventListener('mouseup', () => {
        isScrolling = false;
    });

    slidesContainer.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - slidesContainer.offsetLeft;
        const walk = (x - startX) * 2;

        if (walk > 50 && currentSlide > 0) {
            goToSlide(currentSlide - 1);
            isScrolling = false;
        } else if (walk < -50 && currentSlide < totalSlides - 1) {
            goToSlide(currentSlide + 1);
            isScrolling = false;
        }
    });

    // Suporte para touch devices
    slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
    });

    slidesContainer.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX;
        const walk = (x - startX);

        if (walk > 50 && currentSlide > 0) {
            goToSlide(currentSlide - 1);
            isScrolling = false;
        } else if (walk < -50 && currentSlide < totalSlides - 1) {
            goToSlide(currentSlide + 1);
            isScrolling = false;
        }
    });

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
});
