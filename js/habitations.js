function init() {
  import("./habitations.cards.js").then(() => {
    console.log("habitations.js loaded successfully");
  }).catch(error => {
    console.error("Error loading habitations.card.js:", error);
  });
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) {
    init();
  }
});
