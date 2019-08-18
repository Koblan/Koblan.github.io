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
hum.onclick = function() {
	humanimate.classList.toggle("hamburger-btn__active");
	nav.classList.toggle("header__menu-mobile-acitve");
}