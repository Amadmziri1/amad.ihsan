
$(document).ready(function () {

  
// not able right click my site 
      document.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      );



const navLinkEls = document.querySelectorAll("nav ul li a");
const windowPathname = window.location.pathname;

navLinkEls.forEach((navLinkEl) => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  // Check if the windowPathname ends with navLinkPathname or if they are exactly the same
  if (
    windowPathname.endsWith(navLinkPathname) ||
    (windowPathname === "/index.html" && navLinkPathname === "/")
  ) {
    navLinkEl.classList.add("active");
  }

  // Special case: Check if the URL ends with "/work" to activate the "Work" link
  if (windowPathname.endsWith("/work") && navLinkPathname === "/work.html") {
    navLinkEl.classList.add("active");
  }
  
});






// const navLinkEls = document.querySelectorAll("nav ul li a"); // Use correct class selector syntax
// const windowPathname = window.location.pathname;

// navLinkEls.forEach((navLinkEl) => {
//   const navLinkPathname = new URL(navLinkEl.href).pathname; // Fix syntax for creating URL object

//   if (windowPathname === navLinkPathname || windowPathname === "/index.html" && navLinkPathname === '/') {
//     navLinkEl.classList.add("active");
//   }
// });



  $("header #list-icon").click(function () {
    // Toggle the 'show' class on the 'nav ul'
    $("nav ul").addClass("show");
    $("#close-icon").css("display", "block");
  });

  $("header #close-icon").click(function () {
    // Toggle the 'show' class on the 'nav ul'
    $("nav ul").removeClass("show");
    $("#close-icon").css("display", "none");
  });

  // Function to perform actions when the window is resized
  function checkWindowSize() {
    // Get the current window width
    var windowWidth = $(window).width();

    // Check if the window width is more than 700 pixels
    if (windowWidth > 700) {
      $("#close-icon").css("display", "none");
      $("nav ul").removeClass("show");
    }
  }

  // Call the function whenever the window is resized
  $(window).resize(function () {
    checkWindowSize();
  });
});
