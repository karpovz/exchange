let sliderTrack = document.querySelector('.sliderListTrack');
let slides = document.querySelectorAll('.sliderListTrack__item');
let prev = document.querySelector('.sliderControlArrowsPrev');
let next = document.querySelector('.sliderControlArrowsNext');
let lineBig = document.querySelector('.sliderControlIndicator__lineBig');

const slideWidth = Number(window.getComputedStyle(slides[0]).width.split('p')[0]);
const slideMargin =  Number(window.getComputedStyle(slides[0]).marginRight.split('p')[0]) * 2;
const slideFullWidth = slideWidth + slideMargin;

let slideIndex = 0;

let slide = function() {
    sliderTrack.style.transition = 'transform .5s';
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideFullWidth}px, 0px, 0px)`;
    next.classList.toggle('disabled', slideIndex === slides.length-2);
    prev.classList.toggle('disabled', slideIndex === 0); 
    slides[slideIndex].style.transition = 'transform .5s';
};

next.onclick = function() {
    if (slideIndex !== --slides.length) {
        slideIndex++;
    } 
    slide()
};

prev.onclick = function() {
    if (slideIndex !== 0) {
        slideIndex--;
    }
    slide()
};
