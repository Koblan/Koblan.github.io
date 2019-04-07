
$(document).on('click','.cardd',function(){
    $('.card-buy').toggleClass('passivec');
    $('.slick-dots').removeClass('passive');
    $('.slick-dots').addClass('activec');

});
$(document).on('click','.card-buy-header__close',function(){
    $('.card-buy').toggleClass('passivec');
    $('.slick-dots').toggleClass('passive');

});
$(document).on('click','.card-buy-header__back',function(){
    $('.card-buy').toggleClass('passivec');
    $('.slick-dots').toggleClass('passive');

});
$('.card-buy__img').slick({
  dots: true,
  prevArrow: $('.prev'),
      nextArrow: $('.next')
});
$('.card-img-big__slider').slick({
  prevArrow: $('.card-img-big__prev'),
  nextArrow: $('.card-img-big__next')
});

$(document).on('click','.card-img',function(){
    $('.card-img-big').toggleClass('passivecar');
});
$(document).on('click','.card-img-big__close',function(){
    $('.card-img-big').toggleClass('passivecar');
});
submit.onclick=function(){
setTimeout('document.location.href="thanks_1.html";', 2000);}
$(document).on('click','.card-buy__content-btn',function(){
    $('.card-form').toggleClass('passive');
    $('.tutten').toggleClass('passive');
});

$(document).on('click','.tutten',function(){
    $('.card-form').toggleClass('passive');
    $('.tutten').toggleClass('passive');
});
