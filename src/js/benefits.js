const benefitsButton = document.querySelector('.benefits-button');
const footer = document.getElementById('work-together');

benefitsButton.addEventListener('click', () => {
  footer.scrollIntoView({
    behavior: 'smooth',
  });
});
