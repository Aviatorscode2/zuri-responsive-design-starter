const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    links.forEach(links => {
        links.classList.toggle('fade')
    });
})