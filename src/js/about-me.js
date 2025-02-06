// Evgen Fedorchenko

// Accordion
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.querySelectorAll('.about-me-button-down').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.closest('li').querySelector('.ac-panel');
    const isOpen = panel.classList.contains('open');

    document.querySelectorAll('.ac-panel').forEach(otherPanel => {
      otherPanel.classList.remove('open');
      otherPanel.previousElementSibling
        .querySelector('.about-me-button-down')
        .classList.remove('open');
    });

    if (!isOpen) {
      panel.classList.add('open');
      button.classList.add('open');
    }
  });
});

const accordionAbout = new Accordion('accordion-container-about', {
  duration: 700,
  showMultiple: true,
});
accordionAbout.open(0);

// Evgen Fedorchenko
