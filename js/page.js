var headerHeight = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > headerHeight) {
    $('.navbar-custom').addClass('navbar-fixed-top');
  } else {
    $('.navbar-custom').removeClass('navbar-fixed-top');
  }
});
function equalHeight(group) {
    var tallest = 0;
    group.each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.each(function() { $(this).height(tallest); });
}

$(document).ready(function() {
    equalHeight($(".thumbnail"));
});
