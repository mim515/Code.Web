(function ($) {
  "use strict";

  // burger menu

  $("#menu-toggle").click(function () {
    $(this).toggleClass("open");
  });

  // burger menu

  $(document).ready(function () {
    $(".full-landing-image").ripples({
      resolution: 150,
      peturbance: 0.04,
    });
  });

  // Ripple effect end

  // cursor effect

  // cursor effect

  // sticky menu

  // sticky menu

  // typing effect
  if ($("#typed").length) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",

      typeSpeed: 30,
      loop: true,
      backSpeed: 30,
      startDelay: 30,
      smartBackspace: true,
    });
  }
  // typing effect end

  $(".first-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 8,
      },
      600: {
        items: 8,
      },

      1800: {
        items: 8,
      },
    },
  });

  $(".second-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    navText: [
      "<div class='left'><i class='fa fa-arrow-left'></i></div>",
      "<div class='right'><i class='fa fa-arrow-right'></i></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Ripple effect

  // isotop plugin area
  $(window).on("load", function () {
    // Activate isotope in container
    $(".gallery_item").imagesLoaded(function () {
      $(".gallery_item").isotope({
        itemSelector: ".single_item",
        layoutMode: "masonry",
      });
    });

    // Add isotope click function
    $(".gallery_filter li").on("click", function () {
      $(".gallery_filter li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $(".gallery_item").isotope({
        filter: selector,
        animationOptions: {
          duration: 450,
          easing: "linear",
          queue: false,
        },
      });
      return false;
    });
  });
  // isotop plugin area

   // map area
   $(document).ready(function () {
     $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
       disableOn: 700,
       type: "iframe",
       mainClass: "mfp-fade",
       removalDelay: 160,
       preloader: false,

       fixedContentPos: false,
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-29"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "3"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#abd3d1"
            },
            {
                "visibility": "on"
            }
        ]
    }
     });
   });
   // map area

  // testimonial slider

  $(".testimonial").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 70,
    nav: true,
    smartSpeed: 400,
    autoplay: false,
    autoplayTimeout: 3000,
    navText: [
      "<div class='left'><i class='fa fa-angle-left'></i></div>",
      "<div class='right'><i class='fa fa-angle-right'></i></div>",
    ],
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      500: {
        items: 1,
        center: false,
      },
      767: {
        items: 2,
        center: false,
      },
      1100: {
        items: 3,
        center: true,
      },
    },
  });

  // testimonial slider

  // client logo slider

  $(".client-logo").owlCarousel({
    responsiveClass: true,
    items: 2,
    loop: true,
    margin: 70,
    nav: false,
    smartSpeed: 400,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // client logo slider

  // click mobile

  $(".feature-note .plus-icon").on("click", function () {
    if ($(this).parents(".feature-note").hasClass("show-cont")) {
      $(this).parents(".feature-note").removeClass("show-cont");
    } else {
      $(this).parents(".feature-note").addClass("show-cont");
    }
  });
  $(".feature-note-2 .plus-icon").on("click", function () {
    if ($(this).parents(".feature-note-2").hasClass("show-cont-2")) {
      $(this).parents(".feature-note-2").removeClass("show-cont-2");
    } else {
      $(this).parents(".feature-note-2").addClass("show-cont-2");
    }
  });
  $(".feature-note-3 .plus-icon").on("click", function () {
    if ($(this).parents(".feature-note-3").hasClass("show-cont-3")) {
      $(this).parents(".feature-note-3").removeClass("show-cont-3");
    } else {
      $(this).parents(".feature-note-3").addClass("show-cont-3");
    }
  });
  $(".feature-note-4 .plus-icon").on("click", function () {
    if ($(this).parents(".feature-note-4").hasClass("show-cont-4")) {
      $(this).parents(".feature-note-4").removeClass("show-cont-4");
    } else {
      $(this).parents(".feature-note-4").addClass("show-cont-4");
    }
  });

  // click mobile

  // magnify popup
  $(document).ready(function () {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  });

  // magnify popup

  //customer testimonial

  $(".customer-testimonial").owlCarousel({
    responsiveClass: true,
    items: 6,
    margin: 0,
    nav: true,
    loop: true,
    smartSpeed: 400,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      "<div class='left'><i class='fa fa-long-arrow-left'></i></div>",
      "<div class='right'><i class='fa fa-long-arrow-right'></i></div>",
    ],
    responsive: {
      1000: {
        items: 1,
      },
      0: {
        items: 1,
      },
    },
  });

  //customer testimonial

  //customer testimonial

  $(".gallery").owlCarousel({
    responsiveClass: true,
    items: 6,
    margin: 30,
    nav: true,
    loop: true,
    smartSpeed: 400,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      "<div class='left'><i class='fa fa-chevron-left'></i></div>",
      "<div class='right'><i class='fa fa-chevron-right'></i></div>",
    ],
    responsive: {
      1200: {
        items: 5,
      },
      1000: {
        items: 4,
      },
      600: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  //customer testimonial
  //menu search
  $(".header-area .search-box .search-btn ").on("click", function () {
    if ($(this).parents(".search-box").hasClass("show-search")) {
      $(this).parents(".search-box").removeClass("show-search");
    } else {
      $(this).parents(".search-box").addClass("show-search");
    }
  });

  $(".header-area-2 .search-box .search-btn ").on("click", function () {
    if ($(this).parents(".search-box").hasClass("show-search")) {
      $(this).parents(".search-box").removeClass("show-search");
    } else {
      $(this).parents(".search-box").addClass("show-search");
    }
  });
  //menu search

  //countdown
  if ($("#typed").length) {
    $(".form_datetime").datetimepicker({
      format: "dd MM yyyy - hh:ii",
    });
  }
  //countdown
})(jQuery);
