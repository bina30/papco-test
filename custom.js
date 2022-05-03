// on scroll heder add class

$(window).scroll(function() {
    var windowYmax = 100;
    var scrolledY = $(window).scrollTop();
  
    if (scrolledY > windowYmax) {
  
      $('a.navbtn').addClass("dnone");
    } else {
      $('a.navbtn').removeClass("dnone");
     
    }
  });
  
  
          var swiper = new Swiper(".mySwiper", {
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            slidesPerView: 5,
         
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1900: {
      slidesPerView: 5,
      spaceBetween: 50
    }
 
  }
        });


