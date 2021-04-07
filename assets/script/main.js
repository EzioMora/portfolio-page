
let show = true;
const menu = document.querySelector(".header__nav-wrapper");
const menuToggle = menu.querySelector(".header__menuToggle");
const navLinks = menu.querySelectorAll(".header__nav-link");

const addEvents = links => links.forEach(element => {
    element.addEventListener("click", menuResponsive);
});

const removeEvents = links => links.forEach(element => {
    element.removeEventListener("click", menuResponsive);
});

const menuResponsive = () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    show ? addEvents(navLinks) : removeEvents(navLinks);
    menu.classList.toggle("header__nav-responsive-active", show);
    show = !show;
};

menuToggle.addEventListener("click", menuResponsive);