$(document).ready(function () {

  $('.scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
      return false;
  });

});