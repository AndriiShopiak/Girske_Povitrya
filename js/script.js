let menuBlock = document.querySelector(".header__menu");
// let burger = document.querySelector(".burger");
// let burgerCon = document.querySelector(".burger_con");
let welcomeBlock = document.querySelector(".welcome");

window.addEventListener("load", () => {
    function animated () {
        welcomeBlock.classList.add("welcome__active");
    }
    setTimeout(animated, 1000);
});

// burger.addEventListener("click", () => {
//     menuBlock.classList.toggle("header__menu_active");
//     burgerCon.classList.toggle("burger_con_active");
// });

//  AutoPlay for slider

//  setInterval(function () {
//    count ++;
//     if (count > 2){
//         count = 0;
//     }
//    slideChange();
//  },4000);

// Progress slider 
let progBtn = document.querySelectorAll(".gallery__progress__btn");
progBtn[0].classList.add("progress_active");
function progress (num) {
    progBtn.forEach ((el) => {
        el.classList.remove("progress_active");
    });
    progBtn[num].classList.add("progress_active");
}