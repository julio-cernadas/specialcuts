"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*---------------------------------------------
Template name :  beautain
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

    01: Main Menu
    02: Sticky Nav
    03: Background Image
    04: Check Data
    05: Changing svg color
    06: Google map
    07: Back to top button
    08: Offcanvas Triggar
    09: Owl Carousel
    10: Popup Video
    11: Preloader
    12: Countdown Timer
    13: Counter Up
    14: Elevate Zoom Active
    15: Increase/Decrease Product Quantity
    16: Pricing Active Class
    17: Search Toggle
    18: Offcanvas Triggar
    19: Masonry
    20: Service Point
    21: Contact Form


----------------------------------------------*/
(function ($) {
  "use strict";
  /*===================
  01: Main Menu
  =====================*/

  $('ul.nav li a[href="#"]').on('click', function (event) {
    event.preventDefault();
  });
  /* Menu Maker */

  $(".nav-wrapper").menumaker({
    title: '<span></span>',
    format: "multitoggle"
  });
  $($(window)).on('scroll', function () {
    if (!$('ul.nav').hasClass('open')) {
      $('#menu-button').removeClass('menu-opened');
    }

    ;
  });

  function mobileMenu() {
    if ($(window).width() < 992) {
      // $(".nav-wrapper").find("ul.nav").show()
      $(".nav-wrapper .nav-wrap-inner").hide();
    } else {
      $(".nav-wrapper .nav-wrap-inner").show();
    }
  } // $(window).on("resize", () => mobileMenu());


  $(window).on("resize", function () {
    mobileMenu();
  });
  mobileMenu();
  /* Menu Responsive in Small Device */

  function subMenu() {
    var $subMain = $('.nav-wrapper .nav > li > ul');
    var $subSub = $('.nav-wrapper .nav > li > ul ul');
    $subMain.each(function () {
      if ($(window).width() > 991) {
        if ($(this).offset().left + $(this).width() > $(window).width()) {
          $(this).css({
            'left': 'auto',
            'right': '0'
          });
        }
      }
    });
    $subSub.each(function () {
      if ($(window).width() > 991) {
        if ($(this).offset().left + $(this).width() > $(window).width()) {
          $(this).css({
            'left': 'auto',
            'right': '100%'
          });
        }
      }
    });
  }

  subMenu();
  $(window).resize(subMenu);
  /*========================
  02: Sticky Nav
  ==========================*/

  // $(window).on("scroll", function () {
  //   var scroll = $(window).scrollTop();
  //
  //   if (scroll < 180) {
  //     $(".header-main.love-sticky").removeClass("sticky fixed-top fadeInDown animated");
  //   } else {
  //     $(".header-main.love-sticky").addClass("sticky fixed-top fadeInDown animated");
  //   }
  // });
  /*========================
  03: Background Image
  ==========================*/

  var $bgImg = $('[data-bg-img]');
  $bgImg.css('background-image', function () {
    return 'url("' + $(this).data('bg-img') + '")';
  }).removeAttr('data-bg-img').addClass('bg-img');
  /*==================================
  04: Check Data
  ====================================*/

  var checkData = function checkData(data, value) {
    return typeof data === 'undefined' ? value : data;
  };
  /*==================================
  05: Changing svg color
  ====================================*/


  $(window).on('load', function () {
    jQuery('img.svg').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg'); // Add replaced image's ID to the new SVG

        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        } // Add replaced image's classes to the new SVG


        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        } // Remove any invalid XML tags as per http://validator.w3.org


        $svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, else we gonna set it if we can.

        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
        } // Replace image with new SVG


        $img.replaceWith($svg);
      }, 'xml');
    });
  });
  /*==================================
  06: Google map
  ====================================*/

  var style = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#C7E5FD"
    }, {
      "lightness": 17
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
      "color": "#f5f5f5"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#CECECE"
    }, {
      "lightness": 17
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#CECECE"
    }, {
      "lightness": 29
    }, {
      "weight": 0.2
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": "#ffffff"
    }, {
      "lightness": 18
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
      "color": "#ffffff"
    }, {
      "lightness": 16
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#f5f5f5"
    }, {
      "lightness": 21
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
      "color": "#dedede"
    }, {
      "lightness": 21
    }]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#ffffff"
    }, {
      "lightness": 16
    }]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
      "saturation": 36
    }, {
      "color": "#333333"
    }, {
      "lightness": 40
    }]
  }, {
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
      "color": "#f2f2f2"
    }, {
      "lightness": 19
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#fefefe"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#fefefe"
    }, {
      "lightness": 17
    }, {
      "weight": 1.2
    }]
  }];
  var $map = $('[data-trigger="map"]'),
      $mapOps;

  if ($map.length) {
    // Map Options
    $mapOps = $map.data('map-options'); // Map Initialization

    window.initMap = function () {
      $map.css('min-height', '600px');
      $map.each(function () {
        var $t = $(this),
            map,
            lat,
            lng,
            zoom;
        $mapOps = $t.data('map-options');
        lat = parseFloat($mapOps.latitude, 10);
        lng = parseFloat($mapOps.longitude, 10);
        zoom = parseFloat($mapOps.zoom, 10);
        map = new google.maps.Map($t[0], {
          center: {
            lat: lat,
            lng: lng
          },
          zoom: zoom,
          scrollwheel: false,
          disableDefaultUI: true,
          zoomControl: true,
          styles: style
        });
        map = new google.maps.Marker({
          position: {
            lat: lat,
            lng: lng
          },
          map: map,
          animation: google.maps.Animation.DROP,
          draggable: false // icon: 'assets/img/map-marker.png'

        });
      });
    };

    initMap();
  }

  ;
  /*============================================
  07: Back to top button
  ==============================================*/

  var $backToTopBtn = $('.back-to-top');

  if ($backToTopBtn.length) {
    var scrollTrigger = 400,
        // px
    backToTop = function backToTop() {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > scrollTrigger) {
        $backToTopBtn.addClass('show');
      } else {
        $backToTopBtn.removeClass('show');
      }
    };

    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $backToTopBtn.on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
  /*==================================
  08: Offcanvas Triggar
  ====================================*/


  $('.offcanvas-trigger').on('click', function () {
    $('.offcanvas-wrapper, .offcanvas-overlay').addClass('show');
  });
  $('.offcanvas-overlay, .offcanvas-close').on('click', function () {
    $('.offcanvas-wrapper, .offcanvas-overlay').removeClass('show');
  });
  /*==================================
  09: Owl Carousel
  ====================================*/

  var $owlCarousel = $('.bt-carousel');
  $owlCarousel.each(function () {
    var $t = $(this);
    $t.owlCarousel({
      items: checkData($t.data('owl-items'), 1),
      margin: checkData($t.data('owl-margin'), 0),
      loop: checkData($t.data('owl-loop'), true),
      smartSpeed: 450,
      autoplay: checkData($t.data('owl-autoplay'), true),
      autoplayTimeout: checkData($t.data('owl-speed'), 10000),
      center: checkData($t.data('owl-center'), false),
      animateIn: checkData($t.data('owl-animate-in'), false),
      animateOut: checkData($t.data('owl-animate-out'), false),
      nav: checkData($t.data('owl-nav'), false),
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="15.676" height="8.564" viewBox="0 0 15.676 8.564" class="svg replaced-svg"><path id="long-arrow-left" d="M15.187,297.225H2.687l2.342,2.342a.713.713,0,0,1-1.009,1.009L1.887,298.44.464,297.014a.712.712,0,0,1,0-1L4.02,292.45a.713.713,0,1,1,1.009,1.009L2.682,295.8H15.224a.713.713,0,1,1-.037,1.425Z" transform="translate(-0.257 -292.234)" fill="#173b61"></path> </svg>', '<svg xmlns="http://www.w3.org/2000/svg" id="long-arrow-right" width="15.676" height="8.563" viewBox="0 0 15.676 8.563" class="svg replaced-svg"><path id="path9413" d="M1,297.225H13.5l-2.342,2.342a.713.713,0,0,0,1.009,1.009L14.3,298.44l1.424-1.426a.712.712,0,0,0,0-1l-3.557-3.561a.713.713,0,1,0-1.009,1.009l2.347,2.342H.965A.713.713,0,1,0,1,297.225Z" transform="translate(-0.257 -292.234)" fill="#173b61"></path></svg>'],
      dots: checkData($t.data('owl-dots'), false),
      stagePadding: checkData($t.data('owl-stage-padding'), false),
      autoWidth: checkData($t.data('owl-auto-width'), false),
      responsive: checkData($t.data('owl-responsive'), {})
    });
  }); //Init the carousel

  initSlider();

  function initSlider() {
    $(".banner-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 250,
      autoplayTimeout: 5000,
      nav: true,
      dots: false,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="15.676" height="8.564" viewBox="0 0 15.676 8.564" class="svg replaced-svg"><path id="long-arrow-left" d="M15.187,297.225H2.687l2.342,2.342a.713.713,0,0,1-1.009,1.009L1.887,298.44.464,297.014a.712.712,0,0,1,0-1L4.02,292.45a.713.713,0,1,1,1.009,1.009L2.682,295.8H15.224a.713.713,0,1,1-.037,1.425Z" transform="translate(-0.257 -292.234)" fill="#173b61"></path> </svg>', '<svg xmlns="http://www.w3.org/2000/svg" id="long-arrow-right" width="15.676" height="8.563" viewBox="0 0 15.676 8.563" class="svg replaced-svg"><path id="path9413" d="M1,297.225H13.5l-2.342,2.342a.713.713,0,0,0,1.009,1.009L14.3,298.44l1.424-1.426a.712.712,0,0,0,0-1l-3.557-3.561a.713.713,0,1,0-1.009,1.009l2.347,2.342H.965A.713.713,0,1,0,1,297.225Z" transform="translate(-0.257 -292.234)" fill="#173b61"></path></svg>'],
      onInitialized: startProgressBar,
      onTranslate: resetProgressBar,
      onTranslated: startProgressBar
    });
  }

  function startProgressBar() {
    $(".circular-progress circle:nth-of-type(2)").css({
      'stroke-dashoffset': 0,
      transition: "4000ms linear"
    });
  }

  function resetProgressBar() {
    $(".circular-progress circle:nth-of-type(2)").css({
      'stroke-dashoffset': 251.429,
      transition: "0s"
    });
  } //Slider Nav Push Icon


  $('.banner-slider.owl-carousel').find('.owl-nav .owl-next').append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="title" role="graphic" class="circular-progress"><circle cx="50" cy="50" r="40"></circle><circle cx="50" cy="50" r="40" id="pct-ind"></circle></svg>');
  $('.testimonial-carousel2.owl-carousel').find('.owl-nav .owl-prev').html('<img src="assets/img/icon/left-angle.svg" alt="" class="svg">');
  $('.testimonial-carousel2.owl-carousel').find('.owl-nav .owl-next').html('<img src="assets/img/icon/right-angle.svg" alt="" class="svg">'); //Banner slider 2 bottom shape

  $('.banner-slider2.owl-carousel').append('<img src="assets/img/bg/bottom_shape.svg" alt="" class="svg bottom-shape">');
  /*==================================
  10: Popup Video
  ====================================*/

  $(".video-btn").magnificPopup({
    type: "video"
  });
  $(".gallery-link").magnificPopup({
    gallery: {
      enabled: true
    },
    type: "image"
  });
  /*==================================
  11: Preloader
  ====================================*/

  $(window).on('load', function () {
    $('.preloader').fadeOut(1000);
  });
  /*==================================
  12: Countdown Timer
  ====================================*/

  if ($('#countdown').length) {
    $('#countdown').countdown({
      date: '08/16/2021 23:59:59'
    });
  }
  /*==================================
  13: Counter Up
  ====================================*/


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  /*==================================
  14: Elevate Zoom Active
  ====================================*/

  if ($('#elevate-zoom').length) {
    //initiate the plugin and pass the id of the div containing gallery images
    $("#img_01").elevateZoom(_defineProperty({
      gallery: 'gal1',
      cursor: 'pointer',
      galleryActiveClass: 'active',
      imageCrossfade: true,
      loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif',
      zoomType: "inner"
    }, "cursor", "crosshair")); //pass the images to Fancybox

    $("#img_01").bind("click", function (e) {
      var ez = $('#img_01').data('elevateZoom');
      $.fancybox(ez.getGalleryList());
      return false;
    });
  }
  /*==================================
  15: Increase/Decrease Product Quantity
  ====================================*/

  /* 15.1: Increase */


  $('.plus').on('click', function () {
    var $qty = $(this).parent().find('input');
    var currentVal = parseInt($qty.val());

    if (!isNaN(currentVal)) {
      $qty.val(currentVal + 1);
    }
  }); // /* 15.2: Decrease */

  $('.minus').on('click', function () {
    var $qty = $(this).parent().find('input');
    var currentVal = parseInt($qty.val());

    if (!isNaN(currentVal) && currentVal > 1) {
      $qty.val(currentVal - 1);
    }
  });
  /*==================================
  16: Pricing Active Class
  ====================================*/

  // $('.single-price, .single-feature, .single-specialist, .single-service.service-box').on('mouseenter', function () {
  //   $('.single-price, .single-feature, .single-specialist, .single-service.service-box').removeClass('active');
  //   $(this).addClass('active');
  // });
  /*==================================
  17: Search Toggle
  ====================================*/

  $('.search-toggle-btn').on('click', function () {
    $('.full-page-search').addClass('show');
  });
  $('.search-close-btn').on('click', function () {
    $('.full-page-search').removeClass('show');
  });
  /*==================================
  18: Offcanvas Triggar
  ====================================*/

  $('.offcanvas-trigger').on('click', function () {
    $('.offcanvas-wrapper, .offcanvas-overlay').addClass('show');
  });
  $('.offcanvas-overlay, .offcanvas-close').on('click', function () {
    $('.offcanvas-wrapper, .offcanvas-overlay').removeClass('show');
  });
  /*==================================
  19: Masonry
  ====================================*/

  jQuery(window).on('load', function () {
    $('#grid').isotope({
      layoutMode: 'packery',
      itemSelector: '.grid-item'
    });
  });
  /*==================================
  20: Service Point
  ====================================*/

  $('.service_point-map-img').find('.l_info').on('mouseenter', function () {
    $('.service_point-map-img').find('.l_info').removeClass('active');
    $(this).addClass('active');
  });
  /*==================================
  21: Contact Form
  ====================================*/

  $('.contact-form-wrap, .appointment-form-wrap').on('submit', 'form', function (e) {
    e.preventDefault();
    var $el = $(this);
    $.post($el.attr('action'), $el.serialize(), function (res) {
      res = $.parseJSON(res);
      $el.parent('.contact-form-wrap, .appointment-form-wrap').find('.form-response').html('<span>' + res[1] + '</span>');
    });
  });
})(jQuery);