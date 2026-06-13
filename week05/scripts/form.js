const currentYearElement = document.getElementById('currentyear');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastmodified');
lastModifiedElement.textContent =  document.lastModified;

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Dynamically populate product dropdown
document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("productName");
    
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id; // Using ID as the value
            option.textContent = product.name; // Displaying the product name
            selectElement.appendChild(option);
        });
    }

    // Increment Review Counter on review.html load
    if (window.location.pathname.includes("review.html")) {
        let count = localStorage.getItem("reviewCount") || 0;
        count++;
        localStorage.setItem("reviewCount", count);
        
        // Display counter on page
        const counterDisplay = document.getElementById("reviewCounter");
        if (counterDisplay) {
            counterDisplay.textContent = count;
        }
    }
});