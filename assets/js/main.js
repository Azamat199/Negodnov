
// Подгрузка контента каталога
$(document).ready(function () {
	let count = $('.item-catalog').length,
		start = 2,
		show = 2;

	$('.item-catalog').addClass('d-none');
	$('.item-catalog:lt(' + start + ')').removeClass('d-none');

	$('.show-more').click(function (e) {
		e.preventDefault();
		start = (start + show <= count) ? start + show : count;

		//  $(this).text(load);
		$('.item-catalog:lt(' + start + ')').removeClass('d-none');

		if ($('.item-catalog:not(.d-none)').length == count) {
			$(this).parent().remove();
		}

	});

});

$('.about__download').click(function () {
	$('.about__bottom-text--d-none').toggleClass('about__bottom-text--d-block');
	$('.about__download').toggleClass('about__download--rotate');
});
$('.header-link-active a').click(function () {
	$('.header-link-active a').toggleClass('header-link-active-bg');
	$('.arrow-white').toggleClass('arrow-white-rotate');
});
// Бургер
$('.header__burger').click(function (event) {
	$('.header__burger,.header-menu').toggleClass('active');
	$('body').toggleClass('lock');
});



$(document).scroll(function () {
	checkOffset();
});
function checkOffset() {
	if ($('.left-connection__position').offset().top + $('.left-connection__position').height()
		>= $('#footer',).offset().top - 10)
		$('.left-connection__position').css('position', 'absolute');
	if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
		$('.left-connection__position').css('position', 'fixed'); // restore when you scroll up
};

// Scroll
// window.addEventListener('scroll', e => {
// 	let header = document.getElementById('left-connection').classList;
// 	let active_class = "left-connection-scrolled";

// 	if(pageYOffset > 10) header.add(active_class)
// 	else header.remove(active_class)
//  });


