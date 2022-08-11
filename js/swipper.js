/*new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // loop: true,
    freeMode: true,

    breakpoints: {
        768: {

        }
    },
});*/


/* Swiper
**************************************************************/
let swiper = Swiper;
let init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if (mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.image-slider', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                freeMode: true,
                loop: true,
                slidesPerView: 1.25,
                breakpoints: {
                    768: {

                    }
                },

            });
        }

    }

    // Disable (for tablet)
    else if (tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if (desktop.matches) {
        swiper.destroy();
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