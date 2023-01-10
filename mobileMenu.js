const toggleMenu = document.querySelector(".menu-button")
const navLinks = document.querySelector(".navlinks")
toggleMenu.addEventListener("click", () => {
    navLinks.classList.toggle("navlinks-mobile")
    navLinks.classList.toggle("textshadow")
    toggleMenu.classList.toggle("open")
})