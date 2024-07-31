function init() {
  import("./habitations.cards.js");
  import("./habitations.special-offers.js")
  import("./habitations.form.js")
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) {
    init();
  }
});
