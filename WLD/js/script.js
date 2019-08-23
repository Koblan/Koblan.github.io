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

/////////////////////MODAL/////////////////////////////////////////////
var buttonCloseModal = document.querySelector(".modal__header-close");
var button = document.querySelector(".open-modal");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

function openModal(){
	backdrop.style.display = 'block';
	modal.style.display = 'block';
}

function closeModal() {
	backdrop.style.display = 'none';
	modal.style.display = 'none';
}

button.onclick = openModal;
buttonCloseModal.onclick = closeModal;

////////////////////////////////////ACCODIAN/////////////////////////////////////////////////////////////////////////////////////////////////
var title = document.getElementsByClassName("accardion-title");
var cont = document.getElementsByClassName("aaccardion-cont");


for (var i = 0; i < title.length; i++) {
	var curTitle = title[i];
	title[i].addEventListener('click', function() {
		var classes = this.getAttribute('class'),
		newClasses = '',
		classesArr = classes.split(' '),
		newClassesArr = classes.split(' ');
		for (var j = 0; j < classesArr.length; j++) {
			if (classesArr[j] == 'active') {
				classesArr.splice([j], 1);
			}
		}
		if (classesArr.length === newClassesArr.length) {
			classesArr.push('active');
			newClasses = classesArr.join(' ');
		} else {
			newClasses = classesArr.join(' ');
		}

		for (var l = 0; l < title.length; l++) {
			oldClasses = title[l].getAttribute('class');
			oldClassesArr = oldClasses.split(' ');
			for (var k = 0; k < oldClassesArr.length; k++) {
				if (oldClassesArr[k] == 'active') {
					oldClassesArr.splice([k], 1);
				}
				oldClasses = oldClassesArr.join(' ');
				title[l].setAttribute('class', oldClasses);

			}
		}
		this.setAttribute('class', newClasses);
	})
}
