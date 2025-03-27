// Sticky Navigation Bar

let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down - hide navbar
        navbar.classList.add("nav-hidden");
    } else {
        // Scrolling up - show navbar
        navbar.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
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
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Store preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

// Apply system preference on load
document.addEventListener("DOMContentLoaded", function () {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (!storedTheme && userPrefersDark)) {
        document.body.classList.add("dark-mode");
    }

    // Add Dark Mode Toggle Button
    const button = document.createElement("button");
    button.innerText = "Toggle Dark Mode";
    button.id = "darkModeBtn";
    button.addEventListener("click", toggleDarkMode);
    document.body.appendChild(button);
});
