import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";




const accordionfaq = new Accordion('.accordion-container-faq', {
  duration: 400,
  showMultiple: true,
});

accordionfaq.open(0);

const faqButtons = document.querySelectorAll('.faq-show-text-button');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
      const arrowIcon = button.querySelector('.icon-faq');
      arrowIcon.classList.toggle('arrow-up');
  })
});