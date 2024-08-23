let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let totalSlides = slides.length;

  if (n >= totalSlides) {slideIndex = 0}
  if (n < 0) {slideIndex = totalSlides - 1}

  let offset = -slideIndex * 100; // Menghitung offset untuk menggeser slide
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.transform = `translateX(${offset}%)`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});
