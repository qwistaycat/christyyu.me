
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



const pinata = document.querySelector('.pinata');

pinata.addEventListener('click', () => {
    pinata.classList.remove("pinatahover");
    pinata.src = "images/pinataparty/pinatahit.avif";
    setTimeout(function(){
        pinata.src = "images/pinataparty/pinataopen.avif";
    }, 2000);
    setTimeout(function(){
        pinata.src = "images/pinataparty/funnyfriend.avif";
    }, 4000);
});