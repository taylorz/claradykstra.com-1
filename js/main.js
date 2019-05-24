$('document').ready(function(){
  AOS.init({
    once: true
  });
  $('.the-carousel').slick({
	  dots: false,
    centerMode: true,
    centerPadding: '15%',
	  infinite: false,
	  speed: 250,
	  slidesToShow: 1,
	  easing: 'easeInOut',
	  prevArrow: $('.prev'),
	  nextArrow: $('.next')
	});
  $('.the-carousel-captions').slick({
	  dots: false,
    centerMode: true,
    centerPadding: '15%',
	  infinite: false,
	  speed: 250,
	  slidesToShow: 1,
	  easing: 'easeInOut',
	  prevArrow: $('.prev'),
	  nextArrow: $('.next'),
    asNavFor: '.the-carousel'
	});
});
