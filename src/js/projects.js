import Swiper from 'swiper';
import { Navigation, Keyboard, A11y } from 'swiper/modules';

const projectsSwiper = new Swiper('.projects-swiper', {
  spaceBetween: 30,
  grabCursor: true,
  allowTouchMove: true,
  modules: [Navigation, Keyboard, A11y],
  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },
  keyboard: { enabled: true, onlyInViewport: true },
  a11y: true,
});
