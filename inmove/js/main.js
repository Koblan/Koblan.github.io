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
function myFunction2(y) {
  if (y.matches) { // If media query matches
  	$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('.batut-acc__item-title').on('click', f_acc);
});
 
function f_acc(){
//скрываем все кроме того, что должны открыть
  $('.batut-acc__item-text').not($(this).next()).slideUp(1000);

  $('.button').not($(this).next()).toggleClass("button-active");

// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(1000);
    if($(this).hasClass('active')){
  				$(this).removeClass("active");
  				$('.button').removeClass("button-active");
  			}else{
	            $('.button').toggleClass("button-active");
  				$(this).find(".button").addClass("button-active");
  				$(".batut-acc__item-title").removeClass("active");
  				$(this).addClass("active");
  			}
}


  	
  }
}




var y = window.matchMedia("(max-width: 560px)")
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2) // Attach listener function on state changes
