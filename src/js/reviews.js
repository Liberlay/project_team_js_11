import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';

const listEl = document.querySelector('.reviews-swiper-wrapper');

async function getReviewsData() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return null;
  }
}

async function renderReviews() {
  const reviewsData = await getReviewsData();
  if (!reviewsData) {
    listEl.innerHTML = '<li class="swiper-slide">Not Found</li>';
    return;
  }

  listEl.innerHTML = reviewsData
    .map(
      review => `
      <li class="swiper-slide reviews-swiper-slide">
          <img src="${review.avatar_url}" 
               loading="lazy" 
               alt="${review.author}" 
               class="reviews-img" 
               width="48" height="48">
          <div class="reviews-desc">
              <h3 class="reviews-item-subtitle">${review.author}</h3>
              <div class="reviews-text">${review.review}</div>
          </div>
      </li>`
    )
    .join('');
}

async function initSwiper() {
  await renderReviews();

  const revBtnPrevEl = document.querySelector('.reviews-prev-btn');
  const revBtnNextEl = document.querySelector('.reviews-next-btn');

  const swiper = new Swiper('.reviews .swiper-reviews', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    spaceBetween: 16,
    navigation: {
      prevEl: revBtnPrevEl,
      nextEl: revBtnNextEl,
    },
    allowTouchMove: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },
    on: {
      init: function () {
        checkNavigationButtons(this);
      },
      slideChange: function () {
        checkNavigationButtons(this);
      },
    },
  });

  function checkNavigationButtons(swiper) {
    if (revBtnPrevEl && revBtnNextEl) {
      revBtnPrevEl.classList.toggle(
        'swiper-button-disabled',
        swiper.isBeginning
      );
      revBtnNextEl.classList.toggle('swiper-button-disabled', swiper.isEnd);
    }
  }
}

initSwiper();
