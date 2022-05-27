// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("Menu");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "ls-bar" + " ls-card" + " ls-animate-top" + " ls-white";
    } else {
        navbar.className = navbar.className.replace(" ls-card ls-animate-top ls-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("MenuMobile");
  if (x.className.indexOf("ls-show") == -1) {
      x.className += " ls-show";
  } else {
      x.className = x.className.replace(" ls-show", "");
  }
}

