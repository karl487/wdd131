document.addEventListener("DOMContentLoaded", () => {
    
    // --- HOME PAGE: Promo Modal Functionality ---
    const promoBtn = document.getElementById("promoBtn");
    const promoModal = document.getElementById("promoModal");
    const closeBtn = document.querySelector(".close-btn");

    if (promoBtn && promoModal && closeBtn) {
        promoBtn.addEventListener("click", () => {
            promoModal.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            promoModal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === promoModal) {
                promoModal.style.display = "none";
            }
        });
    }

    // --- DESTINATIONS PAGE: Real-Time Live Search ---
    const destSearch = document.getElementById("destSearch");
    const destCards = document.querySelectorAll(".dest-card");

    if (destSearch) {
        destSearch.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            destCards.forEach(card => {
                const searchableText = card.getAttribute("data-name");
                if (searchableText.includes(query)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // --- PACKAGES PAGE: Interactive Form Handling ---
    const bookingForm = document.getElementById("bookingForm");
    const formSuccess = document.getElementById("formSuccess");

    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevents page reload
            const clientName = document.getElementById("name").value;
            
            formSuccess.textContent = `Thank you, ${clientName}! Your inquiry has been sent successfully. We will email you shortly.`;
            bookingForm.reset();
        });
    }
});