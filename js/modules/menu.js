import jQuery from 'jquery';

const menu = () => {
    const ham = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu__mobile'),
          menuContent = document.querySelector('.menu ul'),
          link = document.querySelectorAll('.menu__link');

    ham.addEventListener('click', () => {
        if (!ham.classList.contains('ham-active')) {
            ham.classList.add('ham-active');
            menu.style.transform = 'translateY(0px)';
            menuContent.classList.add('menu__ul-active');

        } else {
                ham.classList.remove('ham-active');
                menu.style.transform = 'translateY(-200px)';
                menuContent.classList.remove('menu__ul-active');
            }
        });

        link.forEach(item => {
            item.addEventListener('click', () => {
                ham.classList.remove('ham-active');
                menu.style.transform = 'translateY(-200px)';
                menuContent.classList.remove('menu__ul-active');
            });
    })

    jQuery(function ($) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#menu').addClass('fixed');
            }
            else if ($(this).scrollTop() < 500) {
                $('#menu').removeClass('fixed');
            }
        });
    });

    jQuery("a[href^='#']").click(function(){
        var _href = jQuery(this).attr("href");
        jQuery("html, body").animate({scrollTop: jQuery(_href).offset().top+"px"});
        return false;
    });
};

export default menu;