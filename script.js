const carouselContainer = document.querySelector('#carousel');
const images = carouselContainer.querySelectorAll('img.slide');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const playPauseButton = document.querySelector('#playPause');

const phoneImages = [
  'assets/dev-links-thumbnail-phone.jpg',
  'assets/social-tree-thumbnail-phone.png',
  'assets/brownie-thumbnail-phone.png',
];

const desktopImages = [
  'assets/dev-links-thumbnail.jpg',
  'assets/social-tree-thumbnail.png',
  'assets/brownie-thumbnail.png',
];

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

    // Verifique se todas as imagens do conjunto atual foram exibidas
    if (currentIndex === 0) {
      // Reinicie o loop
      setTimeout(nextSlide, intervalDuration);
    }
  }
}

function prevSlide() {
  if (!isPaused) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
}

function updateImagesBasedOnScreenWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 660) {
    images.forEach((img, index) => {
      img.src = phoneImages[index];
    });
  } else {
    images.forEach((img, index) => {
      img.src = desktopImages[index];
    });
  }

  showImage(currentIndex);
}

updateImagesBasedOnScreenWidth();

window.addEventListener('resize', updateImagesBasedOnScreenWidth);

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
