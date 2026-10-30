document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let intervalId;
    
    function updateCarousel() {
        const carouselSlides = document.querySelector('.carousel-slides');
        carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }
    function startAutoPlay() {
        intervalId = setInterval(nextSlide, 3000);
    }
    function stopAutoPlay() {
        clearInterval(intervalId);
    }
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-slide-to'));
            updateCarousel();
            stopAutoPlay();
            startAutoPlay();
        });
    });
    
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    updateCarousel();
    startAutoPlay();
});