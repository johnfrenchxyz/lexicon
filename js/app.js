$(document).foundation();

// Menu
$('.menu-trigger').on('click', function(e) {
    e.preventDefault();
    $('nav ul').slideToggle(200);
    $('nav ul').toggleClass('is-open');
    $('nav ul li a').on('click', function(){
        $('nav ul').hide();
    });
});

$(window).on('resize', function() {
    if (Foundation.MediaQuery.atLeast('medium')) {
        $('nav ul').css('display', 'block');
    } else {
        $('nav ul').css('display', 'none');
    }
});

// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
      }, 500);
        return false;
      }
    }
  });
});
