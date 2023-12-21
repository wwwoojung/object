const MAIN_SLIDE_ITMS = document.querySelectorAll('.main_visual_slide .itm');
const BANNER_SLIDE_ITMS = document.querySelectorAll('.main_banner_slide .itm');

const MAIN_VISUAL_SLIDE = new Swiper('.main_visual_slide', {
    loop: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    slideActiveClass: 'on',

    on: {
        init: function () {
            MAIN_SLIDE_ITMS[0].classList.add('on');
        },
        slideChangeTransitionEnd: function () {
            console.log(this.realIndex);

            MAIN_SLIDE_ITMS.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_ITMS[this.realIndex].classList.add('on');
        }
    }
});

const VISUAL_SLIDE_LEFT = document.querySelector('.main_visual .visual_slide_arrows .left');
const VISUAL_SLIDE_RIGHT = document.querySelector('.main_visual .visual_slide_arrows .right');

VISUAL_SLIDE_LEFT.addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev();
})

VISUAL_SLIDE_RIGHT.addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext();
})

const MAIN_BANNER_SLIDE = new Swiper('.main_banner_slide', {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 80,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    slideActiveClass: 'on',

    on: {
        init: function () {
            BANNER_SLIDE_ITMS[0].classList.add('on');
        },
        slideChangeTransitionEnd: function () {
            console.log(this.realIndex);

            BANNER_SLIDE_ITMS.forEach(it => it.classList.remove('on'));
            BANNER_SLIDE_ITMS[this.realIndex].classList.add('on');
        }
    }
});

AOS.init();

const BANNER_SLIDE_LEFT = document.querySelector('.main_banner .banner_slide_arrows .left');
const BANNER_SLIDE_RIGHT = document.querySelector('.main_banner .banner_slide_arrows .right');

BANNER_SLIDE_LEFT.addEventListener('click', () => {
    MAIN_BANNER_SLIDE.slidePrev();
})

BANNER_SLIDE_RIGHT.addEventListener('click', () => {
    MAIN_BANNER_SLIDE.slideNext();
})

const MAIN_BEST_TAB_M = document.querySelectorAll('.main_best_seller .tab_menu li');
const MAIN_BEST_TAB_C = document.querySelectorAll('.main_best_seller .tab_content .con_box');

MAIN_BEST_TAB_M.forEach((it, idx) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        MAIN_BEST_TAB_M.forEach(it => it.classList.remove('on'));
        MAIN_BEST_TAB_C.forEach(it => it.classList.remove('on'));

        MAIN_BEST_TAB_M[idx].classList.add('on');
        MAIN_BEST_TAB_C[idx].classList.add('on');
    });
});