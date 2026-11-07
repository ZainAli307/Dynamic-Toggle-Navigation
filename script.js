
// Select HTML elements
let menuBtn = document.querySelector("#menuBtn");
let navLinks = document.querySelector(".nav_links");
let getStartedBtn = document.querySelector("#btn");

// Hamburger menu functionality
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
let navItems = document.querySelectorAll(".nav_links a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Get Started button functionality
getStartedBtn.addEventListener("click", function () {
    document.querySelector("#container").scrollIntoView({
        behavior: "smooth"
    });
});
