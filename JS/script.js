// para que las tarjetas de sercios.html puedan redirigir a contactos.html

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (card.dataset.contact) {
            card.addEventListener('click', () => {
                window.location.href = 'contactanos.html';
            });
        }
    });
});

let currentVideoIndex = 0;

function showVideoSlides(index) {
    const slides = document.querySelectorAll(".video-slide");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentVideoIndex = 0;
    } else if (index < 0) {
        currentVideoIndex = totalSlides - 1;
    } else {
        currentVideoIndex = index;
    }

    document.querySelector('.video-slider-wrapper').style.transform = `translateX(-${currentVideoIndex * 100}%)`;
}

function plusVideoSlides(step) {
    showVideoSlides(currentVideoIndex + step);
}

showVideoSlides(currentVideoIndex);


// JavaScript para controlar el slider
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Cambiar imagen cada 3 segundos
}

