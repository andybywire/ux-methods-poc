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
(()=> {
  var dropdowns = document.getElementsByClassName("dropdown-toggle");
  for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener('click', function () {this.classList.toggle("show")});
  };
})();

// Wide Nav Dropdowns
// use querySelector() for this instead?
(()=> {
  var dropdowns = document.getElementsByClassName("wide-dropdown-toggle");
  var main = document.getElementsByTagName("main");
  for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener('click', function () {
        this.parentNode.classList.toggle("show");
      });
  };
  main[0].addEventListener('click', function () {
    this.classList.add("test");
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].parentNode.classList.remove("show");
    };
  });
})()