// Dark Mode Toggle
// const toggleDarkMode = () => {
//     const body = document.body;
//     body.classList.toggle("dark-mode");

//     // Store preference in localStorage
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//     } else {
//         localStorage.setItem("theme", "light");
//     }
// };

const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Load saved preference
const userTheme = localStorage.getItem('theme');
if (userTheme) {
  body.classList.add(userTheme + '-mode');
} else {
  // Apply system setting if no user preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
  }
}


// toggleButton.addEventListener('click', () => {
//   if (body.classList.contains('dark-mode')) {
//     body.classList.remove('dark-mode');
//     body.classList.add('light-mode');
//     localStorage.setItem('theme', 'light');
//   } else {
//     body.classList.remove('light-mode');
//     body.classList.add('dark-mode');
//     localStorage.setItem('theme', 'dark');
//   }
// });


// Apply system preference on load
document.addEventListener("DOMContentLoaded", function () {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (!storedTheme && userPrefersDark)) {
        document.body.classList.add("dark-mode");
    }

    // Add Dark Mode Toggle Button
    const button = document.getElementById("darkModeBtn");
    button.addEventListener("click", toggleDarkMode);
});

// Hide Navbar on Scroll Down, Show on Scroll Up
let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) { 
        if (window.scrollY > lastScrollY) {
            // Scrolling down - hide navbar
            navbar.classList.add("nav-hidden");
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove("nav-hidden");
        }
    } else {
        // Always show nav bar when at the top
        navbar.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
});
