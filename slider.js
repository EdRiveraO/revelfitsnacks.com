let currentSlide = 0;

function showNextSlide() {
  const slides = document.querySelectorAll('.slider img');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 5000);
