(function($) {
    "use strict";

    // PreLoader 
    $(window).on('load',function() {
      $("#loading").delay(4000).fadeOut(2000);
      // $("#loading").fadeOut(10000);
    })

    /* TOP Menu Stick  */
    $(window).on('scroll',function() {    
      var scroll = $(window).scrollTop();
      if (scroll < 600) {
       $(".menubar-area").removeClass("sticky-header");
      }else{
       $(".menubar-area").addClass("sticky-header");
      }
    });

    // Slick SLider
    $('.Brands').slick({
        dots: false,
        arrows:false,
        lazyLoad:'ondemand',
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow:3,
              slidesToScroll: 1
            }
          }
        ]
      });
    

      // delegate: 'a', // child items selector, by clicking on it popup will open
      // type: 'image'
       
      //Portfolio data filter
      var $sam = $('.port-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth:1,
        }
      });

      $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $sam.isotope({ filter: filterValue });
      });

      $('.filter-button-group .btn').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });


      $('.port-active').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',        
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
      });



      // ScrollUp Plugin 
      $(function () {
        $.scrollUp({
            scrollName: 'scrollUp',      // Element ID
            scrollDistance: 300,         // Distance from top/bottom before showing element (px)
            scrollFrom: 'top',           // 'top' or 'bottom'
            scrollSpeed: 600,            // Speed back to top (ms)
            easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
            animation: 'fade',           // Fade, slide, none
            animationSpeed: 200,         // Animation speed (ms)
            scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
            scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
            scrollText: '<i class="fas fa-angle-up"></i>', // Text for element, can contain HTML
            scrollTitle: false,          // Set a custom <a> title if required.
            scrollImg: false,            // Set true to use image
            activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647           // Z-Index for the overlay
        });

        // wow js 
        new WOW().init();
    });
  })(jQuery);
