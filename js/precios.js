document.addEventListener('DOMContentLoaded', function() {
    // Toggle entre planes mensuales/anuales
    const planToggle = document.getElementById('plan-toggle');
    if (planToggle) {
        planToggle.addEventListener('change', function() {
            const monthlyPrices = document.querySelectorAll('.price.monthly');
            const yearlyPrices = document.querySelectorAll('.price.yearly');
            
            monthlyPrices.forEach(price => {
                price.classList.toggle('hidden');
            });
            
            yearlyPrices.forEach(price => {
                price.classList.toggle('hidden');
            });
        });
    }

    // Efecto hover para tarjetas de precios
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});