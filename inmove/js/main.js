function myFunction(x) {
  if (x.matches) { // If media query matches
   $('.header__products').slick({
   	 nextArrow: '.product-next',
     prevArrow: '.product-prev',
      dots: true
   });
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes