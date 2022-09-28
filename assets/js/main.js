history.scrollRestoration = "manual";
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

    // // Swiper Testimonial 
    var mySwiper = new Swiper('.swiper-testimonial-container', {
        speed: 800,
        spaceBetween: 100,
        initialSlide: 0,
        // mousewheel: true,
        // effect: 'fade',
        parallax: !0,
        effect: 'slide',   
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },
        slidesPerView: 3,
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
                slidesPerView: 3,
         
            }
        },
    });
    
  
        // Swiper Team carousel
       var mySwiper = new Swiper('.swiper-team-container', {
        speed: 400,
        spaceBetween: 100,
        initialSlide: 0,
        // slidesToShow: 3,
        // infinite:true,
        //truewrapper adoptsheight of active slide
        autoHeight: false,
        // Optional parameters
        direction: 'horizontal',
        
        loop: true,
        // delay between transitions in ms
        // autoplay: 5000,
        autoplayStopOnLast: false, // loop false also

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-team-button-next',
            prevEl: '.swiper-team-button-prev',

        },
        // And if we need scrollbar
        //scrollbar: '.swiper-scrollbar',
        // "slide", "fade", "cube", "coverflow" or "flip"
        effect: 'slide',
        // Distance between slides in px.
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
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            // when window width is <= 640px
            767: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3,
         
            }
        }
    })

 // // Swiper blogs carousel 
 var mySwiper = new Swiper('.swiper-blogs-container', {
  speed: 400,
  spaceBetween: 100,
  effect: 'slide',
  slidesPerView: 3,
  loop: true,
  noSwiping: false,
  allowSlidePrev: false,
  allowSlideNext: false,
  autoplay: false,
  keyboard: false,
  centeredSlides: true,
  // //
  slidesOffsetBefore: 0,
  // //
  // noSwiping: true,
//   grabCursor: true,
  breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1.3,
        noSwiping: false,
        allowSlidePrev: true,
         allowSlideNext: true,
         spaceBetween: 20,
    },
    // when window width is <= 480px
    480: {
        slidesPerView: 1.3,
        noSwiping: false,
        allowSlidePrev: true,
         allowSlideNext: true,
         spaceBetween: 20,
    },
      // when window width is <=  767px
      767: {
          slidesPerView: 2,
          noSwiping: false,
         allowSlidePrev: true,
          allowSlideNext: true,
          spaceBetween: 20,
      },
      991: {
          slidesPerView: 3,
          // navigation: false,
          noSwiping: true,
          allowSlidePrev: false,
          allowSlideNext: false,
      }
  }
})

// Form-Validation

window.addEventListener('load', function() {
var form = document.getElementById('needs-validation');
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
  event.preventDefault();
  event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
}, false);


// Modal Script

function showMe(value){
    if(value==="personal-training"){
          document.getElementById('personal-training').style.display="block";
          document.getElementById('21-consistent').style.display="none";
          document.getElementById('online-class').style.display="none";
    }
    if(value==="21-consistent"){
          document.getElementById('personal-training').style.display="none";
          document.getElementById('21-consistent').style.display="block";
          document.getElementById('online-class').style.display="none";
    }
    if(value==="online-class"){
          document.getElementById('personal-training').style.display="none";
          document.getElementById('21-consistent').style.display="none";
          document.getElementById('online-class').style.display="block";
    }
}

// Country code Select

    // International telephone format
// $("#phone").intlTelInput();
// get the country data from the plugin
var countryData = window.intlTelInputGlobals.getCountryData(),
  input = document.querySelector("#phone"),
  addressDropdown = document.querySelector("#address-country");

// init plugin
var iti = window.intlTelInput(input, {
  hiddenInput: "full_phone",
  utilsScript: "https://intl-tel-input.com/node_modules/intl-tel-input/build/js/utils.js?1549804213570" // just for formatting/placeholders etc
});

// populate the country dropdown
for (var i = 0; i < countryData.length; i++) {
  var country = countryData[i];
  var optionNode = document.createElement("option");
  optionNode.value = country.iso2;
  var textNode = document.createTextNode(country.name);
  optionNode.appendChild(textNode);
  addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener('countrychange', function(e) {
  addressDropdown.value = iti.getSelectedCountryData().iso2;
});

// listen to the address dropdown for changes
addressDropdown.addEventListener('change', function() {
  iti.setCountry(this.value);
});