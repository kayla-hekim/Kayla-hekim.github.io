document.addEventListener("DOMContentLoaded", function() {
    var navbarToggle = document.querySelector(".navbar-toggle");
    var navbarLinks = document.querySelector(".navbar-links");

    navbarToggle.addEventListener("click", function() {
        navbarLinks.classList.toggle("active");
    });
});
