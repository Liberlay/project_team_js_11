// Evgen Fedorchenko

// Accordion

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Css svg rotator

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector(
    '.accordion-container-about .ac-trigger'
  );
  const parent = button.closest('.ac'); // Родительский элемент с классом "ac"

  button.addEventListener('click', function () {
    parent.classList.toggle('is-rotated'); // Добавляет/убирает класс "is-active"
  });
});
// Css svg rotator

const accordionAbout = new Accordion('.accordion-container-about', {
  duration: 700,
});
accordionAbout.open(0);

// Evgen Fedorchenko

// Danyil Shevchenko
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  slidesPerView: 2,
  slidesOffsetAfter: 83,
  grabCursor: true,
  rewind: true,
  navigation: {
    enabled: true,
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
  },
});
// Danyil Shevchenko
