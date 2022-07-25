const navToggle = document.querySelector(".nav_toggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
    nav.classList.toggle(".nav--visible");
})