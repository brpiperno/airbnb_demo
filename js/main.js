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
    .then(listings => listings.reverse().forEach(task => createTaskCard(task)))
    .catch(error => { console.error(error) });


let cardContainer = document.getElementById('card-container');

let createTaskCard = listing => {
    const col = document.createElement('div');
    col.className = 'col-12';
    col.innerHTML = `
      <div class="listing col-lg-6 col-md-6 col-sm-12">
          <article class="card">
              <img src="${listing.picture_url}" alt="${listing.name}" />
    					<div class="host-wrapper">
  							<img class="host-thumbnail" src="${listing.host_thumbnail_url}" alt="thumbnail of host ${listing.host_name}"/>
    						<div class="host-name"> Hosted by ${listing.host_name}</div>
    					</div>
    					
              <div class="card-body">
                  <h3> ${listing.name} </h3>
                  
                  <div class="price">${listing.price}</div>
                  <div class="description overflow-auto" style="max-height: 180px">
                      ${listing.description}

    									<br><br><strong>Amenities Include:</strong><br>
    									${listing.amenities}
                  </div>
    							<div class="amenities">

    							</div>
              </div>
          </article>
      </div>
    `;
    cardContainer.appendChild(col);

}
