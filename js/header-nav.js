const body = document.querySelector("body");
const headerNav = document.querySelector(".header__navigation");
const headerLinks = document.querySelector(".header-links__link-item");
const navBurgerBtn = document.querySelector(".header-nav__burger");

navBurgerBtn.addEventListener("click", () => {
    body.classList.toggle("overflow-hidden");
    headerNav.classList.toggle("header-nav--burger-active");
});

headerLinks.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    headerNav.classList.remove("header-nav--burger-active");
});