// Change style of menu on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var menu = document.getElementById("Menu");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        menu.className = "ls-bar" + " ls-card" + " ls-animate-top" + " ls-white";
    } else {
        menu.className = menu.className.replace(" ls-card ls-animate-top ls-white", "");
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

// Managers navigation using keys
document.addEventListener('keydown',function(event){
    if(window.location.pathname == "/index.html") {
        if(event.code === 'Space') {
            location="/title.html"
        }

    }

})

