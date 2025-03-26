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
