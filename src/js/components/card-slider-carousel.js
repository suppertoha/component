/*card-slider-carousel*/

const mainSliderContainer = document.querySelector(".mySwiper");
const thumbsSliderContainer = document.querySelector(".mySwiper2");

if (mainSliderContainer && thumbsSliderContainer) {
  const mainSlider = new Swiper(mainSliderContainer, {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".slider-carousel__next",
      prevEl: ".slider-carousel__prev",
    },

    breakpoints: {


      600: {
        spaceBetween: 10,
        slidesPerView: 5,
      },

    },
  });

  const thumbsSlider = new Swiper(thumbsSliderContainer, {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: mainSlider,
    },
  });
}

/*End card-slider-carousel*/
