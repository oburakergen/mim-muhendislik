import 'bootstrap';
import Swiper from 'swiper';
import {CountUp} from "countup.js";

$(document).ready(() => {
  const countUp = new CountUp('about-proje', 120,
    {
      duration: 3,
      separator: '.',
      prefix: '+',
    });
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }

  const countUp2 = new CountUp('about-partner', 30,
    {
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

  const swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet (index, className) {
        return `<span class="${  className  }">${  index + 1  }</span>`;
      },
    },
  });

  const swiper4 = new Swiper('.mySwiper4', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet (index, className) {
        return `<span class="${  className  }">${  index + 1  }</span>`;
      },
    },
  });

  const swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet (index, className) {
        return `<span class="${  className  }">${  index + 1  }</span>`;
      },
    },
  });
});

window.$ = $;
window.jQuery = $;
