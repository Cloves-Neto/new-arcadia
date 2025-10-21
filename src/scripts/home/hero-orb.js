document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero');
    const orb = document.querySelector('.hero-orb');

    if (heroSection && orb) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) / (rect.width / 2) * -30; // -30 to 30
            const moveY = (y - rect.height / 2) / (rect.height / 2) * -30; // -30 to 30

            orb.style.setProperty('--orb-x', `${moveX}px`);
            orb.style.setProperty('--orb-y', `${moveY}px`);
        });
    } else {
        console.log('Hero section or orb not found for interaction.');
    }
});
