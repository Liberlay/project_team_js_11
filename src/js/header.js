//Menu dropdown
const menu = document.querySelector('.headerMenuTitle');
const menuNav = document.querySelector('.headerMenuNav');
const menuItems = document.querySelectorAll('.headerNavLink');

menu.addEventListener('click', () => {
  if (menuNav.classList.contains('hidden')) {
    menuNav.classList.remove('hidden');
  } else menuNav.classList.add('hidden');
});

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const targetId = item.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    menuNav.classList.add('hidden');
  });
});

//Order the project button
const orderBttn = document.querySelector('.headerOrderBtn');

orderBttn.addEventListener('click', event => {
  event.preventDefault();
  const targetId = orderBttn.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
});

//Mobile Menu
const burger = document.querySelector('.headerItemMenu');
const mobMenu = document.querySelector('.headerMobMenu');
const closeModal = document.querySelector('.mobMenuCloseBttn');
const mobMenuItems = document.querySelectorAll('.headerMobNavLink');
const mobMenuOrderBttn = document.querySelector('.headerMobOrderBtn');

burger.addEventListener('click', () => {
  mobMenu.classList.remove('hidden');
  document.body.classList.add('active');
});

closeModal.addEventListener('click', () => {
  mobMenu.classList.add('hidden');
  document.body.classList.remove('active');
});

mobMenuItems.forEach(item => {
  item.addEventListener('click', event => {
    mobMenu.classList.add('hidden');
    document.body.classList.remove('active');
    event.preventDefault();
    const targetId = item.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

mobMenuOrderBttn.addEventListener('click', event => {
  mobMenu.classList.add('hidden');
  document.body.classList.remove('active');
  event.preventDefault();
  const targetId = mobMenuOrderBttn.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
});
