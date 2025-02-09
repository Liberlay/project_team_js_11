// Evgen Fedorchenko

// Accordion

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Css svg rotator
const faqButtons = document.querySelectorAll('.about-me .ac-trigger');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const arrowIcon = button.querySelector('.about-me .ac-svg');
    arrowIcon.classList.toggle('rotated');
  });
});
// Css svg rotator

const accordionAbout = new Accordion('.about-me .accordion-container', {
  duration: 700,
});
accordionAbout.open(0);

// Evgen Fedorchenko

// Danyil Shevchenko
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

const swiper = new Swiper('.about-me-slider', {
  modules: [Navigation, Keyboard, Mousewheel],
  containerModifierClass: 'about-me-slider-',
  wrapperClass: 'about-me-slider-wrapper',
  slideClass: 'about-me-slider-slide',
  slideActiveClass: 'about-me-slider-slide-active',
  slidesPerView: 2,
  grabCursor: true,
  loop: true,
  navigation: {
    enabled: true,
    nextEl: '.about-me-slider-button-next',
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: { enabled: true },
  breakpoints: {
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
});
// Danyil Shevchenko
