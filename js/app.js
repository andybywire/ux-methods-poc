// No jQuery! Refactor for vanilla js
/*$(window).scroll(function() {    
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
});*/

// Mobile Nav
// Open and close mobile menu
document.getElementById("openMenu").addEventListener("click", function () {
  document.getElementById("globalNav").style.width = "100%"
  document.getElementById("navint").classList.add("open")
});
document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("globalNav").style.width = "0"
  document.getElementById("navint").classList.remove("open")
});

// Mobile Nav Dropdowns
document.getElementById("disciplines").addEventListener("click", function () {this.classList.toggle("show")});
document.getElementById("methods").addEventListener("click", function () {this.classList.toggle("show")});
document.getElementById("outcomes").addEventListener("click", function () {this.classList.toggle("show")});
document.getElementById("recent").addEventListener("click", function () {this.classList.toggle("show")});

// Home Page Nav Dropdowns
document.getElementById("home-disciplines").addEventListener("click", 
  function () {this.classList.toggle("show")});
document.getElementById("home-methods").addEventListener("click", function () {this.classList.toggle("show")});