$(document).ready(function(){
  $('.feedbacks__slider').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt="arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt="arrow"></button>',
      slidesToScroll: 1,
      centerMode: false,
      slidesToShow: 1,
  });

  let headerBtn = document.querySelector('.hamburger'),
    header = document.querySelector('.header');

    headerBtn.addEventListener('touchstart', function() {
      if (headerBtn.classList.contains('hamburger_active')) {
        headerBtn.classList.remove('hamburger_active');
        header.classList.remove('header_active');
      } else {
        headerBtn.classList.add('hamburger_active');
        header.classList.add('header_active');
      }
      
    });
  });