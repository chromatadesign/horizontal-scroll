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
      disableOnInteraction: true, // Set disableOnInteraction to true
    },
    speed: 700,
    slidesPerView: 'auto',
    loop: true,
    on: {
      init: function () {
        // Styles and event handlers
        // ...

        // Add event handlers for mouseover and mouseout on "slider-wrapper-2"
        $('.slider-wrapper-2').on('mouseover', function () {
          slider_wrapper.autoplay.stop(); // Stop autoplay when mouseover
        });

        $('.slider-wrapper-2').on('mouseout', function () {
          slider_wrapper.autoplay.start(); // Start autoplay when mouseout
        });
      },
    },
  });
});
