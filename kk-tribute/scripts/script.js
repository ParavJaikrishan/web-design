let navbar = document.querySelector("#navbar");
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
}