<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
// Gráfico de seguridad de contraseñas
const ctx1 = document.getElementById('passwordStrengthChart').getContext('2d');
new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Muy Seguras', 'Seguras', 'Débiles', 'Muy Débiles'],
        datasets: [{
            data: [45, 35, 15, 5],
            backgroundColor: [
                '#10b981',
                '#3b82f6',
                '#f59e0b',
                '#ef4444'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#a3a3a3',
                    usePointStyle: true,
                    padding: 20
                }
            }
        }
    }
});

// Gráfico de categorías
const ctx2 = document.getElementById('categoriesChart').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Redes Sociales', 'Email', 'Trabajo', 'Banca', 'Otros'],
        datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                '#dc2626',
                '#7c3aed',
                '#059669',
                '#ea580c',
                '#6366f1'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#a3a3a3',
                    usePointStyle: true,
                    padding: 15
                }
            }
        }
    }
});

// Efectos interactivos
document.addEventListener('DOMContentLoaded', function () {
    // Animación de contadores
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        const text = stat.textContent;
        if (/^\d+$/.test(text)) {
            const target = parseInt(text);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 30);
        }
    });

    // Toggle sidebar en móvil
    const createToggleButton = () => {
        if (window.innerWidth <= 768) {
            const button = document.createElement('button');
            button.innerHTML = '☰';
            button.style.cssText = `
                        position: fixed;
                        top: 20px;
                        left: 20px;
                        z-index: 1001;
                        background: var(--primary-red);
                        color: white;
                        border: none;
                        padding: 10px;
                        border-radius: 8px;
                        font-size: 18px;
                        cursor: pointer;
                    `;
            document.body.appendChild(button);

            button.addEventListener('click', () => {
                document.querySelector('.sidebar').classList.toggle('open');
            });
        }
    };

    createToggleButton();
    window.addEventListener('resize', () => {
        const existingButton = document.querySelector('button');
        if (existingButton) existingButton.remove();
        createToggleButton();
    });
});