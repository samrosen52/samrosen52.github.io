// Sticky Navigation Bar
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

// Smooth Scrolling for Internal Links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.innerText = "Toggle Dark Mode";
    button.id = "darkModeBtn";
    button.addEventListener("click", toggleDarkMode);
    document.body.appendChild(button);
});
