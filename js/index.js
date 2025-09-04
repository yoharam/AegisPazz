
// Efecto de escritura para el tagline
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const button = form.querySelector('.btn-primary');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        button.style.background = 'linear-gradient(135deg, #059669, #047857)';
        button.innerHTML = 'Accediendo... <span class="loading-dots">•••</span>';

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    });

    // Efecto parallax sutil
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body::before');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
});