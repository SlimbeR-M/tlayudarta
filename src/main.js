import './style.css'

const header = document.querySelector(".header");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 200) {
        header.classList.add("header__color");
    } else {
        header.classList.remove("header__color");
    }
})