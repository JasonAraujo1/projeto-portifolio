const carouselContainer = document.querySelector('#carousel');
const iframes = carouselContainer.querySelectorAll('iframe');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const playPauseButton = document.querySelector('#playPause');

let currentIndex = 0;
const intervalDuration = 3000;
let isPaused = false;

function showIframe(index) {
  iframes.forEach((iframe, i) => {
    iframe.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  if (!isPaused) {
    currentIndex = (currentIndex + 1) % iframes.length;
    showIframe(currentIndex);
  }
}

function prevSlide() {
  if (!isPaused) {
    currentIndex = (currentIndex - 1 + iframes.length) % iframes.length;
    showIframe(currentIndex);
  }
}

nextButton.addEventListener('click', () => {
  nextSlide();
  clearInterval(carouselInterval);
});

prevButton.addEventListener('click', () => {
  prevSlide();
  clearInterval(carouselInterval);
});

playPauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  playPauseButton.textContent = isPaused ? 'Play' : 'Pause';
});

showIframe(currentIndex);

let carouselInterval = setInterval(nextSlide, intervalDuration);

carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(carouselInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
  if (!isPaused) {
    carouselInterval = setInterval(nextSlide, intervalDuration);
  }
});
