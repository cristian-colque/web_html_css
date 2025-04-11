document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de categorías
    const filterButtons = document.querySelectorAll('.filter-buttons input[type="radio"]');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('change', function() {
                const selectedCategory = this.value;
                const blogCards = document.querySelectorAll('.blog-card');
                
                blogCards.forEach(card => {
                    if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Scroll reveal para artículos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.5s forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        observer.observe(card);
    });

    // Efecto hover para tarjetas de blog
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});