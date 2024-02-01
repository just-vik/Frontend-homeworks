const images = [
    "media/img_1.jpg",
    "media/img_2.jpg",
    "media/img.jpg"
]

const imageNode = document.querySelector(".image");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
let currentIndex = 0;

function updateImage() {
    imageNode.src = images[currentIndex];
}
btnPrev.addEventListener("click", () => {
    currentIndex = (--currentIndex + images.length) % images.length;
    updateImage();
});
btnNext.addEventListener("click", () => {
    currentIndex = ++currentIndex % images.length;
    updateImage();
});

updateImage();