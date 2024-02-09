document.addEventListener("DOMContentLoaded", function() {
    var navbarToggle = document.querySelector(".navbar-toggle");
    var navbarLinks = document.querySelector(".navbar-links");

    navbarToggle.addEventListener("click", function() {
        navbarLinks.classList.toggle("active");
    });
});

const name = document.querySelector(".name")

function changeColor(color) {
  name.style.color = color;
}
