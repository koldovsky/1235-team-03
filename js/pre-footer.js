const slides = [
  '<li class="clients-carousel__slide"><div class="carousel__item"><img class="carousel__image" src="img/pre-footer/car.jpeg" alt="Girls Trip" /><a class="carousel__link" href="index.html">READ MORE →</a></div></li>',
  '<li class="clients-carousel__slide"><div class="carousel__item"><img class="carousel__image" src="img/pre-footer/sunbed.jpeg" alt="Cozy Winter in a Dome" /><a class="carousel__link" href="index.html">READ MORE →</a></div></li>',
  '<li class="clients-carousel__slide"><div class="carousel__item"><img class="carousel__image" src="img/pre-footer/spa.jpeg" alt="SPA for Two" /><a class="carousel__link" href="index.html">READ MORE →</a></div></li>',
];

let currentIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".clients-carousel__track");
  slideContainer.innerHTML = slides[currentIdx];

  if (window.matchMedia("(min-width: 770px)").matches) {
    const secondSlideIdx = (currentIdx + 1) % slides.length;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 1000px)").matches) {
      const thirdSlideIdx = (secondSlideIdx + 1) % slides.length;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
  }

  updateIndicators();
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".clients-carousel__indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle(
      "clients-carousel__indicator--active",
      index === currentIdx
    );
  });
}

function nextSlide() {
  currentIdx = (currentIdx + 1) % slides.length;
  renderSlide();
}

function prevSlide() {
  currentIdx = (currentIdx - 1 + slides.length) % slides.length;
  renderSlide();
}

function jumpToSlide(index) {
  currentIdx = index;
  renderSlide();
}

renderSlide();

const btnNext = document.querySelector(".clients-carousel__button--right");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".clients-carousel__button--left");
btnPrev.addEventListener("click", prevSlide);

const indicators = document.querySelectorAll(".clients-carousel__indicator");
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => jumpToSlide(index));
});

window.addEventListener("resize", renderSlide);
