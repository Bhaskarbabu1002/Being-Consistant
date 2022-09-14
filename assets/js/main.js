
// Header Scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("header-scrolled", window.scrollY > 0);
})

// Active-Links
$(document).ready(function () {
    $("ul.navbar-nav > li").click(function (e) {
     $("ul.navbar-nav > li").removeClass("active");
     $(this).addClass("active");
      });
  });

    // Swiper Testimonial 
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        initialSlide: 0,
        //truewrapper adoptsheight of active slide
        autoHeight: false,
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // delay between transitions in ms
        // autoplay: 5000,
        autoplayStopOnLast: false, // loop false also
        // If we need pagination
        pagination: '.swiper-pagination',
        paginationType: "bullets",

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },

        // And if we need scrollbar
        //scrollbar: '.swiper-scrollbar',
        // "slide", "fade", "cube", "coverflow" or "flip"
        effect: 'slide',
        // Distance between slides in px.
        spaceBetween: 60,
        //
        slidesPerView: 3,
        //
        centeredSlides: true,
        //
        slidesOffsetBefore: 0,
        //
        grabCursor: true,
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 1
            },
            // when window width is <= 640px
            767: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    })