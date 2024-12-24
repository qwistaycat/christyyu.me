const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu_dark");
let menuOpen = false;
let toggledManually = false;

function setMenuVisibility(visible) {
  menu.style.opacity = visible ? "85%" : "0%";
  menu.style.pointerEvents = visible ? "auto" : "none";
  menuOpen = visible;
}

// Add scroll handler for mobile
function handleScroll() {
  if (window.innerWidth <= 767 && !toggledManually) {
    // Mobile breakpoint
    setMenuVisibility(window.scrollY > 50);
  }
}

menuIcon.addEventListener("click", () => {
  toggledManually = true;
  setMenuVisibility(!menuOpen);
});

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Add resize event listener to handle orientation changes
window.addEventListener("resize", handleScroll);
