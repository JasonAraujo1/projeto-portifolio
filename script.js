
const carouselContainer = document.getElementById('carousel-container');
const iframeCarousel = document.getElementById('carousel');
const iframes = iframeCarousel.querySelectorAll('iframe');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const intervalDuration = 5000; // 5 segundos

function showIframe(index) {
  iframes.forEach((iframe, i) => {
    iframe.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % iframes.length;
  showIframe(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + iframes.length) % iframes.length;
  showIframe(currentIndex);
}

nextButton.addEventListener('click', () => {
  nextSlide();
  clearInterval(carouselInterval);
});

prevButton.addEventListener('click', () => {
  prevSlide();
  clearInterval(carouselInterval);
});

showIframe(currentIndex);

let carouselInterval = setInterval(nextSlide, intervalDuration);

carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(carouselInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
  carouselInterval = setInterval(nextSlide, intervalDuration);
});
