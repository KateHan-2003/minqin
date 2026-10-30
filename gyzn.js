 function Carousel(containerId) {
    const container = document.getElementById(containerId);
    const slides = container.querySelector('.carousel-slides');
    const slideItems = container.querySelectorAll('.carousel-slide');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    const indicatorsContainer = container.querySelector('.carousel-indicators');
    
    let currentIndex = 0;
    const totalSlides = slideItems.length;
    
    function initIndicators() {
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    }
    
    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        updateCarousel();
    }
    
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    function init() {
        initIndicators();
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        setInterval(nextSlide, 3000);
    }
    init();
}
new Carousel('carousel1');
new Carousel('carousel2');