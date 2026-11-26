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
// -----------------------------------------


// Get the menu button
const menuToggle = document.getElementById("menuToggle");

// Get the navigation links
const navLinks = document.getElementById("navLinks");

// Add click event to menu button
menuToggle.addEventListener("click", function () {

    // Toggle active class
    navLinks.classList.toggle("active");

    // Change menu icon
    if (navLinks.classList.contains("active")) {

        menuToggle.textContent = "✕";

    } else {

        menuToggle.textContent = "☰";

    }

});

// Close menu when a link is clicked
const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// resume download

const downloadResume = document.getElementById("downloadResume");

downloadResume.addEventListener("click", function () {
    const link = document.createElement("a");

    link.download = "Srikanth-S-Resume.jpeg";

    link.click();
});


// scroll 
window.addEventListener("load", function () {
    if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }
});