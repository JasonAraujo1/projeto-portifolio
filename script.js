const iframeCarousel = document.getElementById('carousel');
const iframes = iframeCarousel.querySelectorAll('iframe');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function showIframe(index) {
  iframes.forEach((iframe, i) => {
    iframe.style.display = i === index ? 'block' : 'none';
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + iframes.length) % iframes.length;
  showIframe(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % iframes.length;
  showIframe(currentIndex);
});

showIframe(currentIndex);
