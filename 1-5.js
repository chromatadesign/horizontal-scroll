$(document).ready(function () {
  var slider_wrapper = new Swiper(".slider-wrapper-1-5", {
    wrapperClass: "slider-list-1-5",
    slideClass: "slider-item-1-5",
    navigation: {
      nextEl: '.next-slide-1-5',
      prevEl: '.prev-slide-1-5'
    },
    pagination: {
      type: 'bullets',
      el: '.pagination',
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: true, 
    },
    speed: 700,
    slidesPerView: 'auto',
    loop: true,
    on: {
      init: function () {
        $('.slider-wrapper-1-5').on('mouseover', function () {
          slider_wrapper.autoplay.stop();
        });

        $('.slider-wrapper-1-5').on('mouseout', function () {
          slider_wrapper.autoplay.start();
        });
      },
    },
  });
});
