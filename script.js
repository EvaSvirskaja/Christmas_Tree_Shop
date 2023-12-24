document.addEventListener("DOMContentLoaded", function () {

    // Dummy data for special offers
    const specialOffers = [
        { name: "Egle", price: 80.00, discount: 15, image: "./images/egle1.jpeg" },
        { name: "Zaliaskare", price: 65.00, discount: 10, image: "./images/egle2.jpeg" },
        { name: "Kenis", price: 75.00, discount: 20, image: "./images/egle3.webp" },
        { name: "Sidabrine", price: 80.00, discount: 15, image: "./images/egle4.webp" },
        { name: "Balta", price: 65.00, discount: 10, image: "./images/egle5.webp" },
        { name: "Dirbtine", price: 75.00, discount: 20, image: "./images/egle6.jpeg" },
        // Add more special offers as needed
    ];
    
    const specialOffersList = document.getElementById("special-offers-list");
    let currentIndex = 0;

    function showNextOffers() {
        // Clear existing offers
        specialOffersList.innerHTML = "";

        // Display the next three offers
        for (let i = 0; i < 3; i++) {
            const offerIndex = (currentIndex + i) % specialOffers.length;
            const offer = specialOffers[offerIndex];

            const offerItem = document.createElement("div");
            offerItem.classList.add("offer-item");
            offerItem.innerHTML = `
                <img src="${offer.image}" alt="${offer.name}">
                <h3>${offer.name}</h3>
                <p class="discount-price">$${(offer.price - (offer.price * offer.discount / 100)).toFixed(2)}</p>
                <p class="original-price">$${offer.price.toFixed(2)}</p>
                <p class="discount">${offer.discount}% OFF</p>
            `;
            specialOffersList.appendChild(offerItem);
        }

        // Move to the next set of offers
        currentIndex = (currentIndex + 1) % specialOffers.length;
    }

    // Show initial set of offers
    showNextOffers();

    // Set an interval to rotate offers every 3 seconds
    setInterval(showNextOffers, 10000);
});