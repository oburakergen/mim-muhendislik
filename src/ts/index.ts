import 'bootstrap';
import Swiper from 'swiper';

$(document).ready(() => {
  const swiper = new Swiper('.mySwiper', {
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
