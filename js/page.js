var headerHeight = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > headerHeight) {
    $('.navbar-custom').addClass('navbar-fixed-top');
  } else {
    $('.navbar-custom').removeClass('navbar-fixed-top');
  }
});