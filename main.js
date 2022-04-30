$(".slider-one")
.not(".slick-initialized")
.slick({

	prevArrow:".site-slider.prev",
	nextArrow: ".site-slider.next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed: 3000
});

var btn = document.querySelector('.nav-btn');
var nav_toggle = document.querySelector('.links-div');
btn.addEventListener('click', function () {
  if (nav_toggle.style.height === '0vh') nav_toggle.style.height = '30vh';
  else nav_toggle.style.height = '0vh';
});