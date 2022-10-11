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
        effect: 'slide',
        // parallax: !0,
        // fadeEffect: { crossFade: true },
        // effect: "fade",   
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },
        slidesPerView: 3,
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

// -----Country Code Selection
$(".mobile_code").intlTelInput({
	initialCountry: "in",
	separateDialCode: true,
	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});


// Weight conversion
function myFunction() {
    var optionValue = document.getElementById("dropdown").value;
   //  document.getElementById("output").innerHTML = optionValue;
    document.getElementById("kgsoutput").innerHTML = optionValue;
    document.getElementById("lbsoutput").innerHTML = optionValue;
   }


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


   
// Classes Register Personal Training Modals
function selectindexPersonalFunction(event){
    console.log("hi")
    var options = document.getElementById("registerSelect")
    options.selectedIndex = 0;
    options[1].disabled = true;
    options[2].disabled = true;

    document.getElementById('21-consistent').style.display="none";
    document.getElementById('online-class').style.display="none";
    document.getElementById('personal-training').style.display="block";
    
   }
   let a = document.getElementById("registerpersoneltrainingClass").addEventListener("click", selectindexPersonalFunction);

 // Classes Register Consistant Modals
 function selectindexConsistantFunction(event){
    console.log("hi")
    var options = document.getElementById("registerSelect")
    options.selectedIndex = 1;
    options[1].disabled = true;
    options[2].disabled = true;
    
    document.getElementById('personal-training').style.display="none";
    document.getElementById('online-class').style.display="none";
    document.getElementById('21-consistent').style.display="block";
    
   }
   let b = document.getElementById("registerconsistantClass").addEventListener("click", selectindexConsistantFunction);

// Classes Register Modals
   function selectindexFunction(event){
    console.log("hi")
    // document.getElementById("regiserSelect").selectedIndex = 2
    var options = document.getElementById("registerSelect")
    options.selectedIndex = 2;
    options[0].disabled = true;
    options[1].disabled = true;

    document.getElementById('personal-training').style.display="none";
    document.getElementById('21-consistent').style.display="none";
    document.getElementById('online-class').style.display="block";

   }
   let c = document.getElementById("registeronlineClass").addEventListener("click", selectindexFunction);




   document.getElementById("registerbtn").addEventListener("click", function () {
    var options = document.getElementById("registerSelect")
    options[0].disabled = false;
    options[1].disabled = false;
    options[2].disabled = false;
    options.selectedIndex = 0;
    document.getElementById('personal-training').style.display="block";
    document.getElementById('21-consistent').style.display="none";
    document.getElementById('online-class').style.display="none";
   });

