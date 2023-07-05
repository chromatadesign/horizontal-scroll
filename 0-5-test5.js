$(document).ready(function () {
  var slider_wrapper = new Swiper(".slider-wrapper-0-5", {
    wrapperClass: "slider-list-0-5",
    slideClass: "slider-item-0-5",
    navigation: {
      nextEl: '.next-slide-0-5',
      prevEl: '.prev-slide-0-5'
    },
    pagination: {
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 0.1,
      disableOnInteraction: true, 
    },
    speed: 3000,
    slidesPerView: 'auto',
    loop: true,
    on: {
      init: function () {
        $('.slider-wrapper-0-5').on('mouseover', function () {
          slider_wrapper.autoplay.stop();
        });

        $('.slider-wrapper-0-5').on('mouseout', function () {
          slider_wrapper.autoplay.start();
        });
      },
    },
  });
});
