import '../scss/style.scss';
import * as Swiper from './sw.js';


let swiper = Swiper;
let swiper2 = Swiper;
let swiper3 = Swiper;
let init = false;

/* Which media query
**************************************************************/
function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
  let desktop = window.matchMedia('(min-width: 1025px)');

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.slider1', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        freeMode: true,
        loop: true,
        slidesPerView: 1.3,
        initialSlide: 0,
        spaceBetween: 16,
        breakpoints: {
          768: {

          }
        },
      });
      swiper2 = new Swiper('.slider2', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        freeMode: true,
        loop: true,
        slidesPerView: 1.3,
        initialSlide: 0,
        spaceBetween: 16,
        breakpoints: {
          768: {

          }
        },
      });
      swiper3 = new Swiper('.slider3', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        freeMode: true,
        loop: true,
        slidesPerView: 1.21,
        initialSlide: 0,
        spaceBetween: 16,
        breakpoints: {
          768: {

          }
        },
      });
    }

  }

  // Disable (for tablet)
  else if ((tablet.matches)) {
    if (document.querySelector('.slider1').classList.contains('swiper-initialized')) {
      swiper.destroy();
    }
    if (document.querySelector('.slider2').classList.contains('swiper-initialized')) {
      swiper2.destroy();
    }
    if (document.querySelector('.slider3').classList.contains('swiper-initialized')) {
      swiper3.destroy();
    }
    init = false;
  }

  // Disable (for desktop)
  else if ((desktop.matches)) {
    if (document.querySelector('.slider1').classList.contains('swiper-initialized')) {
      swiper.destroy();
    }
    if (document.querySelector('.slider2').classList.contains('swiper-initialized')) {
      swiper2.destroy();
    }
    if (document.querySelector('.slider3').classList.contains('swiper-initialized')) {
      swiper3.destroy();
    }
    init = false;
  }
}

/* On Load
**************************************************************/
window.addEventListener('load', function () {
  swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function () {
  swiperMode();
});
