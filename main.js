const mainContainer = document.querySelector(".main-container")
const apiURL = "https://fakestoreapi.com/products"
async function fetchData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${data.status}`);
        }
        data.map(product => {
            const cardContainer = document.createElement("div")
            cardContainer.classList.add("card-container")

            const cardImageContainer = document.createElement("div")
            cardImageContainer.classList.add("card-container-image")

            const cardImage = document.createElement("img")
            cardImage.classList.add("card-image");
            cardImage.src = `${product.image}`

            const productTitle = document.createElement("h2")
            productTitle.classList.add("product-title");
            productTitle.innerText = product.title;

            const productPrice = document.createElement("p")
            productPrice.classList.add("product-price");
            productPrice.innerText = `$${product.price}`

            const cardTextContainer = document.createElement("div")
            cardTextContainer.classList.add("card-text-container")

            // Appending
            cardTextContainer.appendChild(productTitle)
            cardTextContainer.appendChild(productPrice)

            cardImageContainer.appendChild(cardImage);
            cardContainer.appendChild(cardImageContainer);
            cardContainer.appendChild(cardTextContainer);


            mainContainer.appendChild(cardContainer);
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData()
