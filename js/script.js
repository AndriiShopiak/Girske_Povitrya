let menuBlock = document.querySelector(".header__menu");
let burger = document.querySelector(".burger");
let burgerCon = document.querySelector(".burger_con");
let welcomeBlock = document.querySelector(".welcome");

window.addEventListener("load", () => {
    function animated () {
        welcomeBlock.classList.add("welcome__active");
    }
    setTimeout(animated, 1000);
});

burger.addEventListener("click", () => {
    menuBlock.classList.toggle("header__menu_active");
    burgerCon.classList.toggle("burger_con_active");
});