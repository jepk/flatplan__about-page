'use strict';

function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function later() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

$(function () {

    var options = {

        offsetSide: 'top',
        classes: {
            clone: 'banner--clone',
            stick: 'banner--stick',
            unstick: 'banner--unstick'
        }
    };

    var banner = new Headhesive('.banner', options);

    var body = $('body');
    var lastScrollTop = 0;

    var $scrollButton = $('.js-scroll-to-project-button-container')
    if ($scrollButton[0]) {
        var scrollButtonOffsetTop = $('.js-scroll-to-project-button-container').offset().top;
    }

    $(window).scroll(throttle(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            body.addClass('downscroll');
        } else {
            body.removeClass('downscroll');
        }
        if ($scrollButton[0]) {
            if (st > scrollButtonOffsetTop) {
                body.addClass('show-play-button');
            } else {
                body.removeClass('show-play-button');
            }
        }
        lastScrollTop = st;
    }, 200));
});