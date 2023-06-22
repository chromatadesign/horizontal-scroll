$(document).ready(function () {
  var slider_wrapper = new Swiper(".slider-wrapper-2", {
    wrapperClass: "slider-list-2",
    slideClass: "slider-item-2",
    navigation: {
      nextEl: '.next-slide-2',
      prevEl: '.prev-slide-2'
    },
    pagination: {
      type: 'bullets',
      el: '.pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: true, 
    },
    speed: 700,
    slidesPerView: 'auto',
    loop: true,
    on: {
      init: function () {
        $('.slider-wrapper-2').on('mouseover', function () {
          slider_wrapper.autoplay.stop();
        });

        $('.slider-wrapper-2').on('mouseout', function () {
          slider_wrapper.autoplay.start();
        });
      },
    },
  });
});
