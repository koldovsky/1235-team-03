const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(item.src);
    });
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

function openLightbox(src) {
    lightboxContent.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showPrevImage() {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    lightboxContent.src = galleryItems[currentIndex].src;
}

function showNextImage() {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    lightboxContent.src = galleryItems[currentIndex].src;
}
