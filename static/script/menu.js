let menuBtn = document.querySelector('.navbarMenu2');
let menu = document.querySelector('.menu');

menuBtn.onclick = function() {
    menu.style.transition = 'transform .3s';
    menu.classList.toggle('menu--active'); 
};