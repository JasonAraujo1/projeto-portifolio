const carouselContainer = document.querySelector('#carousel');
const images = carouselContainer.querySelectorAll('img');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const playPauseButton = document.querySelector('#playPause');

let currentIndex = 0;
const intervalDuration = 10000;
let isPaused = false;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  if (!isPaused) {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
}

function prevSlide() {
  if (!isPaused) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
}



showImage(currentIndex);

let carouselInterval = setInterval(nextSlide, intervalDuration);

carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(carouselInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
  if (!isPaused) {
    carouselInterval = setInterval(nextSlide, intervalDuration);
  }
});


