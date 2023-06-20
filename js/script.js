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

// Slider functional

let sliderBlocks = [
    `<div class="gallery_slider__gallery" id="gallery_slider__gallery">
        <div class="gallery_con__rigth right">
            <div class="right__block">
                <img src="img/gallery/house_one.jpg" alt="House">
            </div>
        </div>
        <div class="gallery_con__left left">
            <h2 class="left__title">
                Будинок №1
            </h2>
            <p class="left__describe">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam molestias dolores at similique incidunt corrupti perspiciatis quae voluptatem doloremque architecto.
            </p>
            <button class="left__btn">
                Більше
            </button>
        </div>
    </div>`,
    `<div class="gallery_slider__gallery" id="gallery_slider__gallery">
        <div class="gallery_con__rigth right">
            <div class="right__block">
                <img src="img/gallery/house_two.jpg" alt="House">
            </div>
        </div>
        <div class="gallery_con__left left">
            <h2 class="left__title">
                Будинок №2
            </h2>
            <p class="left__describe">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam molestias dolores at similique incidunt corrupti perspiciatis quae voluptatem doloremque architecto.
            </p>
            <button class="left__btn">
                Більше
            </button>
        </div>
    </div>`,
    `<div class="gallery_slider__gallery" id="gallery_slider__gallery">
        <div class="gallery_con__rigth right">
            <div class="right__block">
                <img src="img/gallery/house.jpg" alt="House">
            </div>
        </div>
        <div class="gallery_con__left left">
            <h2 class="left__title">
                Будинок №3
            </h2>
            <p class="left__describe">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam molestias dolores at similique incidunt corrupti perspiciatis quae voluptatem doloremque architecto.
            </p>
            <button class="left__btn">
                Більше
            </button>
        </div>
    </div>`
];
let leftBtn = document.querySelector("#left__button");
let rightBtn = document.querySelector("#right__button");
let slider_case = document.querySelector(".gallery_slider");
let count = 0;

function slideChange () {
    slider_case.style.opacity = 0;
        setTimeout(function () {
            setTimeout(function () {
                slider_case.style.opacity = 1;
            },300);
            slider_case.innerHTML = sliderBlocks[count];
        },500);
        progress(count);
}
 rightBtn.addEventListener("click", () => {
    count ++;
    if (count > 2){
        count = 0;
    }
    slideChange();
 });
 let isCorect;

 leftBtn.addEventListener("click", () => {
    if (count == 0) {
        count = 3; 
    }
    count --;
    slideChange();
 });

 
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