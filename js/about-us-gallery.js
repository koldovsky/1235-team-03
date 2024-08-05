document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const close = document.getElementsByClassName("close")[0];
    const images = document.getElementsByClassName("gallery-image");
  
    for (let img of images) {
      img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
      }
    }
  
    close.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  