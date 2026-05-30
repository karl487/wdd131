document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Update the Current Year in the Footer
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // 2. Update the Last Modified Date/Time in the Footer
    const modifiedSpan = document.getElementById("lastmodified");
    if (modifiedSpan) {
        // Fetches the file's last modified timestamp
        const lastModifiedDate = document.lastModified; 
        modifiedSpan.textContent = lastModifiedDate;
    }
});