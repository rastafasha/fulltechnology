(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function(e) {
        $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
    });

})(jQuery);

// header fixed 
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#topNav').addClass('header2');
        } else {
            $('#topNav').removeClass('header2');
        }
    });

    $(window).scroll(function() {
        if ($(this).width() < 600) {
            $('#topNav').addClass('header3');
        }
    });
    $(window).scroll(function() {
        if ($(this).width() < 960) {
            $('#topNav').addClass('header3');
        }
    });


});


// Menu segundario

$(function() {
    $('#mostrar-menu').on('click', function() {
        $('.menu-principal').toggleClass('mostrar-menu-principal');
        $('#top').toggleClass('visible');
    });

    $('#mostrar-menu-secundario').on('click', function() {
        $('.menu-secundario').toggleClass('mostrar-menu-secundario');
    });

    $('.reproductor__play').on('click', function() {
        $(this).children('button')
            .toggleClass('play')
            .toggleClass('pause');
    });

});


(function($) {

    'use strict';

    // ------------------------------------------------------- //
    // Preloader
    // ------------------------------------------------------ //
    $(window).on("load", function() {
        $(".loader").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
    });


})(jQuery);