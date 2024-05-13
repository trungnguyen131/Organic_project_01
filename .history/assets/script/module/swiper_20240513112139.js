window.addEventListener("DOMContentLoaded", function() {
  
})
export const swiper = new Swiper(".swiper.home-slider", {
    slidesPerView: 1,
    loop: true,
    grid: {
      rows: 1,
      fill: "row" | "column",
    },
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,

    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".slider-dot",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

