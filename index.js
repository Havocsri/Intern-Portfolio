// Get the theme toggle button
const themeToggle = document.getElementById("themeToggle");

// Start in dark mode
document.body.classList.add("dark-mode");
themeToggle.textContent = "☀️";

// Add click event to the button
themeToggle.addEventListener("click", function () {  // Toggle dark mode class
    document.body.classList.toggle("dark-mode");
     // Check current theme
    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";
        

    } else {

        themeToggle.textContent = "🌙";

    }
})
