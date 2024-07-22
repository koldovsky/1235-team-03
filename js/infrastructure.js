document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.reviews__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.reviews__button--right');
    const prevButton = document.querySelector('.reviews__button--left');
    const slideWidth = slides[0].getBoundingClientRect().width;
  
    // Arrange slides next to one another
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);
  
    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('reviews__slide--current');
      targetSlide.classList.add('reviews__slide--current');
    };
  
    // When I click left, move slides to the left
    prevButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.reviews__slide--current');
      const prevSlide = currentSlide.previousElementSibling;
  
      if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
      }
    });
  
    // When I click right, move slides to the right
    nextButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.reviews__slide--current');
      const nextSlide = currentSlide.nextElementSibling;
  
      if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
      }
    });
  });
  
  
  