$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 45) {
    $("nav").addClass("compact");
    $("div.nav-wrap").addClass("compact");
    $("li.title").addClass("compact");
    $("span.full").addClass("compact");
    $("nav.top-wrap").addClass("compact");

  } else {
    $("nav").removeClass("compact");
    $("div.nav-wrap").removeClass("compact");
    $("li.title").removeClass("compact"); 
    $("span.full").removeClass("compact");   
    $("nav.top-wrap").removeClass("compact");    
  }
});
