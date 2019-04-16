(function ($) {

	new WOW().init();
	
	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 100
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top- 100
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	//owl carousel
	$('#owl-works').owlCarousel({
			items : 4,
			navigation	: true,
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [980,5],
            itemsTablet: [768,5],
            itemsTabletSmall: [550,2],
            itemsMobile : [480,2],
        });
	
	
	//parallax
        if ($('.parallax').length)
        {
			$(window).stellar({
				responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }
	

	//////////////	
	//owl carousel
	$('#owl-blog').owlCarousel({
		items : 3,
		navigation: true,
		navigationText: ['<', '>'],
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [980,5],
		itemsTablet: [768,5],
		itemsTabletSmall: [550,2],
		itemsMobile : [480,1],
	});
	
    
    ///// Carousal Card in section  about ////
})(jQuery);

jQuery(document).ready(function($) {

	var feedbackSlider = jQuery('.feedback-slider');
	feedbackSlider.owlCarousel({
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsTabletSmall: [550,1],
		itemsMobile : [480,1],
	});

	feedbackSlider.on("translate.owl.carousel", function(){
		$(".feedback-slider-item h3").removeClass("animated fadeIn").css("opacity", "0");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").removeClass("animated zoomIn").css("opacity", "0");
	});

	feedbackSlider.on("translated.owl.carousel", function(){
		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").addClass("animated zoomIn").css("opacity", "1");
	});
	feedbackSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
		var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
		var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('span').attr('data-rating');
		var nextRating = $(property.target).find(".owl-item").eq(current).next().find('span').attr('data-rating');
		$('.thumb-prev').find('img').attr('src', prevThumb);
		$('.thumb-next').find('img').attr('src', nextThumb);
		$('.thumb-prev').find('span').next().html(prevRating + '<i class="fa fa-star"></i>');
		$('.thumb-next').find('span').next().html(nextRating + '<i class="fa fa-star"></i>');
	});
	$('.thumb-next').on('click', function() {
		feedbackSlider.trigger('next.owl.carousel', [300]);
		return false;
	});
	$('.thumb-prev').on('click', function() {
		feedbackSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});
    
    
     var colorSheets = [
            {
                color: "#82b965",
                title: "Default",
                href: "./css/color-default.css"
            },
            {
                color: "#ff463a",
                title: "Switch to Red",
                href: "./css/color-red.css"
            },
            {
                color: "#4bda28",
                title: "Switch to Green",
                href: "./css/color-green.css"
            },
            {
                color: "#4650dc",
                title: "Switch to Blue",
                href: "./css/color-blue.css"
            },
            {
                color: "#f41c54",
                title: "Switch to Magenta",
                href: "./css/color-magenta.css"
            }
            
        ];
        ColorSwitcher.init(colorSheets);
	
}); //end ready

// ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
      
      
    typed.typed({
      strings: ["Alex Smith.", "Designer.", "Developer.", "Freelancer.", "Photographer"],
      typeSpeed: 100,
      loop: true,
    });
  });

//=============================== Carosal Blog ============//

 