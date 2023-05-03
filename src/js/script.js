$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: false, //dots from slider
    Infinity: true,
    speed: 1200, //ms
    slidesToShow: 1, //how many slides we see in page
    adaptiveHeight: true,
    // autoplay: true,
    // autoplaySpeed: 2000
    // fade: true,
    // cssEase: 'linear'
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
}); //$-jquery