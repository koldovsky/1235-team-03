const specialOffersData = [
    {
      title: "SAVE $50",
      name: "Starry Nights Package",
      features: [
        "Stargazing tour;",
        "Upgraded tent amenities;",
        "Campfire exclusive access;",
        "Free souvenir Camp mug."
      ],
      link: "contacts.html"
    },
    {
      title: "FREE ACTIVITIES",
      name: "Nature Explorer Deal",
      features: [
        "2 complimentary activities;",
        "Morning yoga lessons;",
        "Breakfast included;",
        "Free souvenir Camp mug."
      ],
      link: "contacts.html"
    },
    {
      title: "ENJOY 15% OFF",
      name: "Weekday Serenity",
      features: [
        "Valid Friday to Sunday only;",
        "Tent Upgrade;",
        "Campfire access;",
        "Breakfast included."
      ],
      link: "contacts.html"
    }
  ];
  
  function generateOfferHTML(offer) {
    const featuresHTML = offer.features.map(feature => `
      <li class="special-offers__item-feature">${feature}</li>
    `).join("");
  
    return `
      <div class="special-offers__item">
        <h3 class="special-offers__item-title">${offer.title}</h3>
        <h4 class="special-offers__item-name">${offer.name}</h4>
        <ul class="special-offers__item-features">
          ${featuresHTML}
        </ul>
        <a href="${offer.link}" class="special-offers__button">REQUEST</a>
      </div>
    `;
  }
  
  function renderSpecialOffers() {
    const container = document.querySelector(".special-offers__items");
    if (container) {
      container.innerHTML = ""; 
      specialOffersData.forEach(offer => {
        const offerHTML = generateOfferHTML(offer);
        container.innerHTML += offerHTML;
      });
    } else {
      console.error("Special offers container not found!");
    }
  }
  
  renderSpecialOffers();
  