// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('.header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.header').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}
// End Hide Header
/*
########################
*/
// Scroll to Top
// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('#back-top a').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
// End Scroll to Top
/*
 ####################
*/
// Scroll to Div onClick
$(".legend").click(function() {
  $('html,body').animate({
      scrollTop: $(".legenddiv").offset().top
    },
    'slow');
});
$(".legacy").click(function() {
  $('html,body').animate({
      scrollTop: $(".legacydiv").offset().top
    },
    'slow');
});
$(".impact").click(function() {
  $('html,body').animate({
      scrollTop: $(".impactdiv").offset().top
    },
    'slow');
});
// End Scroll to Div onClick