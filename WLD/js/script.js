       // Slider                                     
       var slides = document.querySelectorAll('#slides .slide');
       var currentSlide = 0;
       
       function nextSlide() {
       	goToSlide(currentSlide+1);
       }
       
       function previousSlide() {
       	goToSlide(currentSlide-1);
       }
       
       function goToSlide(n) {
       	slides[currentSlide].className = 'slide';
       	currentSlide = (n+slides.length)%slides.length;
       	slides[currentSlide].className = 'slide showing';
       }
       var next = document.getElementById('next');
       var previous = document.getElementById('prev');
       
       next.onclick = function() {
       	nextSlide();
       };
       previous.onclick = function() {
       	previousSlide();
       };

/// HAMBURGER //////////////////////////////
var hum = document.querySelector(".hamburger ")
var humanimate = document.querySelector(".hamburger-btn ");
var nav = document.querySelector(".header__menu-mobile")
var first = document.querySelector(".first")
hum.onclick = function() {
	humanimate.classList.toggle("hamburger-btn__active");
	nav.classList.toggle("header__menu-mobile-acitve");
	first.classList.toggle("first-mob");
}


////// User Timing API /////////////////////
performance.mark("startWork");
doWork(); // Код для замера
performance.mark("endWork");

var items = performance.getEntriesByType('mark');
console.log(items)

//////////lazy load///////////
var LazyLoad = {

	images: [],

	

	init: function () {

		this.initOnLoad();

		this.initOnScroll();

	},

	

	initOnLoad: function () {

		var that = this;

		$(window).on('load', function () {

			that.prepareImagesCollection();

			that.checkImages();

		});

		return false;

	},

	

	prepareImagesCollection: function () {

		var that = this;

		

		$('img[data-src]').each(function () {

			var image = {

				object: $(this),

				offset: $(this).offset().top,

				srcset: $(this).attr('data-srcset') ? $(this).attr('data-srcset') : null,

				src: $(this).attr('data-src') ? $(this).attr('data-src') : null,

				loaded: false

			};

			

			that.images.push(image);

		});

		return false;

	},

	

	checkImages: function () {

		var that = this;

		for (var i = 0; i < that.images.length; i++) {

			var image = that.images[i];

			if (image.loaded === false && image.offset < ($(window).scrollTop() + $(window).height() + 300)) {

				that.loadImage(image);

				image.loaded = true;

			}

		}

		return false;

	},

	

	loadImage: function (image) {

		image.object.attr('srcset', image.srcset)

		.attr('src', image.src)

		.removeAttr('data-srcset')

		.removeAttr('data-src');

		return false;

	},

	

	initOnScroll: function () {

		var that = this;

		$(window).on('scroll', function () {

			that.checkImages();

		});

		return false;

	}

};



LazyLoad.init();