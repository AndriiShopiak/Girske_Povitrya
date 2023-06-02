let menuBlock = document.querySelector(".header__menu");
let burger = document.querySelector(".burger");
let burgerCon = document.querySelector(".burger_con");

burger.addEventListener("click", () => {
    menuBlock.classList.toggle("header__menu_active");
    burgerCon.classList.toggle("burger_con_active");
});