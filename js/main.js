$('document').ready(function(){
  AOS.init({
    once: true
  });
  $('.the-carousel').slick({
	  dots: false,
    centerMode: true,
    centerPadding: '15%',
	  infinite: false,
	  speed: 5000,
	  slidesToShow: 1,
	  easing: 'easeInOut',
    // fade: true,
    // focusOnSelect: true,
    // arrows: false,

	  prevArrow: $('.prev'),
	  nextArrow: $('.next')
	});
});
