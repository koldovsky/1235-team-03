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
  },
  {
    imgSrc: "img/habitations/prev/habitations-img-prev-2.webp",
    imgAlt: "Habitations prev type 2",
    capacity: "1-6 PERSONS | 35M<sup>2</sup> & 60M<sup>2</sup>",
    name: "Wood Cabins (Big and Small)",
    link: "#",
    amenities: [
      { icon: "img/habitations/icons/toilet_icon.svg", alt: "Shower and toilet", description: "Shower and toilet" },
      { icon: "img/habitations/icons/air_condition_icon.svg", alt: "Air conditioning", description: "Air conditioning" },
      { icon: "img/habitations/icons/parking_icon.svg", alt: "Parking", description: "Own parking lot" }
    ],
    description: "Find rustic charm and comfort in our quaint small wood cabins or opt for spacious luxury in our big wood cabins."
  },
  {
    imgSrc: "img/habitations/prev/habitations-img-prev-3.webp",
    imgAlt: "Habitations prev type 3",
    capacity: "1-4 PERSONS | 45M<sup>2</sup>",
    name: "Glamping Tent",
    link: "#",
    amenities: [
      { icon: "img/habitations/icons/pet_paw_icon.svg", alt: "Pets allowed", description: "Pets allowed" },
      { icon: "img/habitations/icons/bed_icon.svg", alt: "Extra bedding", description: "Extra bedding" },
      { icon: "img/habitations/icons/bonfire_icon.svg", alt: "Bonfire", description: "Bonfire" }
    ],
    description: "Embrace the outdoors without sacrificing comfort in our glamping tents, featuring plush bedding and stylish decor."
  },
  {
    imgSrc: "img/habitations/prev/habitations-img-prev-4.webp",
    imgAlt: "Habitations prev type 4",
    capacity: "1-6 PERSONS | 125M<sup>2</sup>",
    name: "Big Glamping Tent",
    link: "#",
    amenities: [
      { icon: "img/habitations/icons/pet_paw_icon.svg", alt: "Pets allowed", description: "Pets allowed" },
      { icon: "img/habitations/icons/air_condition_icon.svg", alt: "Air conditioning", description: "Air conditioning" },
      { icon: "img/habitations/icons/fridge_icon.svg", alt: "Small fridge", description: "Small fridge" }
    ],
    description: "Indulge in luxury camping with ample space and upscale amenities in our big glamping tents, perfect for families or groups."
  },
  {
    imgSrc: "img/habitations/prev/habitations-img-prev-5.webp",
    imgAlt: "Habitations prev type 5",
    capacity: "1-2 PERSONS | 18M<sup>2</sup>",
    name: "Balloon Tent",
    link: "#",
    amenities: [
      { icon: "img/habitations/icons/pet_paw_icon.svg", alt: "Pets allowed", description: "Pets allowed" },
      { icon: "img/habitations/icons/bed_icon.svg", alt: "Bedding", description: "Bedding" },
      { icon: "img/habitations/icons/king-bed_icon.svg", alt: "King-size bed", description: "King-size bed" }
    ],
    description: "Elevate your experience in our unique balloon tents, offering whimsical accommodations with stunning views and modern conveniences."
  },
  {
    imgSrc: "img/habitations/prev/habitations-img-prev-6.webp",
    imgAlt: "Habitations prev type 6",
    capacity: "1-6 PERSONS | 125M<sup>2</sup>",
    name: "Retro Luxury Tent",
    link: "#",
    amenities: [
      { icon: "img/habitations/icons/toilet_icon.svg", alt: "Big bathroom", description: "Big bathroom" },
      { icon: "img/habitations/icons/air_condition_icon.svg", alt: "Air conditioning", description: "Air conditioning" },
      { icon: "img/habitations/icons/parking_icon.svg", alt: "Parking", description: "Own parking lot" }
    ],
    description: "Step back in time with a touch of luxury in our retro-style big tents, blending vintage charm with modern comforts."
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

renderCards();
