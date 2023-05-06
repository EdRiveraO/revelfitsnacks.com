var swiper = new Swiper('.slider-container', {
  slidesPerView: 1, // Muestra un producto a la vez
  spaceBetween: 20, // Espacio entre productos
  loop: true, // Repetir el slider infinitamente
  autoplay: {
    delay: 5000, // Tiempo de transición entre productos (en milisegundos)
  },
  navigation: {
    nextEl: '.swiper-button-next', // Botón para avanzar
    prevEl: '.swiper-button-prev', // Botón para retroceder
  },
});