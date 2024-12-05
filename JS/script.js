// para que las tarjetas de sercios.html puedan redirigir a contactos.html
document.addEventListener('DOMContentLoaded', () => {
    // Control de tarjetas para redirigir
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.dataset.contact) {
            card.addEventListener('click', () => {
                window.location.href = 'contactanos.html';
            });
        }
    });

   // Control del slider de videos
   const videoWrapper = document.querySelector('.video-slider-wrapper');
   const videoSlides = document.querySelectorAll('.video-slide');

   if (videoWrapper && videoSlides.length > 0) {
       let currentVideoIndex = 0;

       function showVideoSlides(index) {
           const totalSlides = videoSlides.length;

           if (index >= totalSlides) {
               currentVideoIndex = 0;
           } else if (index < 0) {
               currentVideoIndex = totalSlides - 1;
           } else {
               currentVideoIndex = index;
           }

           videoWrapper.style.transform = `translateX(-${currentVideoIndex * 100}%)`;
       }

       window.plusVideoSlides = function(step) {
        showVideoSlides(currentVideoIndex + step);
    };
    

       showVideoSlides(currentVideoIndex); // Inicializar slider
   } else {
       console.warn('No se encontraron elementos para el slider de videos.');
   }


    // Slider de imágenes
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let slideIndex = 0;

        function showSlides() {
            slides.forEach(slide => slide.style.display = 'none');

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(showSlides, 3000); // Cambiar cada 3 segundos
        }

        showSlides();
    } else {
        console.warn('No se encontraron elementos para el slider de imágenes.');
    }

    console.log('JavaScript cargado correctamente.');
});
