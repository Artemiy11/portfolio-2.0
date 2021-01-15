import jQuery from 'jquery';

const lines = () => {
    const activeLine = document.querySelectorAll('.skills_item-active'),
    percentField = document.querySelectorAll('.skills_percent');

    jQuery(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            activeLine.forEach((item, i) => {
                item.style.width = percentField[i].innerHTML;
            })
        }
    });
    });
};

export default lines;