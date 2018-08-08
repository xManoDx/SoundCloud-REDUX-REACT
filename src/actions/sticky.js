window.onscroll = function() {myFunction()};

// Get the navbar
var filters = document.getElementById("filters_bar");

// Get the offset position of the navbar
var stickybar = filters.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickybar) {
    filters.classList.add("stickybar")
  } else {
    filters.classList.remove("stickybar");
  }
}
