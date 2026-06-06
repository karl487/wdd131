
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
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...

  {
    templeName: "Eket Nigeria Temple",
    location: "Eket, Nigeria",
    dedicated: "2022, october, 2",
    area: 18850,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/eket-nigeria-temple/eket-nigeria-temple-59416.jpg"
    
  },

  {
    templeName: "Calabar Nigeria Temple",
    location: "Calabar, Nigeria",
    dedicated: "2023, october, 1",
    area: 26000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/calabar-nigeria-temple/calabar-nigeria-temple-65892-main.jpg"
  },

  {
    templeName:"aba nigeria temple",
    location: "aba, nigeria",
    dedicated: "2005, august, 7",
    area: 11500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  }
];

// Function to loop through temples and build the DOM elements
function displayTemples(templeList) {
    // Select the container element from the HTML
    const container = document.getElementById("grid-container");
    
    // Clear any existing content in the container
    container.innerHTML = "";

    // Loop through each temple object in the array
    templeList.forEach(temple => {
        // Create a section element for the individual card
        const card = document.createElement("section");
        card.classList.add("temple-card");

        // Use template literals to define the card layout and apply native lazy loading
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p class="label">Location: <span class="value">${temple.location}</span></p>
            <p class="label">Dedicated: <span class="value">${temple.dedicated}</span></p>
            <p class="label">Total Area: <span class="value">${temple.area.toLocaleString()} sq ft</span></p>
            <img 
                src="${temple.imageUrl}" 
                alt="${temple.templeName} Temple" 
                loading="lazy" 
                width="400" 
                height="250"
            >
        `;

        // Append the newly created card to the main container
        container.appendChild(card);
    });
}

// Call the function and pass your temples array to render them
displayTemples(temples);

document.addEventListener("DOMContentLoaded", () => {
    // --- Existing Mobile Menu Toggle Logic ---
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            if (navMenu.classList.contains("show")) {
                menuToggle.innerHTML = "✕";
                menuToggle.setAttribute("aria-label", "close navigation");
            } else {
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-label", "toggle navigation");
            }
        });
    }

    // --- New Navigation Filter Logic ---
    
    // Helper function to pull the year out of the dedicated date string (e.g., "2005, August, 7")
    const getYear = (dateString) => {
        return parseInt(dateString.split(",")[0].trim(), 10);
    };

    // Home Filter Event Listener
    document.getElementById("home-filter").addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(temples); // Displays all items
    });

    // Old Filter Event Listener (Built before 1900)
    document.getElementById("old-filter").addEventListener("click", (e) => {
        e.preventDefault();
        const oldTemples = temples.filter(temple => getYear(temple.dedicated) < 1900);
        displayTemples(oldTemples);
    });

    // New Filter Event Listener (Built after 2000)
    document.getElementById("new-filter").addEventListener("click", (e) => {
        e.preventDefault();
        const newTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
        displayTemples(newTemples);
    });

    // Large Filter Event Listener (Larger than 90,000 square feet)
    document.getElementById("large-filter").addEventListener("click", (e) => {
        e.preventDefault();
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
    });

    // Small Filter Event Listener (Smaller than 10,000 square feet)
    document.getElementById("small-filter").addEventListener("click", (e) => {
        e.preventDefault();
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
    });

    // Render all cards on the first page load
    displayTemples(temples);
});

