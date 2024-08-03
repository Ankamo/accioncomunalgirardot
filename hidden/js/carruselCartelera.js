function moveSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelectorAll(".slide");
  const activeSlide = carousel.querySelector(".slide.active");
  let currentIndex = Array.from(slides).indexOf(activeSlide);

  // Quitar la clase 'active' de la diapositiva actual
  activeSlide.classList.remove("active");

  // Calcular el nuevo índice de la diapositiva activa
  currentIndex += direction;

  // Comprobar los límites del índice
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Mover al último slide
  } else if (currentIndex >= slides.length) {
    currentIndex = 0; // Mover al primer slide
  }

  // Añadir la clase 'active' a la nueva diapositiva
  slides[currentIndex].classList.add("active");

  // Mover el contenedor del carrusel para mostrar la diapositiva activa
  const offset = currentIndex * -100; // 100% del ancho de la diapositiva
  carousel.style.transform = `translateX(${offset}%)`;
}

// Asegurarse de que cada carrusel comience con la primera diapositiva activa
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel-inner");
  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".slide");
    if (slides.length > 0) {
      slides[0].classList.add("active");
    }
  });
});
