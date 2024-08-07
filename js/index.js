function init() {
    import("./header-nav.js");
    import("./habitations.js");
    import("./infrastructure.js");
    import("./pre-footer.js");
  }
  
const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) {
        init();
    }
});
  