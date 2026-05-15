javascript// Dynamically populate the copyright year
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    const today = new Date();
    currentYearSpan.textContent = today.getFullYear();
}

// Dynamically populate the last modified date
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
}