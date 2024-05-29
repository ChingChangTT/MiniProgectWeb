document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        links.forEach(link => link.classList.remove('bg-gradient-to-r', 'from-emerald-500', 'to-emerald-500'));

        // Add active class to the clicked link
        link.classList.add('bg-gradient-to-r', 'from-emerald-500', 'to-emerald-500');

        // Change body background
        const bgClass = link.getAttribute('data-bg');
        document.body.className = bgClass + ' min-h-screen';
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const links = document.querySelectorAll('nav a');

    menuButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
    });

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        links.forEach(link => link.classList.remove('bg-gradient-to-r', 'from-emerald-500', 'to-emerald-500'));

        // Add active class to the clicked link
        link.classList.add('bg-gradient-to-r', 'from-emerald-500', 'to-emerald-500');

        // Change body background
        const bgClass = link.getAttribute('data-bg');
        document.body.className = bgClass + ' min-h-screen';

        // Hide menu on small screens after a link is clicked
        if (window.innerWidth < 1024) {
          dropdownMenu.classList.add('hidden');
        }
      });
    });

    // Adjust menu visibility on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        dropdownMenu.classList.add('hidden');
      }
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
