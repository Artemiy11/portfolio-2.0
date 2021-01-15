
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    navPosition: 'bottom',
    nav: true
  });

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev')
}

document.querySelector('.next').onclick = function () {
    slider.goTo('next')
}

$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
    
    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });

    // masked form
    $('input[name=phone]').mask("+ 7 (999) 999-9999");

    // pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 900) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                email: {
                  required: true,
                  email: true
                },
                phone: "required",
              },
            messages: {
                name: {
                  required: "Пожалуйста, ввидите своё имя",
                  minlength: jQuery.validator.format("Введите больше {0} символов!")
                },
                email: {
                    required: "Пожалуйста, ввидите свою почту",
                    email: "Неправильно введён адрес почты"
                  },
                phone: {
                    required: "Пожалуйста, ввидите свой телефон",
                  }
              }
        });
    }

    valideForms('#order form');
    valideForms('#consultation-form');
    valideForms('#consultation form');

    $("form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('#thanks, .overlay').fadeIn('slow');
            $("form").trigger("reset");
        });
        return false;
    });

    // init WOW
    new WOW().init();

    
});
