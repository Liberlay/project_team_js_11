import iziToast from 'izitoast';
const form = document.querySelector('.work-together-form');
const email = document.querySelector('.work-together-form-input[type="email"]');
const comment = document.querySelector(
  '.work-together-form-input[name="comments"]'
);
const modalBackdrop = document.querySelector('.work-together-backdrop');
const modalForm = document.querySelector('.work-together-modal');
const modalBtn = document.querySelector('.work-together-modal-close-btn');

comment.addEventListener('input', checkCommentLength);

function checkCommentLength(event) {
  const maxLength = parseInt(comment.getAttribute('maxlength'));
  let userComment = event.target.value;

  if (userComment.length > maxLength) {
    event.target.value = userComment.slice(0, maxLength);
    event.target.style.whiteSpace = 'nowrap';
    event.target.style.overflow = 'hidden';
    event.target.style.textOverflow = 'ellipsis';
  }
}

form.addEventListener('submit', getContactInfo);

function getContactInfo(event) {
  event.preventDefault();

  const userEmail = event.target.elements.email.value.trim();
  const userComment = event.target.elements.comments.value.trim();

  const url = 'https://portfolio-js.b.goit.study/api/requests';
  const data = {
    email: `${userEmail}`,
    comment: `${userComment}`,
  };
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        return iziToast.error({
          title: 'Error',
          message: `Sorry, try again!`,
          messageColor: 'white',
          messageSize: '16',
          backgroundColor: 'red',
          theme: 'dark',
          position: 'topRight',
        });
      }
      return response.json();
    })
    .then(data => {
      modalBackdrop.classList.add('is-open');
      modalForm.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      form.reset();
    })
    .catch(error => {
      return iziToast.error({
        title: 'Error',
        message: `Sorry,  network is fall, check your modem and try again!`,
        messageColor: 'white',
        messageSize: '16',
        backgroundColor: 'red',
        theme: 'dark',
        position: 'topRight',
      });
    });
}

modalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' || event.key === 'Esc' || event.code === 27) {
    closeModal();
  }
});

function closeModal() {
  modalBackdrop.classList.remove('is-open');
  modalBackdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

const inputs = document.querySelectorAll('.work-together-form-input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    let maxLength = 30;
    if (input.value.length > maxLength) {
      input.value = input.value.substring(0, maxLength) + '...';
    }
  });
});
