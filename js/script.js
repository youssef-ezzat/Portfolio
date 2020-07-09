  
$(window).scroll(function() {
    var sticky = $('.stick'),
      scroll = $(window).scrollTop();
     
    if (scroll >= 400) { 
      sticky.addClass('fixed'); }
    else { 
     sticky.removeClass('fixed');
  
  }
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


$(document).ready(function() {$(".cur").hover(function() {$(this).stop().animate({right: "-80"}, "medium");}, function() {$(this).stop().animate({right: "-330"}, "medium");}, 100);}); 
