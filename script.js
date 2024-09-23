
const menu = document.querySelector('.menu');

const menuIcon = document.querySelector('.menu_dark');
let menuOpen = false;
menuIcon.addEventListener('click', () => {
    if (menuOpen) {
        menu.style.opacity = "0%";
        menuOpen = false;
    }
    else{
        menu.style.opacity = "85%";
        menuOpen = true;
    }
});