$('document').ready(function(){
  AOS.init({
    once: true
  });
  $('.essay-carousel').slick({
	  dots: false,
    centerMode: true,
    centerPadding: '15%',
	  infinite: false,
	  speed: 250,
	  slidesToShow: 1,
	  easing: 'easeInOut',
    // fade: true,
    // focusOnSelect: true,
    // arrows: false,

	  prevArrow: $('.prev'),
	  nextArrow: $('.next')
	});
});
