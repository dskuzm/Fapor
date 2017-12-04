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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxjdXN0b20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBOzs7OztBQ0ZBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTtBQUN4QixNQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBWTtBQUNoQyxVQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLFVBQXRCO0FBQ0gsS0FGRDs7QUFJRixNQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0I7QUFDM0Isa0JBQVUsSUFEaUI7QUFFM0IsaUJBQVEsS0FGbUI7QUFHM0IsdUJBQWUsR0FIWTtBQUkzQiw0QkFBb0IsSUFKTztBQUszQixlQUFPLENBTG9CO0FBTTNCLG9CQUFXO0FBQ2Qsa0JBQUs7QUFDUSxxQkFBTSxJQURkO0FBRVEsc0JBQU07QUFGZDtBQURTO0FBTmdCLEtBQS9COztBQWVFLE1BQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVc7QUFDL0IsWUFBRyxFQUFFLElBQUYsRUFBUSxHQUFSLE1BQWlCLEVBQXBCLEVBQXdCO0FBQ3BCLGdCQUFJLFVBQVUsMERBQWQ7QUFDQSxnQkFBRyxRQUFRLElBQVIsQ0FBYSxFQUFFLElBQUYsRUFBUSxHQUFSLEVBQWIsQ0FBSCxFQUErQjtBQUMzQixrQkFBRSxJQUFGLEVBQVEsR0FBUixDQUFZLFlBQVosRUFBMEIsbUJBQTFCO0FBQ0Esa0JBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsT0FBakIsRUFBMEIsSUFBMUIsQ0FBZ0MsVUFBaEMsRUFBNEMsS0FBNUM7QUFDSCxhQUhELE1BR087QUFDSCxrQkFBRSxJQUFGLEVBQVEsR0FBUixDQUFZLFlBQVosRUFBMEIsaUJBQTFCO0FBQ0Esa0JBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsT0FBakIsRUFBMEIsSUFBMUIsQ0FBZ0MsVUFBaEMsRUFBNEMsSUFBNUM7QUFDSDtBQUNKLFNBVEQsTUFTTztBQUNILGNBQUUsSUFBRixFQUFRLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLFNBQTFCO0FBQ0EsY0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixPQUFqQixFQUEwQixJQUExQixDQUFnQyxVQUFoQyxFQUE0QyxJQUE1QztBQUNIO0FBQ0osS0FkRDs7QUFnQkEsTUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBVztBQUMvQixZQUFHLEVBQUUsSUFBRixFQUFRLEdBQVIsTUFBaUIsRUFBcEIsRUFBd0I7QUFDcEIsZ0JBQUksVUFBVSwwREFBZDtBQUNBLGdCQUFHLFFBQVEsSUFBUixDQUFhLEVBQUUsSUFBRixFQUFRLEdBQVIsRUFBYixDQUFILEVBQStCO0FBQzNCLGtCQUFFLElBQUYsRUFBUSxHQUFSLENBQVksWUFBWixFQUEwQixtQkFBMUI7QUFDQSxrQkFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixPQUFqQixFQUEwQixJQUExQixDQUFnQyxVQUFoQyxFQUE0QyxLQUE1QztBQUNILGFBSEQsTUFHTztBQUNILGtCQUFFLElBQUYsRUFBUSxHQUFSLENBQVksWUFBWixFQUEwQixpQkFBMUI7QUFDQSxrQkFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixPQUFqQixFQUEwQixJQUExQixDQUFnQyxVQUFoQyxFQUE0QyxJQUE1QztBQUNIO0FBQ0osU0FURCxNQVNPO0FBQ0gsY0FBRSxJQUFGLEVBQVEsR0FBUixDQUFZLFlBQVosRUFBMEIsU0FBMUI7QUFDQSxjQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLE9BQWpCLEVBQTBCLElBQTFCLENBQWdDLFVBQWhDLEVBQTRDLElBQTVDO0FBQ0g7QUFDSixLQWREOztBQWdCQSxNQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFVBQVMsQ0FBVCxFQUFZO0FBQ2pDLFVBQUUsY0FBRjtBQUNBLFVBQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsRUFBaEI7QUFDSCxLQUhEO0FBSUgsQ0F4REQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXG4vL1xuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXG5cbmltcG9ydCAgJy4vbW9kdWxlcy9jdXN0b20nO1xuXG4iLCJcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgJCgnLmJ1cmdlci1pY29uJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5uYXYnKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIG5hdlRleHQ6ZmFsc2UsXHJcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDgwMCxcclxuICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICBpdGVtczogMSxcclxuICAgICAgcmVzcG9uc2l2ZTp7XHJcblx0XHRcdDEwMDA6e1xyXG4gICAgICAgICAgICAgICAgbmF2IDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAkKCcjZW1haWwnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL14oW2EtejAtOV9cXC4tXSkrQFthLXowLTktXStcXC4oW2Etel17Miw0fVxcLik/W2Etel17Miw0fSQvaTtcclxuICAgICAgICAgICAgaWYocGF0dGVybi50ZXN0KCQodGhpcykudmFsKCkpKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdib3gtc2hhZG93JywgJzBweCAwcHggMXB4IGdyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnByb3AoIFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCAxcHggcmVkJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnByb3AoIFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYm94LXNoYWRvdycsICdpbmhlcml0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykucHJvcCggXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnI2VtYWlsJykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXowLTlfXFwuLV0pK0BbYS16MC05LV0rXFwuKFthLXpdezIsNH1cXC4pP1thLXpdezIsNH0kL2k7XHJcbiAgICAgICAgICAgIGlmKHBhdHRlcm4udGVzdCgkKHRoaXMpLnZhbCgpKSl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYm94LXNoYWRvdycsICcwcHggMHB4IDJweCBncmVlbicpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS5wcm9wKCBcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdib3gtc2hhZG93JywgJzBweCAwcHggMnB4IHJlZCcpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS5wcm9wKCBcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JveC1zaGFkb3cnLCAnaW5oZXJpdCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnByb3AoIFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7IFxyXG4gICAgXHJcbiAgICAkKCcjc3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcjZW1haWwnKS52YWwoXCJcIik7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
