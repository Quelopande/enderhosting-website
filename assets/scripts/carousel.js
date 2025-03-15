const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carouselItem");
const totalItems = items.length;
let index = 0;

document.querySelector(".right").addEventListener("click", () => {
    index = (index + 1) % totalItems;
    updateCarousel();
});

document.querySelector(".left").addEventListener("click", () => {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}