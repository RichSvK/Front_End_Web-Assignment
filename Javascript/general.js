const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const navbarLink = document.getElementsByClassName("navbar-link")[0];

burgerMenu.addEventListener("click", () => {
    navbarLink.classList.toggle("active");
});