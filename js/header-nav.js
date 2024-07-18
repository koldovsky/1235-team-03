const body = document.querySelector("body");
const headerNav = document.querySelector(".header__navigation");
const navBurgerBtn = document.querySelector(".header-nav__burger");

navBurgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("header-nav--burger-active");
});

headerNav.addEventListener("wheel", (e) => {
    if (headerNav.classList.contains("header-nav--burger-active")) {
        e.preventDefault();
    }
});