function t() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const e = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) { //if the page is scrolled 100px;
        e.classList.add("active");



    } else {
        document.querySelector('#header').style.backgroundColor = "white";
        document.querySelector('#header').style.coloe = "white";
        e.classList.remove("active");
    }
})