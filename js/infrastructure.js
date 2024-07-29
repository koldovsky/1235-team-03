document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".reviews__carousel");
  if (!carousel) {
    console.error("Carousel element not found");
    return;
  }

  const carouselTrack = carousel.querySelector(".reviews__track");
  const prevButton = carousel.querySelector(".reviews__button--left");
  const nextButton = carousel.querySelector(".reviews__button--right");

  if (!carouselTrack || !prevButton || !nextButton) {
    console.error("Required elements not found within carousel");
    return;
  }

  let slidesPerView = getSlidesPerView();
  let slides = Array.from(carouselTrack.children);
  let currentIndex = slidesPerView;

  console.log("Initial slides:", slides.length);
  setupCarousel();

  function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function setupCarousel() {
    slides = slides.filter((slide) => !slide.classList.contains("clone"));

    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    console.log("Cloning slides:", clonesStart.length, clonesEnd.length);

    carouselTrack.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from(carouselTrack.children);

    console.log("Total slides after cloning:", slides.length);
    updateCarousel();
  }

  function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add("clone");
    return clone;
  }

  function updateCarousel() {
    carouselTrack.style.transition = "transform 0.5s ease";
    carouselTrack.style.transform = `translateX(-${
      (currentIndex * 100) / slidesPerView
    }%)`;
  }

  prevButton.addEventListener("click", () => {
    if (--currentIndex < 0) {
      currentIndex = slides.length - slidesPerView * 2 - 1;
      carouselTrack.style.transition = "none";
      updateCarousel();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          carouselTrack.style.transition = "";
        });
      });
    } else {
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    if (++currentIndex >= slides.length - slidesPerView) {
      currentIndex = slidesPerView;
      carouselTrack.style.transition = "none";
      updateCarousel();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          carouselTrack.style.transition = "";
        });
      });
    } else {
      updateCarousel();
    }
  });

  window.addEventListener("resize", () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
  });
});
