let currentSlide = 0;

function moveCarousel(direction) {
    const carouselSlide = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    // Muda o slide atual
    currentSlide += direction;

    // Limites do carrossel (volta para o início ou fim)
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Define o slide atual como "ativo"
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Move o carrossel para a imagem atual com efeito de transição 3D
    const slideWidth = slides[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-slideWidth * currentSlide}px) rotateY(0deg)`;
}
