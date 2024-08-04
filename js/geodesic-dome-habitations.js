const habitationSlider = document.querySelector(".main__related-habitations-list")
const slides = habitationSlider.querySelectorAll(".main__related-habitations-item");
const leftArrow = document.querySelector(".arrow-svg_1j4-left")
const rightArrow = document.querySelector(".arrow-svg_1j4-right")
let itemWidth = slides[1].offsetLeft - slides[0].offsetLeft;
let itemIndex = 0;

window.addEventListener("resize", () => {
  habitationSlider.style.transition = 'none';
  itemWidth = slides[1].offsetLeft - slides[0].offsetLeft;
  habitationSlider.style.transform = `translateX(-${(itemIndex + 1) * itemWidth}px)`;
});

function setUpSlider(list, items, prev, next) {
  const maxItemsCount = items.length;
  let isTransitioning = false;

  prev.addEventListener("click", () => moveSlider(-1));
  next.addEventListener("click", () => moveSlider(1));

  function cloneItems() {
    const firstClone = items[0].cloneNode(true);
    const secondClone = items[1].cloneNode(true);
    const thirdClone = items[2].cloneNode(true);
    const lastClone = items[items.length - 1].cloneNode(true);

    list.appendChild(firstClone);
    list.appendChild(secondClone);
    list.appendChild(thirdClone);
    list.insertBefore(lastClone, items[0]);

    items = document.querySelectorAll('.main__related-habitations-item');
  }

  function setInitialPosition() {
    list.style.transition = 'none';
    list.style.transform = `translateX(-${(itemIndex + 1) * itemWidth}px)`;
  }

  function moveSlider(direction) {
    if (isTransitioning) return;
    isTransitioning = true;
    itemIndex += direction;

    list.style.transition = 'transform 0.5s ease-in-out';
    list.style.transform = `translateX(-${(itemIndex + 1) * itemWidth}px)`;

    list.addEventListener('transitionend', handleTransitionEnd);
  }

  function handleTransitionEnd() {
    list.removeEventListener('transitionend', handleTransitionEnd);
    isTransitioning = false;

    if (itemIndex == maxItemsCount) {
      itemIndex = 0;
      list.style.transition = 'none';
      list.style.transform = `translateX(-${(itemIndex + 1) * itemWidth}px)`;
    }
    
    if (itemIndex < 0) {
      itemIndex = maxItemsCount - 1;
      list.style.transition = 'none';
      list.style.transform = `translateX(-${(itemIndex + 1) * itemWidth}px)`;
    }
  }

  cloneItems();
  setInitialPosition();
}

setUpSlider(habitationSlider, slides, leftArrow, rightArrow);