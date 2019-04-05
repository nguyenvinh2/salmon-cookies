'use strict';

showSlides();

//gets random slide out of the container to show on home page
function showSlides() {
  let slides = document.getElementsByClassName('items');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  let slideIndex = Math.floor(Math.random() * slides.length);
  slides[slideIndex].style.display = 'block';
  setTimeout(showSlides, 4000);
}
