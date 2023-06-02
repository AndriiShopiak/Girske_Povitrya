let menuBlock = document.querySelector(".header__menu");
let burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    menuBlock.classList.toggle("header__menu_active");
});