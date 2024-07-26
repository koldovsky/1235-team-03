console.log("habitations.cards.js loaded successfully");


const habitationsData = [
  {
    imgSrc: "img/habitations/prev/habitations-img-prev-1.webp",
    imgAlt: "Habitations prev type 1",
    capacity: "1-2 PERSONS | 25M<sup>2</sup>",
    name: "Geodesic Dome",
    link: "https://bookish-space-garbanzo-4jqrpx997g6qfw4-3000.app.github.dev/big-wood-cabin",
    amenities: [
      { icon: "img/habitations/icons/pet_paw_icon.svg", alt: "Pets allowed", description: "Pets allowed" },
      { icon: "img/habitations/icons/wi-fi_icon.svg", alt: "Wi-fi", description: "Wi-fi" },
      { icon: "img/habitations/icons/bonfire_icon.svg", alt: "Bonfire", description: "Bonfire" }
    ],
    description: "Experience unique accommodation in our cozy geodesic domes, offering panoramic views and modern comforts nestled within nature."
  }
];

function generateCardHTML(data) {
  const amenitiesHTML = data.amenities.map(amenity => `
    <div class="amenity">
      <img class="amenity__icon" src="${amenity.icon}" alt="${amenity.alt}" />
      <p class="amenity__description">${amenity.description}</p>
    </div>
  `).join("");

  return `
    <section class="habitations__card-section">
      <div class="habitations__item">
        <img class="habitations__illustration" src="${data.imgSrc}" alt="${data.imgAlt}" />
      </div>
      <p class="habitations__capacity">${data.capacity}</p>
      <h2 class="habitations__name">
        <a class="habitations__a" href="${data.link}">${data.name} →</a>
      </h2>
      <div class="habitations__amenities">
        ${amenitiesHTML}
      </div>
      <div class="habitations__separator">
        <img src="img/habitations/separator.svg" alt="Separator" />
      </div>
      <div class="habitations__description">
        <p>${data.description}</p>
        <button class="habitations__button">BOOK NOW</button>
      </div>
    </section>
  `;
}

function renderCards() {
  const container = document.getElementById("cards-list");
  if (container) {
    console.log("Container found:", container);
    container.innerHTML = ""; 
    habitationsData.forEach(data => {
      const cardHTML = generateCardHTML(data);
      console.log("Generated card HTML:", cardHTML);
      container.innerHTML += cardHTML;
    });
  } else {
    console.error("Container not found!");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("Habitations card script is loaded and running.");
  renderCards();
});
