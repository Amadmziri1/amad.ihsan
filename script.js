$(document).ready(function () {
  //////////////////////////////////////////
  // not able right click my site
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  ///////////////////////////////////////////////////////////////
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
  ////////////////// burger and menu //////////////////
  $(".burger").click(function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("nav").slideToggle();
      $(".overlay").fadeOut(500);
    } else {
      $(this).addClass("open");
      $("nav").slideToggle();
      $(".overlay").fadeIn(500);
    }
  });
  ////////////////// SCROLLING  //////////////////
  $(window).scroll(function () {
    if ($(window).width() < 700 && $(this).scrollTop() > 40) {
      $(".burger").removeClass("open");
      $("nav").slideUp();
      $(".overlay").removeClass("active-overlay");
    }
  });
  ////////////////// AMAD IHSAN ANIMATION  //////////////////
  var spanText = function spanText(text) {
    var string = text.innerText;
    var spaned = "";
    for (var i = 0; i < string.length; i++) {
      if (string.substring(i, i + 1) === " ")
        spaned += string.substring(i, i + 1);
      else spaned += "<span>" + string.substring(i, i + 1) + "</span>";
    }
    text.innerHTML = spaned;
  };

  var headline = document.querySelector("h1");

  spanText(headline);
  //////////////////////////////////////////
  $("#forest").click(function () {
    window.location.href = "work.html#artwork-work-animation";
  });
  $("#tour").click(function () {
    window.location.href = "work.html#web-work-animation";
  });
  //////////////////////////////////////////

  // Define a single IntersectionObserver
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Perform actions based on observed elements
          if ($(entry.target).is(".description")) {
            $(".description span").addClass("animated-description");
            $(".description p").css("opacity", "1");
          } else if ($(entry.target).is(".My-Creative-Vision > h1")) {
            $(".My-Creative-Vision > h1").addClass("h-animation");
          } else if ($(entry.target).is(".me-mobile img")) {
            $(".me-mobile img").addClass("img-animation");
          } else if (
            $(entry.target).is(".My-Creative-Vision .MCV-IMG #forest img")
          ) {
            $(
              ".My-Creative-Vision .MCV-IMG #forest img , .My-Creative-Vision .MCV-IMG #forest span"
            ).addClass("img-animation");
          } else if (
            $(entry.target).is(".My-Creative-Vision .MCV-IMG #tour img")
          ) {
            $(
              ".My-Creative-Vision .MCV-IMG #tour img,.My-Creative-Vision .MCV-IMG #tour span"
            ).addClass("img-animation");
          } else if ($(entry.target).is("#art-imgs")) {
            $("#art-imgs").addClass("img-animation");
          } else if ($(entry.target).is("#web-imgs")) {
            $("#web-imgs").addClass("img-animation");
          } else if (
            $(entry.target).is(".My-Creative-Vision .MCV-IMG #forest h2")
          ) {
            $(".My-Creative-Vision .MCV-IMG #forest h2").addClass(
              "h-animation"
            );
          } else if (
            $(entry.target).is(".My-Creative-Vision .MCV-IMG #tour h2")
          ) {
            $(".My-Creative-Vision .MCV-IMG #tour h2").addClass("h-animation");
          } else if ($(entry.target).is(".tz-gallery #web-work-animation")) {
            $(".tz-gallery #web-work-animation").addClass("h-animation");
          } else if (
            $(entry.target).is(".tz-gallery #artwork-work-animation")
          ) {
            $(".tz-gallery #artwork-work-animation").addClass("h-animation");
          } else if ($(entry.target).is("#toggleButton")) {
            $("#toggleButton").addClass("more-less-animation");
          } else if ($(entry.target).is("#toggleButton2")) {
            $("#toggleButton2").addClass("more-less-animation");
          } else if ($(entry.target).is(".about-paragraph .me-cycle")) {
            $(".about-paragraph .me-cycle,.about-paragraph h1").addClass(
              "img-animation"
            );
          } else if (
            $(entry.target).is(".about-paragraph .animation-overlay")
          ) {
            $(".animation-overlay span").addClass("animated-description");
            $(".animation-overlay p").css("opacity", "1");
          }
        }
      });
    },
    { threshold: 0 }
  );

  // Observe elements
  $(
    ".me-mobile img , .description, .My-Creative-Vision > h1, .My-Creative-Vision .MCV-IMG #forest img,.My-Creative-Vision .MCV-IMG #tour img, .My-Creative-Vision .MCV-IMG #forest h2,.My-Creative-Vision .MCV-IMG #tour h2 ,.tz-gallery #web-work-animation,.tz-gallery #artwork-work-animation,#art-imgs,#web-imgs,#toggleButton,#toggleButton2,.about-paragraph .me-cycle,.about-paragraph .animation-overlay"
  ).each(function () {
    observer.observe(this);
  });
  //////////////////////////////////////////
  $("#toggleButton").click(function () {
    $(".hidden-image").toggle();
    $(this).toggleClass("expanded");
    if ($(this).hasClass("expanded")) {
      $(this)
        .find("i")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(this).find("p").text("Less");
      $(this).css("flex-direction", "column-reverse");
    } else {
      $(this)
        .find("i")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(this).find("p").text("More");
      $(this).css("flex-direction", "column");
    }
  });
  $("#toggleButton2").click(function () {
    $(".hidden-image2").toggle();
    $(this).toggleClass("expanded");
    if ($(this).hasClass("expanded")) {
      $(this)
        .find("i")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(this).find("p").text("Less");
      $(this).css("flex-direction", "column-reverse");
    } else {
      $(this)
        .find("i")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(this).find("p").text("More");
      $(this).css("flex-direction", "column");
    }
  });
});
