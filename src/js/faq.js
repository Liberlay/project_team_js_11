import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


const contentFaq = document.querySelectorAll('.faq-ac-content');


document.querySelectorAll('.faq-show-text-button')
  .forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling; // находим следующий элемент, который должен быть связан с контентом

      content.classList.toggle('open'); // переключаем класс 'open' для текущего контента
    })
        });





