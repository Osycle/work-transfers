"use strict";

(function() {
	$(function() {



		/*AOS*/
		AOS.init({
			offset: 100,
			once: true,
			duration: 1100,
			delay: 150
		});
		setTimeout(function() { AOS.refresh(); }, 1);


		/* SELECT2 */
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				// ajax: {
				//   url: 'https://api.github.com/search/repositories',
				//   dataType: 'json'
				//   // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
				// },
				allowClear: false
			});
		
		if ( $(".js-select").length )
		$(".js-select.search-hide").select2({
			minimumResultsForSearch: Infinity
		});


		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				thumbs : {
					autoStart   : true
				},
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});
		// SMOTHSCROLL-LINK
		smoothScroll.init({
			easing: 'easeInOutCubic',
			offset: 85
		});
		/*ELEVATEZOOM*/
		if ( !checkSm() && $("[data-zoom-image]:not([group])").length )
			var x = $("[data-zoom-image]:not([group])").elevateZoom({
				scrollZoom: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				lensFadeIn: 300,
				lensFadeOut: 300,
				//cursor: 'pointer', 
				tint: true,
				tintColour: '#000',
				tintOpacity: 0.5,
				//zoomType        : "lens",
				//lensShape : "round",
				//lensSize    : 200,
				imageCrossfade: true,
				easing: true
			});


		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"wrapper-bg", // wrapper-bg black
				"theme-dark",
				//"theme-white",
				//"fullscreen",
				"listview-50",
				"fx-panels-slide-up",
				"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});









		/*FLIKITY*/
		function flickityPrevNext(className, classPrevNext) {
			var carouselWrapper = $(className);
			for (var i = 0; i < carouselWrapper.length; i++) {
				var crs = $(carouselWrapper[i]);
				var carousel = crs.find(".carousel-items");
				var carouselPrevNext = $(classPrevNext).length ? $(classPrevNext) : crs.find(".carousel-prev-next");
				var btnNext = carouselPrevNext.find(".next");
				var btnPrev = carouselPrevNext.find(".prev");
				var flkty = carousel.data("flickity");
				var selected;
				var that = this;
				btnNext.on("click", carousel, function(e) {
					e.data.flickity("next", true);
				});

				btnPrev.on("click", carousel, function(e) {
					e.data.flickity("previous", true);
				});
				// carousel.on("select.flickity-"+i, function() {
				//   console.log(this);
				//   selected = $(flkty.selectedElement);
				//   selected
				//     .siblings()
				//     .addBack()
				//     .removeClass("is-next is-prev");
				//   selected.next().addClass("is-next");
				//   selected.prev().addClass("is-prev");
				// });
			}
			return carousel;
		}
		function flickityCounter( carouselСounterСontent, counterElements ){
			try{
				counterElements =         $(counterElements);
				carouselСounterСontent =  $(carouselСounterСontent);
				var currentIndex = counterElements.siblings(".is-selected").index()+1;
				var total = counterElements.length;
				carouselСounterСontent.find(".carousel-counter-total").text( total );
				carouselСounterСontent.find(".carousel-counter-current").text( currentIndex );
			}catch(e){
				console.error(e);
			}
		}
		
		$('.button-carousel-nav').on('click', 'li', function() {
			var that = $(this);
			var selector = that.attr('data-selector');
			that.addClass("is-selected");
			that.siblings().removeClass("is-selected");
		});




		var arrowStyle = "M 10,50 L 65,100 L 70,90 L 25,50  L 70,10 L 65,0 Z";

		/*bnr-carousel*/
		if( $(".bnr-carousel .carousel-items figure").length ){
			window.bnrCarousel = $(".bnr-carousel").children(".carousel-items").flickity({
				imagesLoaded: true,
				autoPlay: 6000,
				pauseAutoPlayOnHover: true,
				arrowShape: arrowStyle,
				initialIndex: 0,
				friction: 1,
				selectedAttraction: 1,
				prevNextButtons: true,
				draggable: false,
				wrapAround: true,
				pageDots: true,
				contain: false,
				percentPosition: true,
				cellSelector: 'figure',
				cellAlign: "center"
			});
			bnrCarousel.data("flickity");
			//arrows
			//flickityPrevNext(".bnr-carousel");
			//dots
			for( var i = 0; i < $(bnrCarousel).find("figure").length; i++){
				bnrCarousel.siblings().find(".button-carousel-nav ul").append('<li role="button" class="button"></li>');
			}
			bnrCarousel.on( 'select.flickity', function( event, index ) {
				var index = $(this).find("figure.is-selected").index();
			  $(this).siblings()
			  			.find(".button-carousel-nav ul .button")
			  			.eq(index)
			  			.addClass("is-selected")
			  			.siblings()
			  			.removeClass("is-selected");
			});
	    $('.bnr-carousel .button-carousel-nav').on( 'click', 'li', function() {
	      var index = $(this).index();
	      bnrCarousel.flickity( 'select', index );
	    });
		}
		$(".bnr-carousel .carousel-items").append("<div class='container container-arrows'></div>").find(".container-arrows").append($(".bnr-carousel .carousel-items .flickity-prev-next-button"))
		



		//short-about-carousel
      $('.short-about-carousel .carousel-items').flickity({
        imagesLoaded: true,
        autoPlay: 2800,
        freeScroll: false,
        pauseAutoPlayOnHover: true,
        arrowShape: arrowStyle,
        initialIndex: 0,
        prevNextButtons: true,
        draggable: false,
        adaptiveHeight: true, 
        wrapAround: false,
        pageDots: false,
        contain: true,
        percentPosition: true,
        cellAlign: 'center'
      });
     //short-news-carousel
      $('.short-news-carousel .carousel-items').flickity({
        imagesLoaded: true,
        autoPlay: 3500,
        freeScroll: false,
        pauseAutoPlayOnHover: true,
        arrowShape: arrowStyle,
        initialIndex: 1,
        prevNextButtons: true,
        draggable: false,
        adaptiveHeight: false, 
        wrapAround: ($('.short-news-carousel .carousel-items figure').length >3),
        pageDots: true,
        contain: false,
        percentPosition: true,
        cellAlign: 'center'
      });
      //short-reviews-carousel
      $('.short-reviews-carousel .carousel-items').flickity({
        imagesLoaded: true,
        autoPlay: 3000,
        freeScroll: false,
        pauseAutoPlayOnHover: true,
        arrowShape: arrowStyle,
        initialIndex: 0,
        prevNextButtons: true,
        draggable: false,
        adaptiveHeight: true, 
        wrapAround: false,
        pageDots: true,
        contain: true,
        percentPosition: true,
        cellAlign: 'center'
      });
    //short-partners-carousel
      $('.transports-type-items').map(function( i, el ){

    	if ( $(el).find("figure").length > 3 || checkSm() )
		    	$(el).flickity({
		        imagesLoaded: true,
		        autoPlay: 3000,
		        freeScroll: false,
		        pauseAutoPlayOnHover: false,
		        arrowShape: arrowStyle,
		        initialIndex: 0,
		        prevNextButtons: true,
		        draggable: false,
		        adaptiveHeight: true, 
		        wrapAround: false,
		        pageDots: false,
		        contain: true,
		        percentPosition: true,
		        cellAlign: 'center'
		      });
      })
    //short-projects-carousel
    if ( $(".short-projects-carousel .carousel-items figure").length > 1){
	      var crs = $('.short-projects-carousel .carousel-items').flickity({
	        imagesLoaded: true,
	        autoPlay: false,
	        freeScroll: false,
	        pauseAutoPlayOnHover: true,
	        arrowShape: arrowStyle,
	        initialIndex: Math.round($(".short-projects-carousel .carousel-items figure").length / 2),
	        prevNextButtons: true,
	        draggable: false,
	        adaptiveHeight: true, 
	        wrapAround: false,
	        pageDots: false,
	        contain: true,
	        percentPosition: true,
	        cellAlign: 'center'
	      });
	      crs.data("flickity");
/*
	      crs.on( 'select.flickity', function( event, index ) {
					var index = $(this).find("figure.is-selected").index();
					if( ($(this).find("figure").length-4) == index )
	      		$(".short-projects-items .next").hide();
	      	else
	      		$(".short-projects-items .next").show();
					console.log(index);
				});
				*/
    }


    	





		window.carouselArticle = function() {
			if ($(".carousel-article").length >= 0) {
				var carouselMain = $(".carousel-article .carousel-main"),
					carouselNav = $(".carousel-article .carousel-nav");

				for (var i = 0; i < carouselMain.length; i++) {
					var crs = $(carouselMain)
						.eq(i)
						.flickity({
							imagesLoaded: true,
							prevNextButtons: false,
							cellAlign: "center",
							bgLazyLoad: 1,
							//friction: 1,
							//selectedAttraction: 1,
							initialIndex: 1,
							draggable: false,
							contain: true,
							pageDots: false
						});
					var flkty = crs.data("flickity");

					$(carouselNav).eq(i).flickity({
						imagesLoaded: true,
						initialIndex: 1,
						asNavFor: $(carouselMain)[i],
						prevNextButtons: true,
						draggable: true,
						percentPosition: true,
						//wrapAround: true,
						cellAlign: "center",
						adaptiveHeight: true,
						//contain: true,
						pageDots: false
					});
          $("[data-fancybox]").fancybox({
            afterShow: function(instance, current) {
              this.$content.find(".carousel-main").flickity("resize");
              this.$content.find(".carousel-nav").flickity("resize");
            }
          });
				}
			}
		};
		carouselArticle();
		
		/* Пункты формы */
		$("form").delegate(".form-item", "change", function(){
			$(this).val().length ? $(this).attr("filled", "filled") : $(this).removeAttr("filled");
		});


    // Прибавление-убавление значении
    (function(){
      var form = $("[data-counter]") || null;;
      if( !form )
        return;
      var cntfactor = form.attr("data-counter")*1;

      $(document).on("click", "[data-counter-btn]", function(){
        var cntVal;
        var cntInput = $(this).closest( form ).find("[data-counter-input]");
        
        cntVal = (cntInput.val()*1);

        if( $(this).hasClass("plus") )
          cntVal = cntVal + cntfactor;
        if( $(this).hasClass("minus") & cntVal > 0 )
          cntVal = cntVal - cntfactor;
        if( isNaN( cntVal ) || cntVal < 0) cntVal = 0;
        cntInput.val( cntVal ).attr("value", cntVal)
      })
      $(".cnt-input").on( "keypress", function(e){
        //console.log(this, e);
      } )

    })();


    
    $(document).delegate(".productions-items figure", "click", function(){
    	var select = $(this).index();
    	bnrCarousel.flickity( 'select', select );
    })






		function onLoaded() {
			/*MASONRY*/
			if ($(".grid-img").length != 0) {
				var $grid = $(".grid-img").masonry({
					itemSelector: ".grid-img-item",
					columnWidth: ".grid-img-sizer",
					percentPosition: true
				});
			}

		}





		//SCROLL
		var minMenu = $(".header-scroll") || null;
		var headerRange = false;
		var staffProgressStatus = false;
		$(window).on("scroll", function(e) {

			//Адаптация хедера при скролинге
			if ($(window).scrollTop() > 60 && headerRange == false) {

				headerRange = true;
				if (minMenu) minMenu.addClass("scrolled").addClass("down");

			} else if ($(window).scrollTop() < 60 && headerRange == true) {
				headerRange = !true;
				if (minMenu) minMenu.removeClass("scrolled");
			} //.originalEvent.wheelDelta


			if( scrolledDiv($(".staff-progress")) && !staffProgressStatus ){
				staffProgress();
				staffProgressStatus = !staffProgressStatus;
			}
		});


		$(window).on("mousewheel", function(event) {
			if (!headerRange) return;
			if (event.originalEvent.wheelDelta >= 0) {
				minMenu.removeClass("up");
			} else {
				minMenu.addClass("up");
			}
		});












		//Preloader
		window.preLoader = {

			preImg: function(img) {
				var images = img || document.images,
					imagesTotalCount = images.length,
					imagesLoadedCount = 0,
					preloadPercent = $(".percent").text("0 %");

				if (imagesTotalCount == 0) {
					preOnload();
					$(preloadPercent).text("100 %");
				}

				for (var i = 0; i < imagesTotalCount; i++) {
					var image_clone = new Image();
					image_clone.onload = image_loaded;
					image_clone.onerror = image_loaded;
					image_clone.src = images[i].src;
				}

				function preOnload() {
					onLoaded();
				}

				function image_loaded() {
					imagesLoadedCount++;
					var per = (100 / imagesTotalCount * imagesLoadedCount) << 0;

					setTimeout(function() {
						//console.log(per);
						$(preloadPercent).text(per + "%");
					}, 1);

					if (imagesLoadedCount >= imagesTotalCount) preOnload();
				}
			}
		};
		preLoader.preImg();



















	});
})(jQuery);

var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac = /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent);

// COMMON FUNCTION

setTimeout(function() {
	//jQuery FUNCITON
	$.fn.onResized = function() {
		onResized(function() {
			this;
		});
		return this;
	};
}, 10);




function checkSm() {
	return $(document).width() <= 991;
}

function checkMd() {
	return $(document).width() < 1199 && !checkSm();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function onResized(f) {
	if (typeof f === "function") f();
	$(window).on("resize", function(e) {
		if (typeof f === "function") f();
	});
	return this;
}

function scrolledDiv(el) {
	try {
		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elTop = $(el).offset().top,
			elBottom = elTop + $(el).height() / 1.8;
	} catch (err) {
		console.error();
	}

	return elBottom <= docViewBottom && elTop >= docViewTop;
}

function roundFix( num, cnt ){
	num = num+""
	cnt = cnt + (/./.test(num) || null ? 1 : 0);
	return num.substring( 0,  cnt)*1
}

function intSpace( int, replaceType ){
		var cnt = 0;
		var newInt = "";
		int = int*1;
		replaceType = replaceType || " ";
		if( typeof int === NaN )
			return;
		var arrInt = (int+"").match(/([0-9])/gim).reverse();
		for (var i = 0; i < arrInt.length; i++) {
			cnt++;
			newInt = arrInt[i]+newInt
			if(cnt === 3){
				newInt = replaceType+newInt;
				cnt = 0;
			}
		}
		return newInt;
}