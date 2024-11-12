
import $ from 'jquery';

$(document).ready(function(){
    $('.category-title').click(function () {
        $('.category-title').removeClass('active');
        $('.project-item').removeClass('active');
        $(this).addClass('active');
        $(`.project-item[data-tab="${this.dataset.tab}"]`).addClass('active');
    });

    $('.hamburger').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('is-open');
    });
});