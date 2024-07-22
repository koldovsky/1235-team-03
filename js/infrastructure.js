function init() {
    import("./header-nav.js");
  
    const track = document.querySelector('.reviews__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.reviews__button--right');
    const prevButton = document.querySelector('.reviews__button--left');
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);
    
    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
    };
    
    prevButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const prevSlide = currentSlide.previousElementSibling;
      if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
      }
    });
    
    nextButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling;
      if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
      }
    });
  }
  
  const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
  let loadedPartialsCount = 0;
  
  document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) {
      init();
    }
  });
  
  