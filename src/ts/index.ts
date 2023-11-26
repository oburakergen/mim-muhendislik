import 'bootstrap';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { CountUp } from 'countup.js';

$(document).ready(() => {
  const countUp = new CountUp('about-proje', 120, {
    duration: 3,
    separator: '.',
    prefix: '+',
  });
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }

  const countUp2 = new CountUp('about-partner', 30, {
    duration: 3,
    separator: '.',
    prefix: '+',
  });
  if (!countUp2.error) {
    countUp2.start();
  } else {
    console.error(countUp2.error);
  }

  const countUp3 = new CountUp('about-ton', 30000, {
    duration: 3,
    separator: '.',
    prefix: '+',
  });
  if (!countUp3.error) {
    countUp3.start();
  } else {
    console.error(countUp3.error);
  }

  new Swiper('.full-slider', {
    modules: [ Pagination],
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      renderBullet (index, className) {
        return `<span class="${  className  }">${  index+1  }</span>`;
      },
    },
  });

  new Swiper('.company-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 10,
    width: 1300,
    navigation: {
      prevEl: '.slidePrev-btn',
      nextEl: '.slideNext-btn',
    },
  });

  new Swiper('.project-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    watchOverflow: true,
    spaceBetween: 10,
    width: 1300,
    navigation: {
      prevEl: '.slidePrev-btn',
      nextEl: '.slideNext-btn',
    },
  });

  new Swiper('.news-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      prevEl: '.slidePrev-btn',
      nextEl: '.slideNext-btn',
    },
  });
});

window.$ = $;
window.jQuery = $;
