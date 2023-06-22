$(document).ready(function () {
  var slider_wrapper = new Swiper(".slider-wrapper-1", {
    wrapperClass: "slider-list-1",
    slideClass: "slider-item-1",
    navigation: {
      nextEl: '.next-slide-1',
      prevEl: '.prev-slide-1'
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
        $('.slider-wrapper-1').on('mouseover', function () {
          slider_wrapper.autoplay.stop();
        });

        $('.slider-wrapper-1').on('mouseout', function () {
          slider_wrapper.autoplay.start();
        });
      },
    },
  });
});
