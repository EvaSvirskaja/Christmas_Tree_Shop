document.addEventListener("DOMContentLoaded", function () {
    // Dummy data for Christmas trees
    const christmasTrees = [
        { name: "Egle", price: 50.00, image: "../images/egle1.jpeg" },
        { name: "Zaliaskare", price: 70.00, image: "../images/egle2.jpeg" },
        { name: "Kenis", price: 60.00, image: "../images/egle3.webp" },
        { name: "Sidabrine", price: 85.00, image: "../images/egle4.webp" },
        { name: "Balta", price: 75.00, image: "../images/egle5.webp" },
        { name: "Raudona", price: 65.00, image: "../images/egle6.jpeg" },
        { name: "Is misko", price: 80.00, image: "../images/egle7.jpeg" },
        { name: "Kirsta", price: 90.00, image: "../images/egle8.jpeg" },
        { name: "Vazone", price: 55.00, image: "../images/egle9.jpeg" },
        { name: "Mazyte", price: 95.00, image: "../images/egle10.jpeg" },
        // Add more trees as needed
    ];

    const treeList = document.getElementById("tree-list");

    function populateTreeList() {
        // Clear existing trees
        treeList.innerHTML = "";

        // Populate the tree list
        christmasTrees.forEach(tree => {
            const treeItem = document.createElement("div");
            treeItem.classList.add("tree-item");
            treeItem.innerHTML = `
                <img src="${tree.image}" alt="${tree.name}">
                <h2>${tree.name}</h2>
                <p>$${tree.price.toFixed(2)}</p>
            `;
            treeList.appendChild(treeItem);
        });
    }

    // Initial population of the tree list
    populateTreeList();

    // Event listener for the "Christmas Tree List" link
    const treeListLink = document.getElementById("tree-list-link");
    treeListLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior of the anchor tag
        populateTreeList();    // Populate the tree list when the link is clicked
    });
});