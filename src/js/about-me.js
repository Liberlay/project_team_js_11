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
