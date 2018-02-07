$(document).ready(function () {

  //
  function checkInput(elem, value) {
    $(elem).val(value);
    $(elem).attr('placeholder','');

    $(elem).focusin(function () {
      $(this).val('');
    });

    $(elem).focusout(function () {
      if ($(this).val() === '') {
        $(this).val(value);
      }
    });
  }

  //Вызов для Owl carousel
  //https://owlcarousel2.github.io/OwlCarousel2/
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    nav: true,
    navText: ["", ""],
    dots: true, 
    lazyLoad: true
  });

  //Появление меню навигации
  var p = $('.active_nav').offset().top;
  $(document).scroll(function () {

    if ($(document).scrollTop() > p) {
      $('nav').css('top', '0');
    } else {
      $('nav').css('top', '-70px');
    }
  });

});
