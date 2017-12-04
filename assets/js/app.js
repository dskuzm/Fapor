(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./modules/custom');

},{"./modules/custom":2}],2:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    $('.burger-icon').click(function () {
        $('.nav').toggleClass('nav-open');
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        navText: false,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        items: 1,
        responsive: {
            1000: {
                nav: true,
                dots: false
            }
        }
    });

    $('#email').on('input', function () {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                $(this).css('box-shadow', '0px 0px 1px green');
                $(this).siblings('input').prop("disabled", false);
            } else {
                $(this).css('box-shadow', '0px 0px 1px red');
                $(this).siblings('input').prop("disabled", true);
            }
        } else {
            $(this).css('box-shadow', 'inherit');
            $(this).siblings('input').prop("disabled", true);
        }
    });

    $('#email').on('input', function () {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                $(this).css('box-shadow', '0px 0px 2px green');
                $(this).siblings('input').prop("disabled", false);
            } else {
                $(this).css('box-shadow', '0px 0px 2px red');
                $(this).siblings('input').prop("disabled", true);
            }
        } else {
            $(this).css('box-shadow', 'inherit');
            $(this).siblings('input').prop("disabled", true);
        }
    });

    $('#submit').on('click', function (e) {
        e.preventDefault();
        $('#email').val("");
    });
});

},{}]},{},[1]);
