//Hamburger icon 
function hamburger() {
    var x = document.getElementById("topNavbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
$(document).ready(function () {
  
    $('.icon').on('click', function () {
  
      $('.animated-icon').toggleClass('open');
    });
});

// Scroll to top button
var scrollToTopBtn = document.querySelector(".toTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / scrollTotal ) > 0.50) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


