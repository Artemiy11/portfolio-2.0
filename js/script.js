import lines from './modules/lines';
import menu from './modules/menu';
import works from './modules/works';
import form from './modules/form';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menu();
    lines();
    works();
    form();
    modal();
});