const currentYearElement = document.getElementById('currentyear');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastmodified');
lastModifiedElement.textContent =  document.lastModified;

// Wait until the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Mobile Menu Toggle Logic ---
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            // Toggle the 'show' class to display or hide the menu
            navMenu.classList.toggle("show");
            
            // Optional: Switch hamburger icon between ☰ and ✕ for better UX
            if (navMenu.classList.contains("show")) {
                menuToggle.innerHTML = "✕";
                menuToggle.setAttribute("aria-label", "close navigation");
            } else {
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-label", "toggle navigation");
            }
        });
    }
});

 

