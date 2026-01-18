const inTitle = document.querySelector("#input-title");
const inPrice = document.querySelector("#input-price");
const inDescription = document.querySelector("#input-description");
const btnCancel = document.querySelector("#button-cancel");



inTitle.value = "Ben edited this! Edited Again";
inPrice.value = 123;
inDescription.value = "enter description here!";


const onClickCancel = (evt) => {
    evt.preventDefault(); //don't navigate to a different page
    inTitle.value = "";
    inPrice.value = "";
    inDescription.value = "";
};
btnCancel.addEventListener("click", onClickCancel);


//using Fetch instead of the older xhttp style requests for AJAX
function fetchListings() {
    return fetch('./assets/airbnb_sf_listings_500.json')
        .then(response => {
            if (response.ok) return response.json();
            else throw new Error("Failed to load JSON: ${response.status} ${response.statusText}")
        })
        .then(data => data.listings || data)
        .catch(error => {
            console.error(error);
            return [];
        });
}

fetchListings()
    .then(listings => listings.forEach(task => createTaskCard(task)))
    .catch(error => { console.error(error) });


let cardContainer = document.getElementById('card-container');

let createTaskCard = listing => {
    let card = document.createElement('article');
    card.className = 'card';

    let image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = listing.picture_url;
    image.alt=listing.name;



    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let listingName = document.createElement('h5');
    listingName.innerText = listing.name;
    listingName.className = 'card-title';

    let host = document.createElement('div');
    host.className = 'card-host';
    host.innerText = listing.host_name;

    let hostImage = document.createElement('img');
    hostImage.className = 'card-img-top';
    hostImage.src = listing.host_picture_url;

    let price = document.createElement('div');
    price.innerText = listing.price;

    let description = document.createElement('div');
    description.innerText = listing.description;
    description.className = 'card-description';

    cardBody.appendChild(listingName);
    cardBody.appendChild(description);
    cardBody.appendChild(image);
    cardBody.appendChild(host);
    cardBody.appendChild(hostImage);
    cardBody.appendChild(price);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
}
