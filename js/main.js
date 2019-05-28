$('document').ready(function(){
  AOS.init({
    once: true
  });

  var numSlick = 0;
  $('.project-body-carousel').each( function() {
    numSlick++;
    $(this).find(".prev").addClass( 'slider-' + numSlick );
    $(this).find(".next").addClass( 'slider-' + numSlick );
    $(this).find(".the-carousel").addClass( 'slider-' + numSlick ).slick({
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // arrows: false,
      // fade: true,
      dots: false,
      centerMode: true,
      centerPadding: '13%',
      infinite: false,
      speed: 250,
      slidesToShow: 1,
      easing: 'easeInOut',
      prevArrow: $('.prev.slider-' + numSlick),
      nextArrow: $('.next.slider-' + numSlick),
      asNavFor: '.the-carousel-captions.slider-' + numSlick
    });
  });

  numSlick = 0;
  $('.project-body-carousel').each( function() {
    numSlick++;
    $(this).find(".prev").addClass( 'slider-' + numSlick );
    $(this).find(".next").addClass( 'slider-' + numSlick );
    $(this).find(".the-carousel-captions").addClass( 'slider-' + numSlick ).slick({
      // vertical: false,
      // slidesToShow: 4,
      // slidesToScroll: 1,
      dots: false,
      centerMode: true,
      centerPadding: '13%',
      infinite: false,
      speed: 250,
      slidesToShow: 1,
      easing: 'easeInOut',
      prevArrow: $('.prev.slider-' + numSlick),
      nextArrow: $('.next.slider-' + numSlick),
      asNavFor: '.the-carousel.slider-' + numSlick
      // arrow: false,
      // focusOnSelect: true,
      // responsive: [
      //   {
      //     breakpoint: 800,
      //     settings: {
      //       slidesToShow: 3,
      //      }
      //   }
      // ]
    });
  });

  // $('.the-carousel').each(function(key, item) {
  //
  //   var sliderIdName = 'the-carousel' + key;
  //   var sliderNavIdName = 'the-carousel-captions' + key;
  //
  //   this.id = sliderIdName;
  //   $('.the-carousel-captions')[key].id = sliderNavIdName;
  //
  //   var sliderId = '#' + sliderIdName;
  //   var sliderNavId = '#' + sliderNavIdName;
  //
  //   $(sliderId).slick({
  //     // slidesToShow: 1,
  //     // slidesToScroll: 1,
  //     // arrows: false,
  //     // fade: true,
  //     // asNavFor: sliderNavId
  //     dots: false,
  //     centerMode: true,
  //     centerPadding: '15%',
  //     infinite: false,
  //     speed: 250,
  //     slidesToShow: 1,
  //     easing: 'easeInOut',
  //     prevArrow: $('.prev'),
  //     nextArrow: $('.next'),
  //     asNavFor: sliderNavId
  //   });
  //
  //   $(sliderNavId).slick({
  //     // slidesToShow: 4,
  //     // slidesToScroll: 1,
  //     // asNavFor: sliderId,
  //     // dots: true,
  //     // arrows: true,
  //     // centerMode: false,
  //     // focusOnSelect: true
  //     dots: false,
  //     centerMode: true,
  //     centerPadding: '15%',
  //     infinite: false,
  //     speed: 250,
  //     slidesToShow: 1,
  //     easing: 'easeInOut',
  //     prevArrow: $('.prev'),
  //     nextArrow: $('.next'),
  //     // asNavFor: '.the-carousel'
  //     asNavFor: sliderId
  //   });
  //
  // });

// $('.the-carousel').slick({
//   dots: false,
//   centerMode: true,
//   centerPadding: '15%',
//   infinite: false,
//   speed: 250,
//   slidesToShow: 1,
//   easing: 'easeInOut',
//   prevArrow: $('.prev'),
//   nextArrow: $('.next')
// });
// $('.the-carousel-captions').slick({
//   dots: false,
//   centerMode: true,
//   centerPadding: '15%',
//   infinite: false,
//   speed: 250,
//   slidesToShow: 1,
//   easing: 'easeInOut',
//   prevArrow: $('.prev'),
//   nextArrow: $('.next'),
//   asNavFor: '.the-carousel'
// });


//RIKERS

//GER

//INFORMATION
});
