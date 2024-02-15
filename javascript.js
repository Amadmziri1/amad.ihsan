$(document).ready(function () {
  var spanText = function (text) {
    var string = $(text).text();
    var spaned = "";
    for (var i = 0; i < string.length; i++) {
      if (string.substring(i, i + 1) === " ")
        spaned += string.substring(i, i + 1);
      else spaned += "<span>" + string.substring(i, i + 1) + "</span>";
    }
    $(text).html(spaned);
  };

  var headline = $("h1");

  spanText(headline);

  //******************************************************* */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".My-Creative-Vision h3").addClass("ac");
    }
    if ($(this).scrollTop() > 500) {
      $(".My-Creative-Vision h2").addClass("ac");
    }
  });
});


  //******************************************************* */

  // not able right click my site
  // document.addEventListener("contextmenu", (event) => event.preventDefault());

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

    // Special case: Check if the URL ends with "/about" to activate the "About" link
    if (windowPathname === "/about" && navLinkPathname === "/about.html") {
      navLinkEl.classList.add("active");
    }

    // Special case: Check if the URL ends with "/work" to activate the "Work" link
    if (windowPathname === "/work" && navLinkPathname === "/work.html") {
      navLinkEl.classList.add("active");
    }
  });

  $("header #list-icon").click(function (event) {
    // Toggle the 'show' class on the 'nav ul'
    $("nav ul").addClass("show");
    $("#close-icon").css("display", "block");
    event.preventDefault();
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
