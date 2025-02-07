// Evgen Fedorchenko

// Accordion
// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// document.querySelectorAll('.about-me-button-down').forEach(button => {
//   button.addEventListener('click', () => {
//     const panel = button.closest('li').querySelector('.ac-panel');
//     const isOpen = panel.classList.contains('open');

//     document.querySelectorAll('.ac-panel').forEach(otherPanel => {
//       otherPanel.classList.remove('open');
//       otherPanel.previousElementSibling
//         .querySelector('.about-me-button-down')
//         .classList.remove('open');
//     });

//     if (!isOpen) {
//       panel.classList.add('open');
//       button.classList.add('open');
//     }
//   });
// });

// const accordionAbout = new Accordion('accordion-container-about', {
//   duration: 700,
//   showMultiple: true,
// });
// accordionAbout.open(0);

// Evgen Fedorchenko

// Danyil Shevchenko
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.about-me-slider', {
  modules: [Navigation, Keyboard, Mousewheel],
  containerModifierClass: 'about-me-slider-',
  wrapperClass: 'about-me-slider-wrapper',
  slideClass: 'about-me-slider-slide',
  slideActiveClass: 'about-me-slider-slide-active',
  slidesPerView: 2,
  grabCursor: true,
  rewind: true,
  navigation: {
    enabled: true,
    nextEl: '.about-me-slider-button-next',
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
  },
});
// Danyil Shevchenko
