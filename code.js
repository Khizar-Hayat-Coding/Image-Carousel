let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    const dots = document.querySelectorAll('.dot');

    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === index) dot.className += ' active';
    });
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(() => {
    nextSlide();
}, 3000);

showSlide(index);
