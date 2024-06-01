
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const dropdownMenu = document.getElementById('dropdown-menu');

  menuButton.addEventListener('click', function () {
    dropdownMenu.classList.toggle('hidden');
  });
});
  const carouselElement = document.getElementById('carousel-example');

const items = [
{ position: 0, el: document.getElementById('carousel-item-1') },
{ position: 1, el: document.getElementById('carousel-item-2') },
{ position: 2, el: document.getElementById('carousel-item-3') },
{ position: 3, el: document.getElementById('carousel-item-4') },
];

const options = {
defaultPosition: 0,
interval: 3000,
indicators: {
  activeClasses: 'bg-white dark:bg-gray-800',
  inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
  items: [
      { position: 0, el: document.getElementById('carousel-indicator-1') },
      { position: 1, el: document.getElementById('carousel-indicator-2') },
      { position: 2, el: document.getElementById('carousel-indicator-3') },
      { position: 3, el: document.getElementById('carousel-indicator-4') },
  ],
},
onNext: () => console.log('Next slide shown'),
onPrev: () => console.log('Previous slide shown'),
onChange: () => console.log('New slide shown'),
};

let currentIndex = options.defaultPosition;
const changeSlide = (index) => {
items.forEach((item, i) => {
  if (i === index) {
      item.el.classList.remove('hidden');
      item.el.classList.add('block');
      options.indicators.items[i].el.classList.add(...options.indicators.activeClasses.split(' '));
      options.indicators.items[i].el.classList.remove(...options.indicators.inactiveClasses.split(' '));
  } else {
      item.el.classList.remove('block');
      item.el.classList.add('hidden');
      options.indicators.items[i].el.classList.remove(...options.indicators.activeClasses.split(' '));
      options.indicators.items[i].el.classList.add(...options.indicators.inactiveClasses.split(' '));
  }
});
options.onChange();
};

const nextSlide = () => {
currentIndex = (currentIndex + 1) % items.length;
changeSlide(currentIndex);
options.onNext();
};

const prevSlide = () => {
currentIndex = (currentIndex - 1 + items.length) % items.length;
changeSlide(currentIndex);
options.onPrev();
};

// Initial slide
changeSlide(currentIndex);

// Auto slide
setInterval(nextSlide, options.interval);

// Controls
document.querySelector('[data-carousel-next]').addEventListener('click', nextSlide);
document.querySelector('[data-carousel-prev]').addEventListener('click', prevSlide);

// Indicators
options.indicators.items.forEach((indicator, index) => {
indicator.el.addEventListener('click', () => {
  currentIndex = index;
  changeSlide(currentIndex);
});
});
document.getElementById('image1').addEventListener('click', function() {
this.classList.add('hidden');
document.getElementById('image2').classList.remove('hidden');
});
document.getElementById('image2').addEventListener('click', function() {
this.classList.add('hidden');
document.getElementById('image1').classList.remove('hidden');
});
function initializeCarousel(carouselId, interval = 3000) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll('[data-carousel-item]');
  const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  
  let currentIndex = 0;
  let autoSlideInterval;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle('hidden', i !== index);
      item.classList.toggle('opacity-0', i !== index);
      item.classList.toggle('opacity-100', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('bg-white', i === index);
      indicator.classList.toggle('bg-gray-500', i !== index);
    });
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, interval);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  prevButton.addEventListener('click', () => {
    showPrevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  nextButton.addEventListener('click', () => {
    showNextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  // Initial display
  showSlide(currentIndex);
  startAutoSlide();
}

// Initialize the carousel when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeCarousel('carousel-custom', 3000); // Adjust the interval as needed
});