document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    // Chart.js (graphique des projets)
    const ctx = document.getElementById('projectChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Python', 'R', 'SQL', 'Power BI/Query', 'HTML/CSS'],
                datasets: [{
                    label: 'Nombre de projets',
                    data: [20, 4, 8, 10, 2],
                    backgroundColor: ['#FFD300', '#2196F3', '#FF9800', '#9C27B0', '#00BCD4'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: {
                        display: true,
                        text: 'Répartition de mes projets par technologie'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
